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
  "AEIOT": { "name": "Applied Elec & IoT" },
  "AIMA":  { "name": "AI Multidisc Apps" },
  "BCE":   { "name": "Basics of Civil Engg" },
  "BMS":   { "name": "Basics Meas & Sensor" },
  "BMT":   { "name": "Basics of Mfg Tech" },
  "CAD":   { "name": "CAD Drafting" },
  "CAED":  { "name": "CA Engg & Drawing" },
  "CS":    { "name": "Comm Skills" },
  "DPI":   { "name": "Digital Public Infra" },
  "DPV":   { "name": "Data Proc & Viz" },
  "DS":    { "name": "Discrete Struct" },
  "EC":    { "name": "Engg Chemistry" },
  "EEU":   { "name": "Electrical Energy Util" },
  "EM":    { "name": "Engg Mechanics" },
  "EP":    { "name": "Engg Physics" },
  "FEET":  { "name": "Foundations Elec & ET" },
  "FME":   { "name": "Foundations Mech Engg" },
  "FMS":   { "name": "Fund Meas & Sensor" },
  "FPI":   { "name": "Fund Physical Infra" },
  "IPSSF": { "name": "Intro Prod & Smart Sys" },
  "NM":    { "name": "Nanomaterials" },
  "PD":    { "name": "Personality Dev" },
  "QP":    { "name": "Quantum Physics" },
  "PS":    { "name": "Probability & Stats" },
  "VCDE":  { "name": "Vector Calculus" },
  "PPS":   { "name": "Prog for Prob Solv" },
  "WD":    { "name": "Web Design" },
  "PP":    { "name": "Python Programming" },
  "EEMI":  { "name": "Elec & Elec Meas" },
  "RDOS":  { "name": "Robotics & Drone Safe" },
  "FFR":   { "name": "Fuel Furnaces & Refrac" },
  "EVA":   { "name": "EV Architecture" },
  "GE":    { "name": "Geomatic Engg" },
  "FCP":   { "name": "Fund Const Practices" },
  "MPFL":  { "name": "Mfg Practices & FabLab" },
  "DEFAULT": {"name": "Unknown" }
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