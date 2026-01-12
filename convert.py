import json
import csv
import re

# --- CONFIGURATION ---
input_filename = 'ALL.xlsx - Sheet1.csv'
output_filename = 'students.js'

print(f"--- COEP DATA CONVERTER (FIXED NAMES) ---")
print(f"Reading {input_filename}...")

# 1. Subject Metadata
SUBJECT_METADATA = {
    "AEIOT": {"name": "Electronics & IOT", "color": "#e74c3c"},
    "AIMA":  {"name": "AI for Muti",        "color": "#8e44ad"},
    "BCE":   {"name": "Civil",         "color": "#27ae60"},
    "BMS":   {"name": "Measurements & sensors",  "color": "#d35400"},
    "BMT":   {"name": "Biology",       "color": "#16a085"},
    "CAD":   {"name": "CAD",                 "color": "#34495e"},
    "CAED":  {"name": "Drawing",      "color": "#34495e"},
    "CS":    {"name": "Comm Skills",         "color": "#c0392b"},
    "DPI":   {"name": "DPI",                 "color": "#2980b9"},
    "DPV":   {"name": "Data Vis (DPV)",      "color": "#2980b9"},
    "DS":    {"name": "Discrete Struct",     "color": "#16a085"},
    "EC":    {"name": "Engg Chemistry (EC)",     "color": "#f1c40f"},
    "EEU":   {"name": "Electrical Unit",     "color": "#f39c12"},
    "EM":    {"name": "Engg Mechanics",      "color": "#7f8c8d"},
    "EP":    {"name": "Engg Physics",        "color": "#f1c40f"},
    "FEET":  {"name": "Electronics (FEET)",  "color": "#e67e22"},
    "FME":   {"name": "Mechanical (FME)",    "color": "#95a5a6"},
    "FMS":   {"name": "Material Sci (FMS)",  "color": "#d35400"},
    "FPI":   {"name": "Instrumentation (FPI)","color": "#8e44ad"},
    "IPSSF": {"name": "production (IPSSF)", "color": "#2ecc71"},
    "NM":    {"name": "Nanomaterial (NM)",          "color": "#9b59b6"},
    "PD":    {"name": "Personality Dev",     "color": "#e91e63"},
    "QP":    {"name": "Quantum Phy",         "color": "#f1c40f"},
    "PS":    {"name": "Probablity & Stats",       "color": "#1abc9c"},
    "VCDE":    {"name": "Vector calculus",       "color": "#27ae60"},
    "PPS":    {"name": "C",        "color": "#2980b9"},
    "DEFAULT": {"name": "Unknown",           "color": "#34495e"}
}

def parse_division(raw_div):
    if not raw_div:
        return "UNKNOWN", "-"
    raw_div = raw_div.strip().upper()
    match = re.match(r"^([A-Z]+)\s*(\d+)$", raw_div)
    if match:
        return match.group(1), f"Div {match.group(2)}"
    return "UNKNOWN", "-"

def parse_batch(raw_batch):
    if not raw_batch or raw_batch.strip() == "":
        return "-"
    clean = raw_batch.strip()
    if clean.isdigit():
        return f"B{clean}"
    return clean.replace("Batch", "B").replace(" ", "")

student_database = {}
count = 0

try:
    with open(input_filename, 'r', encoding='utf-8', errors='replace') as csvfile:
        reader = csv.DictReader(csvfile)
        
        for row in reader:
            mis = row.get('MIS', '').strip()
            
            # Skip rows with no MIS
            if not mis:
                continue

            # Initialize Student if not exists
            if mis not in student_database:
                student_database[mis] = {
                    "name": "Student", 
                    "info": f"MIS: {mis}",
                    "cards": [],
                    "schedule": {} 
                }

            # --- NAME PROCESSING ---
            fname = row.get('FIRST NAME', '').strip()
            lname = row.get('LAST NAME', '').strip()
            full_name = f"{fname} {lname}".strip()
            
            # If this row has a name, update the database
            if full_name:
                student_database[mis]["name"] = full_name

            # --- COURSE PROCESSING ---
            raw_div = row.get('DIVISION', '').strip()
            if raw_div:
                course_code, div = parse_division(raw_div)
                batch = parse_batch(row.get('BATCH', '').strip())
                
                if course_code != "UNKNOWN":
                    meta = SUBJECT_METADATA.get(course_code, SUBJECT_METADATA["DEFAULT"])
                    
                    new_card = {
                        "code": course_code,
                        "name": meta["name"],
                        "color": meta["color"],
                        "div": div,
                        "batch": batch
                    }
                    
                    # Deduplication
                    exists = False
                    for card in student_database[mis]["cards"]:
                        if card['code'] == course_code:
                            exists = True
                            if card['batch'] == '-' and batch != '-':
                                card['batch'] = batch
                            break
                    
                    if not exists:
                        student_database[mis]["cards"].append(new_card)
                        count += 1

except FileNotFoundError:
    print(f"Error: Could not find '{input_filename}'.")
except Exception as e:
    print(f"Error processing CSV: {e}")

if count > 0:
    print(f"Processed {count} allocations.")
    with open(output_filename, 'w', encoding='utf-8') as f:
        f.write("const GENERATED_DB = ")
        json.dump(student_database, f, indent=2)
        f.write(";")
    print(f"SUCCESS! Created {output_filename}")
else:
    print("No entries found.")