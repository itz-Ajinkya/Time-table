import csv
import json

# --- Configuration ---
CSV_FILE = 'students.csv'
JS_FILE = 'students.js'

# Official Subject Map to restore full names based on codes
# (You can expand this list if needed)
SUBJECT_MAP = {
    "AEIOT": "Applied Elec & IoT",
    "AIMA": "AI Multidisc Apps",
    "BCE": "Basics of Civil Engg",
    "BMT": "Basics of Mfg Tech",
    "CAD": "CAD Drafting",
    "CS": "Comm Skills",
    "DPI": "Digital Public Infra",
    "DPV": "Data Proc & Viz",
    "DS": "Discrete Struct",
    "EC": "Engg Chemistry",
    "EEU": "Electrical Energy Util",
    "EM": "Engg Mechanics",
    "EP": "Engg Physics",
    "EVA": "EV Architecture",
    "FCP": "Fund Const Practices",
    "FME": "Foundations Mech Engg",
    "FMS": "Fund Meas & Sensor",
    "FPI": "Fund Physical Infra",
    "GE": "Geomatic Engg",
    "IOT": "Applied Elec & IoT",
    "MPFL": "Mfg Practices & FabLab",
    "NM": "Nanomaterials",
    "PD": "Personality Dev",
    "PP": "Python Programming",
    "PPS": "Prog for Prob Solv",
    "PS": "Probability & Stats",
    "QP": "Quantum Physics",
    "RDOS": "Robotics & Drone Safe",
    "VCDE": "Vector Calculus",
    "WD": "Web Design"
}

def get_subject_name(code):
    return SUBJECT_MAP.get(code, code)  # Returns code if name not found

def main():
    print(f"Reading {CSV_FILE}...")
    db = {}

    try:
        with open(CSV_FILE, 'r', encoding='utf-8') as csvfile:
            reader = csv.DictReader(csvfile)
            
            for row in reader:
                mis = row['MIS'].strip()
                name = row['Name'].strip()
                code = row['Subject Code'].strip()
                div = row['Div'].strip()
                batch = row['Batch'].strip()

                if not mis: continue

                # Initialize student if not present
                if mis not in db:
                    db[mis] = {
                        "name": name,
                        "info": f"MIS: {mis}",
                        "cards": [],
                        "schedule": {}
                    }
                
                # Add card if code is valid
                if code and code != '-':
                    subj_name = get_subject_name(code)
                    card = {
                        "code": code,
                        "name": subj_name,
                        "div": div,
                        "batch": batch
                    }
                    db[mis]['cards'].append(card)

    except FileNotFoundError:
        print(f"Error: {CSV_FILE} not found.")
        return

    # Sort DB by MIS
    sorted_keys = sorted(db.keys())
    sorted_db = {k: db[k] for k in sorted_keys}

    print(f"Found {len(sorted_db)} students. Saving to {JS_FILE}...")

    # Write to JS file
    json_str = json.dumps(sorted_db, indent=2)
    with open(JS_FILE, 'w', encoding='utf-8') as f:
        f.write(f"const GENERATED_DB = {json_str};\n")

    print("Success! File regenerated.")

if __name__ == "__main__":
    main()