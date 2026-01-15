import json
import re
import csv

# --- Configuration ---
JS_FILE = 'students.js'
CSV_FILE = 'students.csv'

def main():
    print(f"Reading {JS_FILE}...")
    try:
        with open(JS_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: {JS_FILE} not found.")
        return

    # Extract JSON object from the JS file
    match = re.search(r'const GENERATED_DB\s*=\s*(\{.*)', content, re.DOTALL)
    if not match:
        print("Error: Could not find GENERATED_DB object in students.js")
        return
        
    json_str = match.group(1).strip()
    if json_str.endswith(';'):
        json_str = json_str[:-1]
        
    try:
        db = json.loads(json_str)
    except json.JSONDecodeError as e:
        print(f"Error decoding JSON: {e}")
        return

    print(f"Found {len(db)} students. Converting to Normalized CSV...")

    # Define headers
    headers = ['MIS', 'Name', 'Subject Code', 'Div', 'Batch']

    with open(CSV_FILE, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(headers)

        # Iterate through students
        # Sorting by MIS for cleaner output
        for mis in sorted(db.keys()):
            data = db[mis]
            name = data.get('name', 'Unknown')
            cards = data.get('cards', [])
            
            # Create a new row for EVERY subject card
            for card in cards:
                code = card.get('code', '-')
                div = card.get('div', '-')
                batch = card.get('batch', '-')
                
                # Write row: MIS, Name, Code, Div, Batch
                writer.writerow([mis, name, code, div, batch])

    print(f"Success! Saved to {CSV_FILE}")

if __name__ == "__main__":
    main()