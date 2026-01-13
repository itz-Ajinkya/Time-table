import os
import json
import re
import csv
from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Configuration
STUDENTS_FILE = 'students.js'
LOGIC_FILE = 'logic.js'
CSV_FILE = 'ALL.xlsx - Sheet1.csv'
CONVERT_FILE = 'CONVERT.PY'

def load_students():
    if not os.path.exists(STUDENTS_FILE):
        return {}
    with open(STUDENTS_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        # Extract JSON from the JS variable assignment
        match = re.search(r'const GENERATED_DB = ({[\s\S]*?});', content)
        if match:
            return json.loads(match.group(1))
    return {}

def load_schedule_and_logic_content():
    if not os.path.exists(LOGIC_FILE):
        return {}, ""
    with open(LOGIC_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
        
    # Extract MASTER_SCHEDULE
    match = re.search(r'const MASTER_SCHEDULE = ({[\s\S]*?});', content)
    if match:
        json_str = match.group(1)
        # Fix unquoted keys in JS object to make it valid JSON (e.g. type: "lec" -> "type": "lec")
        # This regex finds keys that are not quoted and quotes them
        json_str = re.sub(r'(?<!")\b([a-zA-Z_][a-zA-Z0-9_]*)\s*:', r'"\1":', json_str)
        # Remove comments if any
        json_str = re.sub(r'//.*', '', json_str)
        # Remove trailing commas (valid in JS but not JSON)
        json_str = re.sub(r',(\s*[}\]])', r'\1', json_str)
        try:
            schedule = json.loads(json_str)
            return schedule, content
        except json.JSONDecodeError as e:
            print(f"Error parsing schedule: {e}")
            return {}, content
    return {}, content

def update_csv_student(mis, student_data):
    if not os.path.exists(CSV_FILE):
        return

    rows = []
    with open(CSV_FILE, 'r', newline='', encoding='utf-8', errors='replace') as f:
        reader = csv.DictReader(f)
        fieldnames = reader.fieldnames
        rows = list(reader)

    full_name = student_data.get('name', '')
    parts = full_name.strip().split(' ', 1)
    fname = parts[0]
    lname = parts[1] if len(parts) > 1 else ''

    cards_by_code = {card['code']: card for card in student_data.get('cards', [])}

    for row in rows:
        if row.get('MIS', '').strip() == mis:
            row['FIRST NAME'] = fname
            row['LAST NAME'] = lname
            
            raw_div = row.get('DIVISION', '').strip()
            match = re.match(r"^([A-Z]+)\s*(\d+)$", raw_div)
            if match:
                code = match.group(1)
                if code in cards_by_code:
                    card = cards_by_code[code]
                    div_num = card['div'].replace('Div', '').strip()
                    row['DIVISION'] = f"{code} {div_num}"
                    
                    batch_num = card['batch'].replace('B', '').strip()
                    if batch_num and batch_num != '-':
                         row['BATCH'] = f"Batch {batch_num}"
                    else:
                         row['BATCH'] = ""

    with open(CSV_FILE, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

def update_convert_py_subject(code, new_name):
    if not os.path.exists(CONVERT_FILE):
        return
    
    with open(CONVERT_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    new_lines = []
    for line in lines:
        if f'"{code}":' in line:
            line = re.sub(r'"name":\s*".*?"', f'"name": "{new_name}"', line)
        new_lines.append(line)
        
    with open(CONVERT_FILE, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

@app.route('/')
def admin_panel():
    return render_template('admin.html')

@app.route('/api/data', methods=['GET'])
def get_data():
    students = load_students()
    schedule, _ = load_schedule_and_logic_content()
    
    # Extract unique subjects for metadata editing
    subjects = {}
    for mis, student in students.items():
        for card in student.get('cards', []):
            code = card.get('code')
            name = card.get('name')
            if code and name:
                subjects[code] = name
                
    return jsonify({
        "students": students,
        "schedule": schedule,
        "subjects": subjects
    })

@app.route('/api/save_student', methods=['POST'])
def save_student():
    data = request.json
    mis = data.get('mis')
    student_data = data.get('data')
    
    # Remove color from cards
    if 'cards' in student_data:
        for card in student_data['cards']:
            card.pop('color', None)

    students = load_students()
    students[mis] = student_data
    
    update_csv_student(mis, student_data)
    
    # Write back to students.js
    with open(STUDENTS_FILE, 'w', encoding='utf-8') as f:
        f.write("const GENERATED_DB = " + json.dumps(students, indent=2) + ";")
        
    return jsonify({"status": "success"})

@app.route('/api/save_schedule', methods=['POST'])
def save_schedule():
    new_schedule = request.json
    
    _, original_content = load_schedule_and_logic_content()
    
    # Replace the MASTER_SCHEDULE block in logic.js
    new_schedule_js = "const MASTER_SCHEDULE = " + json.dumps(new_schedule, indent=4) + ";"
    
    new_content = re.sub(
        r'const MASTER_SCHEDULE = {[\s\S]*?};', 
        new_schedule_js, 
        original_content
    )
    
    with open(LOGIC_FILE, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    return jsonify({"status": "success"})

@app.route('/api/update_subject_name', methods=['POST'])
def update_subject_name():
    data = request.json
    code = data.get('code')
    new_name = data.get('name')
    
    update_convert_py_subject(code, new_name)
    
    students = load_students()
    count = 0
    
    # Update all occurrences of this subject in student cards
    for mis in students:
        for card in students[mis]['cards']:
            if card.get('code') == code:
                card['name'] = new_name
                count += 1
            card.pop('color', None)
                
    # Save students.js
    with open(STUDENTS_FILE, 'w', encoding='utf-8') as f:
        f.write("const GENERATED_DB = " + json.dumps(students, indent=2) + ";")
        
    return jsonify({"status": "success", "updated_count": count})

if __name__ == '__main__':
    # host='0.0.0.0' allows access from outside the container (needed for Codespaces/Render)
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=True, host='0.0.0.0', port=port)
