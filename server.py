import http.server
import socketserver
import json
import os
import subprocess
import sys

# Ensure the server serves files from the directory where the script is located
os.chdir(os.path.dirname(os.path.abspath(__file__)))

PORT = 8000
CSV_FILE = 'ALL.xlsx - Sheet1.csv'

class RequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        try:
            req = json.loads(post_data.decode('utf-8'))
            content = req.get('content')
            
            if self.path == '/save_students':
                with open('students.js', 'w', encoding='utf-8') as f:
                    f.write(content)
                print("Updated students.js")

                # Automatically run the JS to CSV conversion script
                try:
                    print("Running js_to_cvs.py...")
                    subprocess.run([sys.executable, 'js_to_cvs.py'], check=True)
                    print("Executed js_to_cvs.py successfully.")
                except Exception as e:
                    print(f"Error running js_to_cvs.py: {e}")

            elif self.path == '/save_logic':
                with open('logic.js', 'w', encoding='utf-8') as f:
                    f.write(content)
                print("Updated logic.js")
            elif self.path == '/save_csv':
                with open(CSV_FILE, 'w', encoding='utf-8', newline='') as f:
                    f.write(content)
                print(f"Updated {CSV_FILE}")
            else:
                self.send_error(404, "Endpoint not found")
                return

            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'status': 'success'}).encode('utf-8'))
            
        except Exception as e:
            print(f"Error: {e}")
            self.send_error(500, str(e))

print(f"--- Local Admin Server Running ---")
print(f"1. Keep this window open.")
print(f"2. Open http://localhost:{PORT}/admin.html in your browser.")
print(f"----------------------------------")

with socketserver.TCPServer(("", PORT), RequestHandler) as httpd:
    httpd.serve_forever()
