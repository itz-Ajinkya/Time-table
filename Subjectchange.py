import json
import re

# --- 1. Hardcoded Updates from Book1.xlsx ---
# This list contains every valid update found in the spreadsheet.
updates_data = [
    {'mis': '612511006', 'updates': [('AEIOT', 'FMS', 'Div 3', '-')]},
    {'mis': '612507103', 'updates': [('NM', 'FMS', 'Div 3', '-')]},
    {'mis': '612515411', 'updates': [('EEU', 'FMS', 'Div 2', '-')]},
    {'mis': '612510008', 'updates': [('BCE', 'FMS', 'Div 3', '-')]},
    {'mis': '612510041', 'updates': [('EVA', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612501054', 'updates': [('WD', 'CAD', 'Div 1', 'B1'), ('AIMA', 'FMS', 'Div 1', '-')]},
    {'mis': '612510115', 'updates': [('AEIOT', 'FMS', 'Div 3', '-'), ('PP', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612515196', 'updates': [('EEU', 'BCE', 'Div 1', 'B1'), ('PPS', 'WD', 'Div 1', '-')]},
    {'mis': '612501145', 'updates': [('AEIOT', 'FMS', 'Div 1', '-')]},
    {'mis': '612501165', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612507046', 'updates': [('PPS', 'CAD', 'Div 1', 'B1')]},
    {'mis': '612501077', 'updates': [('PPS', 'FCP', 'Div 1', 'B1')]},
    {'mis': '612505100', 'updates': [('DPI', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612505146', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612515135', 'updates': [('FME', 'BCE', 'Div 1', '-')]},
    {'mis': '612507080', 'updates': [('RDOS', 'DPI', 'Div 1', 'B1')]},
    {'mis': '612510054', 'updates': [('FMS', 'BCE', 'Div 1', '-')]},
    {'mis': '612501049', 'updates': [('EEU', 'NM', 'Div 1', '-'), ('PP', 'FCP', 'Div 1', 'B1')]},
    {'mis': '612515225', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612501088', 'updates': [('FMS', 'FME', 'Div 1', '-'), ('WD', 'GE', 'Div 1', 'B1')]},
    {'mis': '612501063', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612505133', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612572083', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612513020', 'updates': [('CAD', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612505043', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612510157', 'updates': [('AIMA', 'NM', 'Div 2', '-')]},
    {'mis': '612510021', 'updates': [('AIMA', 'FPI', 'Div 1', '-')]},
    {'mis': '612513083', 'updates': [('NM', 'AEIOT', 'Div 3', '-')]},
    {'mis': '612505149', 'updates': [('AEIOT', 'NM', 'Div 2', '-')]},
    {'mis': '612501009', 'updates': [('EVA', 'FCP', 'Div 1', 'B1')]},
    {'mis': '612510145', 'updates': [('AIMA', 'NM', 'Div 2', '-'), ('PP', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612501093', 'updates': [('PP', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612507169', 'updates': [('DPI', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612501016', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612501135', 'updates': [('CAD', 'FCP', 'Div 1', 'B2')]},
    {'mis': '612510140', 'updates': [('AEIOT', 'NM', 'Div 2', '-'), ('RDOS', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612515269', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612501105', 'updates': [('PPS', 'FCP', 'Div 1', 'B2')]},
    {'mis': '612509049', 'updates': [('DPV', 'WD', 'Div 2', 'B1')]},
    {'mis': '612515085', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612515013', 'updates': [('NM', 'FPI', 'Div 1', '-')]},
    {'mis': '612510164', 'updates': [('CAD', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612510119', 'updates': [('CAD', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612509068', 'updates': [('EW', 'WD', 'Div 2', 'B1')]},
    {'mis': '612572058', 'updates': [('NM', 'BCE', 'Div 1', '-')]},
    {'mis': '612572064', 'updates': [('NM', 'EEU', 'Div 1', '-')]},
    {'mis': '612507064', 'updates': [('CAD', 'WD', 'Div 2', 'B2')]},
    {'mis': '612515007', 'updates': [('CAD', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612509074', 'updates': [('NM', 'FME', 'Div 1', '-'), ('RDOS', 'WD', 'Div 2', 'B1')]},
    {'mis': '612515250', 'updates': [('FPI', 'NM', 'Div 1', '-')]},
    {'mis': '612515076', 'updates': [('NM', 'FPI', 'Div 1', '-'), ('DPV', 'WD', 'Div 1', 'B1')]},
    {'mis': '612510169', 'updates': [('CAD', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612510076', 'updates': [('RDOS', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612509027', 'updates': [('EEU', 'FME', 'Div 1', '-')]},
    {'mis': '612510062', 'updates': [('AIMA', 'FPI', 'Div 1', '-'), ('WD', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612510078', 'updates': [('RDOS', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612513098', 'updates': [('EEU', 'FME', 'Div 1', '-')]},
    {'mis': '612510027', 'updates': [('CAD', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612510075', 'updates': [('NM', 'AEIOT', 'Div 3', '-')]},
    {'mis': '612513071', 'updates': [('EEU', 'AEIOT', 'Div 3', '-')]},
    {'mis': '612515005', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612501145', 'updates': [('EW', 'FCP', 'Div 1', 'B2')]},
    {'mis': '612501155', 'updates': [('PP', 'FCP', 'Div 1', 'B2')]},
    {'mis': '612510015', 'updates': [('EVA', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612510160', 'updates': [('RDOS', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612513089', 'updates': [('MPFL', 'WD', 'Div 2', 'B3')]},
    {'mis': '612515282', 'updates': [('DPI', 'RDOS', 'Div 1', 'B3')]},
    {'mis': '612510105', 'updates': [('RDOS', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612507163', 'updates': [('WD', 'CAD', 'Div 1', 'B2')]},
    {'mis': '612505020', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612510065', 'updates': [('EVA', 'RDOS', 'Div 1', 'B2')]},
    {'mis': '612515276', 'updates': [('EEU', 'FME', 'Div 1', '-')]},
    {'mis': '612507038', 'updates': [('RDOS', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612510095', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612507057', 'updates': [('RDOS', 'WD', 'Div 1', 'B2')]},
    {'mis': '612510125', 'updates': [('GE', 'CAD', 'Div 1', 'B2')]},
    {'mis': '612515321', 'updates': [('EEU', 'BCE', 'Div 1', '-'), ('EVA', 'WD', 'Div 2', 'B3')]},
    {'mis': '612572016', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612507126', 'updates': [('FMS', 'NM', 'Div 2', '-')]},
    {'mis': '612510152', 'updates': [('EEU', 'NM', 'Div 2', '-')]},
    {'mis': '612572075', 'updates': [('CAD', 'WD', 'Div 1', '-'), ('EEU', 'NM', 'Div 1', 'B3')]},
    {'mis': '612505069', 'updates': [('CAD', 'WD', 'Div 2', 'B1')]},
    {'mis': '612510183', 'updates': [('AEIOT', 'NM', 'Div 2', '-')]},
    {'mis': '612510016', 'updates': [('AEIOT', 'NM', 'Div 2', '-')]},
    {'mis': '612509056', 'updates': [('QP', 'EC', 'Div 1', 'B1')]},
    {'mis': '612511035', 'updates': [('PPS', 'DPV', 'Div 1', 'B2')]},
    {'mis': '612507137', 'updates': [('FMS', 'NM', 'Div 2', '-')]},
    {'mis': '612510087', 'updates': [('AIMA', 'EEU', 'Div 2', '-')]},
    {'mis': '612505004', 'updates': [('DPV', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612505019', 'updates': [('EW', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612505009', 'updates': [('DPI', 'RDOS', 'Div 1', 'B1')]},
    {'mis': '612515368', 'updates': [('EEU', 'NM', 'Div 2', '-')]},
    {'mis': '612515351', 'updates': [('AEIOT', 'NM', 'Div 2', '-')]},
    {'mis': '612515388', 'updates': [('EEU', 'NM', 'Div 2', '-')]},
    {'mis': '612510053', 'updates': [('EEU', 'FPI', 'Div 1', '-')]},
    {'mis': '612515360', 'updates': [('BMT', 'FPI', 'Div 1', '-')]},
    {'mis': '612507013', 'updates': [('CAD', 'EW', 'Div 1', 'B1')]},
    {'mis': '612513060', 'updates': [('EW', 'CAD', 'Div 1', 'B2')]},
    {'mis': '612515400', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612511091', 'updates': [('AEIOT', 'FPI', 'Div 1', '-'), ('PPS', 'RDOS', 'Div 1', 'B2')]},
    {'mis': '612510023', 'updates': [('AIMA', 'FPI', 'Div 1', '-')]},
    {'mis': '612510181', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612515145', 'updates': [('FME', 'FPI', 'Div 1', '-')]},
    {'mis': '612513077', 'updates': [('PPS', 'FCP', 'Div 1', 'B2')]},
    {'mis': '612501119', 'updates': [('EW', 'CAD', 'Div 1', 'B2')]},
    {'mis': '612511049', 'updates': [('AEIOT', 'EEU', 'Div 2', '-')]},
    {'mis': '612511070', 'updates': [('EEU', 'FPI', 'Div 1', '-')]},
    {'mis': '612501034', 'updates': [('FCP', 'GE', 'Div 1', 'B1')]},
    {'mis': '612505157', 'updates': [('EVA', 'EW', 'Div 1', 'B3')]},
    {'mis': '612510176', 'updates': [('EVA', 'CAD', 'Div 1', 'B2')]},
    {'mis': '612501038', 'updates': [('AEIOT', 'EEU', 'Div 1', '-')]},
    {'mis': '612572019', 'updates': [('EP', 'QP', 'Div 4', 'B1')]},
    {'mis': '612515103', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612515203', 'updates': [('EEU', 'FPI', 'Div 1', '-')]},
    {'mis': '612515357', 'updates': [('AEIOT', 'NM', 'Div 2', '-')]},
    {'mis': '612505122', 'updates': [('NM', 'FPI', 'Div 1', '-'), ('EVA', 'EW', 'Div 1', 'B3')]},
    {'mis': '612505183', 'updates': [('DPV', 'EW', 'Div 1', 'B3')]},
    {'mis': '612510030', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612513022', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612501058', 'updates': [('NM', 'EEU', 'Div 1', '-'), ('PP', 'EW', 'Div 1', 'B2')]},
    {'mis': '612510185', 'updates': [('AEIOT', 'NM', 'Div 2', '-'), ('CAD', 'EVA', 'Div 1', 'B2')]},
    {'mis': '612572066', 'updates': [('NM', 'FPI', 'Div 1', '-')]},
    {'mis': '612501035', 'updates': [('FME', 'NM', 'Div 1', '-')]},
    {'mis': '612507142', 'updates': [('EEU', 'NM', 'Div 2', '-')]},
    {'mis': '612507176', 'updates': [('FME', 'NM', 'Div 2', '-')]},
    {'mis': '612572056', 'updates': [('QP', 'EC', 'Div 2', 'B1')]},
    {'mis': '612511054', 'updates': [('BCE', 'AEIOT', 'Div 3', '-')]},
    {'mis': '612511055', 'updates': [('RDOS', 'EVA', 'Div 1', 'B1')]},
    {'mis': '612515389', 'updates': [('CAD', 'RDOS', 'Div 1', '-'), ('AEIOT', 'FPI', 'Div 1', 'B3')]},
    {'mis': '612501114', 'updates': [('DPI', 'GE', 'Div 1', 'B2')]},
    {'mis': '612501137', 'updates': [('EEU', 'NM', 'Div 1', '-')]},
    {'mis': '612515378', 'updates': [('AEIOT', 'NM', 'Div 2', '-')]},
    {'mis': '612515356', 'updates': [('FMS', 'NM', 'Div 2', '-')]},
    {'mis': '612515375', 'updates': [('EEU', 'NM', 'Div 2', '-')]},
    {'mis': '612515355', 'updates': [('EEU', 'NM', 'Div 2', '-')]},
    {'mis': '612515014', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612572078', 'updates': [('NM', 'FPI', 'Div 1', '-')]},
    {'mis': '612515379', 'updates': [('EEU', 'BCE', 'Div 1', '-'), ('DPV', 'WD', 'Div 2', 'B2')]},
    {'mis': '612515350', 'updates': [('FMS', 'NM', 'Div 2', '-')]},
    {'mis': '612513010', 'updates': [('PP', 'RDOS', 'Div 1', 'B1')]},
    {'mis': '612572061', 'updates': [('NM', 'EEU', 'Div 1', '-')]},
    {'mis': '612505048', 'updates': [('EW', 'DPI', 'Div 1', 'B1')]},
    {'mis': '612510086', 'updates': [('AEIOT', 'NM', 'Div 2', '-')]},
    {'mis': '612507151', 'updates': [('DPI', 'MPFL', 'Div 1', 'B2')]},
    {'mis': '612515099', 'updates': [('DPI', 'WD', 'Div 1', 'B1')]},
    {'mis': '612509058', 'updates': [('EW', 'WD', 'Div 2', 'B1')]},
    {'mis': '612509071', 'updates': [('DPV', 'EVA', 'Div 1', 'B1')]},
    {'mis': '612510055', 'updates': [('EEU', 'BMT', 'Div 1', '-'), ('CAD', 'MPFL', 'Div 1', 'B1')]},
    {'mis': '612509005', 'updates': [('NM', 'AIMA', 'Div 2', '-')]},
    {'mis': '612515153', 'updates': [('EEV', 'FMS', 'Div 1', '-')]},
    {'mis': '612513094', 'updates': [('RDOS', 'EVA', 'Div 1', 'B2')]},
    {'mis': '612505127', 'updates': [('AIMA', 'NM', 'Div 2', '-')]},
    {'mis': '612572060', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612510006', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612515283', 'updates': [('FME', 'BCE', 'Div 1', '-')]},
    {'mis': '612515348', 'updates': [('FME', 'BCE', 'Div 1', '-')]},
    {'mis': '612501007', 'updates': [('AIMA', 'BMT', 'Div 1', '-')]},
    {'mis': '612501013', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612501018', 'updates': [('AEIOT', 'FMS', 'Div 1', '-')]},
    {'mis': '612501025', 'updates': [('FME', 'NM', 'Div 1', '-')]},
    {'mis': '612501027', 'updates': [('FME', 'NM', 'Div 1', '-')]},
    {'mis': '612501084', 'updates': [('AEIOT', 'FMS', 'Div 1', '-')]},
    {'mis': '612501092', 'updates': [('NM', 'FMS', 'Div 1', '-')]},
    {'mis': '612501098', 'updates': [('EEU', 'BMT', 'Div 1', '-')]},
    {'mis': '612501125', 'updates': [('AEIOT', 'FMS', 'Div 1', '-')]},
    {'mis': '612501141', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612501144', 'updates': [('FMS', 'NM', 'Div 1', '-')]},
    {'mis': '612501146', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612501167', 'updates': [('BMT', 'NM', 'Div 1', '-')]},
    {'mis': '612501173', 'updates': [('FME', 'FMS', 'Div 1', '-')]},
    {'mis': '612501176', 'updates': [('AEIOT', 'AEIOT', '-', '-')]},
    {'mis': '612505050', 'updates': [('AEIOT', 'NM', 'Div 1', '-')]},
    {'mis': '612505077', 'updates': [('BMT', 'FMS', 'Div 2', '-')]},
    {'mis': '612505088', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612507178', 'updates': [('AIMA', 'EEU', 'Div 2', '-')]},
    {'mis': '612509070', 'updates': [('AEIOT', 'NM', 'Div 2', '-')]},
    {'mis': '612510092', 'updates': [('BCE', 'NM', 'Div 2', '-')]},
    {'mis': '612510148', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612511069', 'updates': [('AIMA', 'BCE', 'Div 2', '-')]},
    {'mis': '612511083', 'updates': [('AEIOT', 'BMT', 'Div 1', '-')]},
    {'mis': '612513019', 'updates': [('AEIOT', 'BCE', 'Div 1', '-')]},
    {'mis': '612515007', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612515031', 'updates': [('AEIOT', 'FPI', 'Div 1', '-')]},
    {'mis': '612515083', 'updates': [('BMT', 'BCE', 'Div 1', '-')]},
    {'mis': '612515254', 'updates': [('BMT', 'NM', 'Div 1', '-')]},
    {'mis': '612515262', 'updates': [('EEU', 'BCE', 'Div 1', '-')]},
    {'mis': '612515320', 'updates': [('EEU', 'FMS', 'Div 2', '-')]},
    {'mis': '612515369', 'updates': [('NM', 'BMT', 'Div 1', '-')]},
    {'mis': '612515376', 'updates': [('AEIOT', 'BMT', 'Div 1', '-')]},
    {'mis': '612515384', 'updates': [('AEIOT', 'BMT', 'Div 1', '-')]},
    {'mis': '612515412', 'updates': [('EEU', 'NM', 'Div 2', '-')]},
    {'mis': '612572051', 'updates': [('FMS', 'BCE', 'Div 1', '-')]},
    {'mis': '612572071', 'updates': [('FME', 'BCE', 'Div 1', '-')]}
]

# --- 2. Configuration & Maps ---
STUDENTS_FILE = 'students.js'

OFFICIAL_MAP = {
    "AEIOT": "Applied Elec & IoT",
    "AIMA": "AI Multidisc Apps",
    "BCE": "Basics of Civil Engg",
    "BMS": "Basics Meas & Sensor",
    "BMT": "Basics of Mfg Tech",
    "CAD": "CAD Drafting",
    "CAED": "CA Engg & Drawing",
    "CS": "Comm Skills",
    "DPI": "Digital Public Infra",
    "DPV": "Data Proc & Viz",
    "DS": "Discrete Struct",
    "EC": "Engg Chemistry",
    "EEU": "Electrical Energy Util",
    "EM": "Engg Mechanics",
    "EP": "Engg Physics",
    "FEET": "Foundations Elec & ET",
    "FME": "Foundations Mech Engg",
    "FMS": "Fund Meas & Sensor",
    "FPI": "Fund Physical Infra",
    "IPSSF": "Intro Prod & Smart Sys",
    "NM": "NM",
    "PD": "Personality Dev",
    "QP": "Quantum Physics",
    "PS": "Probability & Stats",
    "VCDE": "Vector Calculus",
    "PPS": "Prog for Prob Solv",
    "WD": "WD",
    "PP": "Python Programming",
    "EEMI": "Elec & Elec Meas",
    "RDOS": "Robotics & Drone Safe",
    "FFR": "Fuel Furnaces & Refrac",
    "EVA": "EV Architecture",
    "GE": "Geomatic Engg",
    "FCP": "Fund Const Practices",
    "MPFL": "Mfg Practices & FabLab"
}

# Alias mapping for code normalization
ALIAS_TO_CODE = {
    'aeiot': 'AEIOT', 'AEIOT': 'AEIOT', 'AEIOT': 'AEIOT',
    'aima': 'AIMA', 'AIMA': 'AIMA',
    'bce': 'BCE', 'BCE': 'BCE',
    'bmt': 'BMT', 'BMT': 'BMT',
    'cad': 'CAD',
    'dpi': 'DPI',
    'dpv': 'DPV',
    'eeu': 'EEU', 'eev': 'EEU', 'EEU': 'EEU', 'eeu EVA': 'EEU', 'electrical energy util': 'EEU',
    'EVA': 'EVA', 'EVA': 'EVA', 'eva': 'EVA',
    'fcp': 'FCP',
    'fme': 'FME', 'FME': 'FME',
    'fms': 'FMS', 'FMS': 'FMS',
    'fpi': 'FPI', 'FPI': 'FPI',
    'ge': 'GE',
    'mpfl': 'MPFL', 'mpfl': 'MPFL',
    'nm': 'NM', 'NM': 'NM', 'NM': 'NM',
    'pp': 'PP',
    'pps': 'PPS',
    'rdos': 'RDOS',
    'wd': 'WD', 'WD': 'WD', 'ew': 'WD'
}

def get_subject_details(subj_str):
    """Resolves subject string to Official Code and Name."""
    s = str(subj_str).strip()
    if not s: return None, None
    
    # Check official map
    if s in OFFICIAL_MAP:
        return s, OFFICIAL_MAP[s]
    
    # Check aliases
    lower_s = s.lower()
    if lower_s in ALIAS_TO_CODE:
        code = ALIAS_TO_CODE[lower_s]
        if code in OFFICIAL_MAP:
            return code, OFFICIAL_MAP[code]
        return code, s
        
    # Reverse lookup by name
    for code, name in OFFICIAL_MAP.items():
        if name.lower() == lower_s:
            return code, name

    # Fallback heuristics
    if "WD" in lower_s: return "WD", "WD"
    if "applied elec" in lower_s: return "AEIOT", "Applied Elec & IoT"
    
    return s, s

def smart_split(text):
    """Splits strings like 'NM DPV' into ['NM', 'DPV']."""
    if not text: return []
    text = str(text)
    
    # 1. Try splitting by double space first (explicit columns)
    parts = [x.strip() for x in re.split(r'\s{2,}', text) if x.strip()]
    
    final_parts = []
    for part in parts:
        # Check if part contains multiple merged codes (e.g. "IOT RDOS")
        # But allow full names like "AEIOT" to remain intact
        if " " in part and part.lower() not in ALIAS_TO_CODE and part not in OFFICIAL_MAP.values():
             # It might be two codes merged like "EEU EVA"
             sub_parts = part.split(' ')
             for sp in sub_parts:
                 if sp.strip(): final_parts.append(sp.strip())
        else:
            final_parts.append(part)
            
    return final_parts

def main():
    print(f"Reading {STUDENTS_FILE}...")
    try:
        with open(STUDENTS_FILE, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: {STUDENTS_FILE} not found.")
        return

    # Extract JSON
    match = re.search(r'const GENERATED_DB\s*=\s*(\{.*)', content, re.DOTALL)
    if not match:
        print("Error: GENERATED_DB not found.")
        return
        
    json_str = match.group(1).strip()
    if json_str.endswith(';'): json_str = json_str[:-1]
    
    try:
        db = json.loads(json_str)
    except Exception as e:
        print(f"JSON Error: {e}")
        return

    updates_count = 0
    
    # Apply Updates
    for item in updates_data:
        mis = item['mis']
        if mis not in db: continue
        
        student = db[mis]
        cards = student.get('cards', [])
        
        for prev_raw, new_raw, div_raw, batch_raw in item['updates']:
            # Handle split subjects (e.g. "EEU EVA" -> "BCE WD")
            prev_subjs = smart_split(prev_raw)
            new_subjs = smart_split(new_raw)
            
            # Map 1-to-1 if possible, else take first
            for i, p_sub in enumerate(prev_subjs):
                if i >= len(new_subjs): break
                n_sub = new_subjs[i]
                
                # Get Code/Name
                n_code, n_name = get_subject_details(n_sub)
                
                # Find Card to Update
                card_idx = -1
                
                # Search by Code
                for ci, c in enumerate(cards):
                    if c.get('code') == p_sub:
                        card_idx = ci
                        break
                
                # Search by Alias
                if card_idx == -1:
                    p_code, _ = get_subject_details(p_sub)
                    for ci, c in enumerate(cards):
                        if c.get('code') == p_code:
                            card_idx = ci
                            break
                            
                # Search by Name
                if card_idx == -1:
                    for ci, c in enumerate(cards):
                        if c.get('name', '').lower() == p_sub.lower():
                            card_idx = ci
                            break

                if card_idx != -1:
                    cards[card_idx]['code'] = n_code
                    cards[card_idx]['name'] = n_name
                    cards[card_idx]['div'] = div_raw
                    cards[card_idx]['batch'] = batch_raw
                    updates_count += 1

    # Sort
    sorted_keys = sorted(db.keys())
    sorted_db = {k: db[k] for k in sorted_keys}

    print(f"Writing {updates_count} updates...")
    with open(STUDENTS_FILE, 'w', encoding='utf-8') as f:
        f.write("const GENERATED_DB = " + json.dumps(sorted_db, indent=2) + ";\n")
    
    print("Done.")

if __name__ == "__main__":
    main()