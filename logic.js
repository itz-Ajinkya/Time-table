// --- MASTER SCHEDULE DATABASE ---
const MASTER_SCHEDULE = {
    // ==========================================
    // 1. AEIOT
    // ==========================================
    "AEIOT": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC 09" }, "wed-1330": { type: "lec", room: "NC 09" }, "thu-1330": { type: "lec", room: "NC 09" } },
        "Div 2": { "tue-1330": { type: "lec", room: "NC 09" }, "wed-1330": { type: "lec", room: "NC 09" }, "thu-1330": { type: "lec", room: "NC 09" } },
        "Div 3": { "tue-1330": { type: "lec", room: "NC 11" }, "wed-1330": { type: "lec", room: "NC 11" }, "thu-1330": { type: "lec", room: "NC 11" } }
    },

    // ==========================================
    // 2. APPLIED INDUSTRIAL MATHEMATICS (AIMA)
    // ==========================================
    "AIMA": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC 02" }, "wed-1330": { type: "lec", room: "NC 02" }, "thu-1330": { type: "lec", room: "NC 02" } },
        "Div 2": { "tue-1330": { type: "lec", room: "NC 03" }, "wed-1330": { type: "lec", room: "NC 03" }, "thu-1330": { type: "lec", room: "NC 03" } },
        "Div 3": { "tue-1330": { type: "lec", room: "NC 04" }, "wed-1330": { type: "lec", room: "NC 04" }, "thu-1330": { type: "lec", room: "NC 04" } }
    },

    // ==========================================
    // 3. BCE
    // ==========================================
    "BCE": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC 01" }, "wed-1330": { type: "lec", room: "NC 01" }, "thu-1330": { type: "lec", room: "NC 01" } }
    },

    // ==========================================
    // 4. BASICS OF MEASUREMENT & SENSORS (BMS)
    // ==========================================
    "BMS": {
        "Div 1": {
            "mon-1030": { type: "lec", room: "NC 04" }, "thu-0930": { type: "lec", room: "NC 04" }, "fri-0930": { type: "lec", room: "NC 04" },
            "B1": { "mon-0830": { type: "lab", room: "BMS LAB", span: 2 } }, "B2": { "mon-0830": { type: "lab", room: "BMS LAB", span: 2 } },
            "B3": { "tue-0830": { type: "lab", room: "BMS LAB", span: 2 } }, "B4": { "tue-0830": { type: "lab", room: "BMS LAB", span: 2 } }
        }
    },

    // ==========================================
    // 5. BMT
    // ==========================================
    "BMT": {
        "Div 1": { "tue-1330": { "type": "lec", "room": "NC 13" }, "wed-1330": { "type": "lec", "room": "NC 13" }, "thu-1330": { "type": "lec", "room": "NC 13" } }
    },

    // ==========================================
    // 6. COMPUTER AIDED ENGINEERING DRAWING (CAED)
    // ==========================================
    "CAD": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 13" },
            "B1": { "mon-1630": { type: "lab", room: "CAD LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "CAD LAB", span: 2 } }
        }
    },
    "CAED": {
        "Div 1": {
            "wed-1030": { type: "lec", room: "NC 03" }, "thu-1030": { type: "lec", room: "NC 03" }, "fri-1030": { type: "lec", room: "NC 03" },
            "B1": { "tue-1030": { type: "lab", room: "CAED LAB", span: 2 } }, "B2": { "tue-1030": { type: "lab", room: "CAED LAB", span: 2 } },
            "B3": { "wed-0830": { type: "lab", room: "CAED LAB", span: 2 } }, "B4": { "wed-0830": { type: "lab", room: "CAED LAB", span: 2 } }
        },
        "Div 2": {
            "tue-1530": { type: "lec", room: "NC 02" }, "thu-1530": { type: "lec", room: "NC 02" }, "wed-1730": { type: "lec", room: "NC 02" },
            "B1": { "mon-1430": { type: "lab", room: "CAED LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "CAED LAB", span: 2 } },
            "B3": { "fri-1630": { type: "lab", room: "CAED LAB", span: 2 } }, "B4": { "fri-1630": { type: "lab", room: "CAED LAB", span: 2 } }
        }
    },

    // ==========================================
    // 7. COMMUNICATION SKILLS (CS)
    // ==========================================
    "CS": {
        "Div 1": { "B1": { "mon-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B3": { "tue-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B4": { "tue-1430": { type: "lab", room: "CS LAB", span: 2 } } },
        "Div 2": { "B1": { "mon-1430": { type: "lab", room: "NC 11", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "NC 11", span: 2 } }, "B3": { "tue-1430": { type: "lab", room: "NC 11", span: 2 } }, "B4": { "tue-1430": { type: "lab", room: "NC 11", span: 2 } } },
        "Div 3": { "B1": { "fri-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B3": { "fri-1630": { type: "lab", room: "CS LAB", span: 2 } }, "B4": { "fri-1630": { type: "lab", room: "CS LAB", span: 2 } } },
        "Div 4": { "B1": { "tue-1630": { type: "lab", room: "CS LAB", span: 2 } }, "B2": { "tue-1630": { type: "lab", room: "CS LAB", span: 2 } }, "B3": { "wed-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B4": { "wed-1430": { type: "lab", room: "CS LAB", span: 2 } } },
        "Div 5": { "B1": { "mon-1030": { type: "lab", room: "CS LAB", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC 09", span: 2 } }, "B3": { "tue-1030": { type: "lab", room: "CS LAB", span: 2 } }, "B4": { "tue-1030": { type: "lab", room: "NC 11", span: 2 } } },
        "Div 6": { "B1": { "mon-1030": { type: "lab", room: "NC 08", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC 10", span: 2 } }, "B3": { "tue-1030": { type: "lab", room: "NC 08", span: 2 } }, "B4": { "tue-1030": { type: "lab", room: "NC 09", span: 2 } } },
        "Div 7": { "B1": { "wed-1030": { type: "lab", room: "NC 11", span: 2 } }, "B2": { "wed-1030": { type: "lab", room: "CS LAB", span: 2 } }, "B3": { "thu-1030": { type: "lab", room: "NC 08", span: 2 } }, "B4": { "thu-1030": { type: "lab", room: "CS LAB", span: 2 } } }
    },

    // ==========================================
    // 8. DPI
    // ==========================================
    "DPI": {
        "Div 1": {
            "mon-1230": { type: "lec", room: "NC 02" },
            "B1": { "mon-1630": { type: "lab", room: "DPI LAB", span: 2 } },
            "B2": { "thu-1030": { type: "lab", room: "DPI LAB", span: 2 } }
        }
    },

    // ==========================================
    // 9. DATA PRE-PROCESSING & VISUALIZATION (DPV)
    // ==========================================
    "DPV": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 01" },
            "B1": { "wed-1630": { type: "lab", room: "DPV LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "DPV LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "DPV LAB", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "DPV LAB", span: 2 } }
        }
    },

    // ==========================================
    // 10. DISCRETE STRUCTURES (DS)
    // ==========================================
    "DS": {
        "Div 1": {
            "mon-1030": { type: "lec", room: "NC 01" }, "thu-0930": { type: "lec", room: "NC 01" }, "fri-0930": { type: "lec", room: "NC 01" },
            "B1": { "mon-0930": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "mon-0930": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "tue-0930": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "tue-0930": { type: "lab", room: "NC LAB", span: 1 } }
        },
        "Div 2": {
            "mon-1030": { type: "lec", room: "NC 02" }, "thu-0930": { type: "lec", room: "NC 02" }, "fri-0930": { type: "lec", room: "NC 02" },
            "B1": { "thu-1130": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "fri-1130": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "thu-1130": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "fri-1130": { type: "lab", room: "NC LAB", span: 1 } }
        },
        "Div 3": {
            "mon-1430": { type: "lec", room: "NC 01" }, "wed-1430": { type: "lec", room: "NC 01" }, "tue-1730": { type: "lec", room: "NC 01" },
            "B1": { "thu-1530": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "thu-1530": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "tue-1530": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "tue-1530": { type: "lab", room: "NC LAB", span: 1 } }
        },
        "Div 4": {
            "mon-1430": { type: "lec", room: "NC 02" }, "wed-1430": { type: "lec", room: "NC 02" }, "tue-1730": { type: "lec", room: "NC 02" },
            "B1": { "wed-1630": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "wed-1630": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "wed-1630": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "wed-1630": { type: "lab", room: "NC LAB", span: 1 } }
        },
        "Div 5": {
            "mon-1430": { type: "lec", room: "NC 03" }, "wed-1430": { type: "lec", room: "NC 03" }, "tue-1730": { type: "lec", room: "NC 03" },
            "B1": { "thu-1630": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "thu-1630": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "thu-1630": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "thu-1630": { type: "lab", room: "NC LAB", span: 1 } }
        }
    },

    // ==========================================
    // 11. ENGINEERING CHEMISTRY (EC)
    // ==========================================
    "EC": {
        "Div 1": { "mon-0930": { type: "lec", room: "NC 03" }, "tue-0930": { type: "lec", room: "NC 03" }, "B1": { "mon-1430": { type: "lab", room: "EC LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "EC LAB", span: 2 } }, "B3": { "tue-1430": { type: "lab", room: "EC LAB", span: 2 } }, "B4": { "tue-1430": { type: "lab", room: "EC LAB", span: 2 } } },
        "Div 2": { "thu-1430": { type: "lec", room: "NC 03" }, "fri-1430": { type: "lec", room: "NC 03" }, "B1": { "tue-1030": { type: "lab", room: "EC LAB", span: 2 } }, "B2": { "tue-1030": { type: "lab", room: "EC LAB", span: 2 } }, "B3": { "fri-0830": { type: "lab", room: "EC LAB", span: 2 } }, "B4": { "fri-0830": { type: "lab", room: "EC LAB", span: 2 } } }
    },

    // ==========================================
    // 12. ELECTRICAL ENERGY UTILIZATION (EEU)
    // ==========================================
    "EEU": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC 08" }, "wed-1330": { type: "lec", room: "NC 08" }, "thu-1330": { type: "lec", room: "NC 08" } },
        "Div 2": { "tue-1330": { type: "lec", room: "NC 12" }, "wed-1330": { type: "lec", room: "NC 12" }, "thu-1330": { type: "lec", room: "NC 12" } }
    },

    // ==========================================
    // 13. ELECTRICAL MEASUREMENTS (EEMI)
    // ==========================================
    "EEMI": {
        "Div 1": {
            "mon-1030": { type: "lec", room: "NC 03" }, "thu-0930": { type: "lec", room: "NC 03" }, "fri-0930": { type: "lec", room: "NC 03" },
            "B1": { "mon-0830": { type: "lab", room: "EEMI LAB", span: 2 } }, "B2": { "mon-0830": { type: "lab", room: "EEMI LAB", span: 2 } },
            "B3": { "tue-0830": { type: "lab", room: "EEMI LAB", span: 2 } }, "B4": { "tue-0830": { type: "lab", room: "EEMI LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1430": { type: "lec", room: "NC 04" }, "wed-1430": { type: "lec", room: "NC 04" }, "tue-1730": { type: "lec", room: "NC 04" },
            "B1": { "tue-1430": { type: "lab", room: "EEMI LAB", span: 2 } }, "B2": { "tue-1430": { type: "lab", room: "EEMI LAB", span: 2 } },
            "B3": { "thu-1430": { type: "lab", room: "EEMI LAB", span: 2 } }, "B4": { "thu-1430": { type: "lab", room: "EEMI LAB", span: 2 } }
        }
    },

    // ==========================================
    // 14. ENGINEERING MECHANICS (EM)
    // ==========================================
    "EM": {
        "Div 1": {
            "wed-1030": { type: "lec", room: "NC 01" }, "thu-1030": { type: "lec", room: "NC 01" }, "fri-1030": { type: "lec", room: "NC 01" },
            "B1": { "tue-1030": { type: "lab", room: "EM LAB", span: 2 } }, "B2": { "tue-1030": { type: "lab", room: "EM LAB", span: 2 } },
            "B3": { "wed-0830": { type: "lab", room: "EM LAB", span: 2 } }, "B4": { "wed-0830": { type: "lab", room: "EM LAB", span: 2 } }
        },
        "Div 2": {
            "tue-1530": { type: "lec", room: "NC 01" }, "thu-1530": { type: "lec", room: "NC 01" }, "wed-1730": { type: "lec", room: "NC 01" },
            "B1": { "mon-1430": { type: "lab", room: "EM LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "EM LAB", span: 2 } }, "B3": { "fri-1630": { type: "lab", room: "EM LAB", span: 2 } }, "B4": { "fri-1630": { type: "lab", room: "EM LAB", span: 2 } }
        }
    },

    // ==========================================
    // 15. ENGINEERING PHYSICS (EP)
    // ==========================================
    "EP": {
        "Div 1": { "mon-1130": { type: "lec", room: "NC 01" }, "tue-1130": { type: "lec", room: "NC 01" }, "B1": { "mon-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "mon-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "tue-1630": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 2": { "mon-0930": { type: "lec", room: "NC 01" }, "tue-0930": { type: "lec", room: "NC 01" }, "B1": { "mon-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "tue-1430": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 3": { "mon-0930": { type: "lec", room: "NC 02" }, "tue-0930": { type: "lec", room: "NC 02" }, "B1": { "wed-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "wed-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "thu-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "thu-1630": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 4": { "wed-1530": { type: "lec", room: "NC 08" }, "fri-1330": { type: "lec", room: "NC 08" }, "B1": { "mon-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "mon-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "tue-0830": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 5": { "wed-1530": { type: "lec", room: "NC 11" }, "fri-1330": { type: "lec", room: "NC 11" }, "B1": { "wed-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "wed-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "thu-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "thu-0830": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 6": { "thu-1430": { type: "lec", room: "NC 01" }, "fri-1430": { type: "lec", room: "NC 01" }, "B1": { "mon-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "tue-1030": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 7": { "thu-1430": { type: "lec", room: "NC 02" }, "fri-1430": { type: "lec", room: "NC 02" }, "B1": { "mon-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "wed-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "thu-0830": { type: "lab", room: "EP LAB", span: 2 } } }
    },

    // ==========================================
    // 16. EVA
    // ==========================================
    "EVA": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 14" },
            "B1": { "mon-1630": { type: "lab", room: "EVA LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "EVA LAB", span: 2 } }
        }
    },

    // ==========================================
    // 17. EW
    // ==========================================
    "EW": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 11" },
            "B1": { "wed-1630": { type: "lab", room: "EW LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "EW LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "EW LAB", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "EW LAB", span: 2 } }
        }
    },

    // ==========================================
    // 18. FCP
    // ==========================================
    "FCP": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 02" },
            "B1": { "mon-1630": { type: "lab", room: "FCP LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "FCP LAB", span: 2 } }
        }
    },

    // ==========================================
    // 19. FOUNDATIONS OF ELECTRONICS (FEET)
    // ==========================================
    "FEET": {
        "Div 1": {
            "wed-1030": { type: "lec", room: "NC 02" }, "thu-1030": { type: "lec", room: "NC 02" }, "fri-1030": { type: "lec", room: "NC 02" },
            "B1": { "tue-1030": { type: "lab", room: "FEET LAB", span: 2 } },
            "B2": { "tue-1030": { type: "lab", room: "FEET LAB", span: 2 } },
            "B3": { "wed-0830": { type: "lab", room: "FEET LAB", span: 2 } },
            "B4": { "wed-0830": { type: "lab", room: "FEET LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1430": { type: "lec", room: "NC 08" }, "wed-1430": { type: "lec", room: "NC 08" }, "tue-1730": { type: "lec", room: "NC 08" },
            "B1": { "tue-1430": { type: "lab", room: "FEET LAB", span: 2 } },
            "B2": { "tue-1430": { type: "lab", room: "FEET LAB", span: 2 } },
            "B3": { "thu-1430": { type: "lab", room: "FEET LAB", span: 2 } },
            "B4": { "thu-1430": { type: "lab", room: "FEET LAB", span: 2 } }
        }
    },

    // ==========================================
    // 20. FFR
    // ==========================================
    "FFR": {
        "Div 1": {
            "wed-1030": { type: "lec", room: "NC 04" }, "thu-1030": { type: "lec", room: "NC 04" }, "fri-1030": { type: "lec", room: "NC 04" },
            "B1": { "wed-0830": { type: "lab", room: "FFR LAB", span: 2 } }, "B2": { "wed-0830": { type: "lab", room: "FFR LAB", span: 2 } },
            "B3": { "tue-1030": { type: "lab", room: "FFR LAB", span: 2 } }, "B4": { "tue-1030": { type: "lab", room: "FFR LAB", span: 2 } }
        }
    },

    // ==========================================
    // 21. FME
    // ==========================================
    "FME": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC 05" }, "wed-1330": { type: "lec", room: "NC 05" }, "thu-1330": { type: "lec", room: "NC 05" } }
    },

    // ==========================================
    // 22. FMS
    // ==========================================
    "FMS": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC 10" }, "wed-1330": { type: "lec", room: "NC 10" }, "thu-1330": { type: "lec", room: "NC 10" } },
        "Div 2": { "tue-1330": { type: "lec", room: "NC 10" }, "wed-1330": { type: "lec", room: "NC 10" }, "thu-1330": { type: "lec", room: "NC 10" } },
        "Div 3": { "tue-1330": { type: "lec", room: "NC 06" }, "wed-1330": { type: "lec", room: "NC 06" }, "thu-1330": { type: "lec", room: "NC 06" } }
    },

    // ==========================================
    // 23. FPI
    // ==========================================
    "FPI": {
        "Div 1": { "tue-1230": { type: "lec", room: "NC 03" }, "wed-1230": { type: "lec", room: "NC 03" }, "thu-1230": { type: "lec", room: "NC 03" } }
    },

    // ==========================================
    // 24. GE
    // ==========================================
    "GE": {
        "Div 1": {
            "mon-1230": { type: "lec", room: "NC 01" },
            "B1": { "mon-1630": { type: "lab", room: "GE LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "GE LAB", span: 2 } }
        }
    },

    // ==========================================
    // 25. IPSSF
    // ==========================================
    "IPSSF": {
        "Div 1": {
            "tue-1530": { type: "lec", room: "NC 03" }, "thu-1530": { type: "lec", room: "NC 03" }, "wed-1730": { type: "lec", room: "NC 03" },
            "B1": { "mon-1430": { type: "lab", room: "IPSSF LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "IPSSF LAB", span: 2 } },
            "B3": { "fri-1630": { type: "lab", room: "IPSSF LAB", span: 2 } }, "B4": { "fri-1630": { type: "lab", room: "IPSSF LAB", span: 2 } }
        }
    },

    // ==========================================
    // 26. LAB
    // ==========================================
    "LAB": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 01" },
            "B1": { "wed-1630": { type: "lab", room: "LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "LAB", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "LAB", span: 2 } }
        }
    },

    // ==========================================
    // 27. MPFL
    // ==========================================
    "MPFL": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 05" },
            "B1": { "mon-1630": { type: "lab", room: "MPFL LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "MPFL LAB", span: 2 } }
        }
    },

    // ==========================================
    // 28. NM
    // ==========================================
    "NM": {
        "Div 1": { "tue-1330": { "type": "lec", "room": "NC 07" }, "wed-1330": { "type": "lec", "room": "NC 07" }, "thu-1330": { "type": "lec", "room": "NC 07" } },
        "Div 2": { "tue-1330": { "type": "lec", "room": "NC 14" }, "wed-1330": { "type": "lec", "room": "NC 14" }, "thu-1330": { "type": "lec", "room": "NC 14" } }
    },

    // ==========================================
    // 29. PERSONALITY DEVELOPMENT (PD)
    // ==========================================
    "PD": {
        "Div 1": { "sat-0830": { type: "lec", room: "NC 01", span: 2 } },
        "Div 2": { "sat-1030": { type: "lec", room: "NC 01", span: 2 } },
        "Div 3": { "sat-0830": { type: "lec", room: "NC 02", span: 2 } },
        "Div 4": { "sat-1030": { type: "lec", room: "NC 02", span: 2 } },
        "Div 5": { "sat-0830": { type: "lec", room: "NC 03", span: 2 } },
        "Div 6": { "sat-1030": { type: "lec", room: "NC 03", span: 2 } },
        "Div 7": { "sat-0830": { type: "lec", room: "NC 04", span: 2 } },
        "Div 8": { "sat-1030": { type: "lec", room: "NC 04", span: 2 } },
        "Div 9": { "sat-1030": { type: "lec", room: "NC 08", span: 2 } }
    },

    // ==========================================
    // 30. PP
    // ==========================================
    "PP": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 08" },
            "B1": { "wed-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "wed-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "wed-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B4": { "wed-1430": { type: "lab", room: "PP LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1330": { type: "lec", room: "NC 07" },
            "B1": { "wed-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "wed-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "wed-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B4": { "wed-1030": { type: "lab", room: "PP LAB", span: 2 } }
        },
        "Div 3": {
            "mon-1330": { type: "lec", room: "NC 12" },
            "B1": { "fri-0830": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "fri-0830": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "fri-0830": { type: "lab", room: "PP LAB", span: 2 } },
            "B4": { "fri-0830": { type: "lab", room: "PP LAB", span: 2 } }
        },
        "Div 4": {
            "mon-1330": { type: "lec", room: "NC 10" },
            "B1": { "tue-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "tue-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "tue-1030": { type: "lab", room: "PP LAB", span: 2 } },
        },
        "Div 5": {
            "mon-1330": { type: "lec", room: "NC 10" },
            "B1": { "mon-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "mon-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "mon-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B4": { "fri-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B5": { "fri-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B6": { "fri-1430": { type: "lab", room: "PP LAB", span: 2 } }
        }
    },

    // ==========================================
    // 31. PPS
    // ==========================================
    "PPS": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 09" },
            "B1": { "wed-1630": { type: "lab", room: "PPS LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "PPS LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "PPS LAB", span: 2 } },
            "B4": { "thu-1030": { type: "lab", room: "PPS LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1330": { type: "lec", room: "NC 09" },
            "B1": { "wed-1630": { type: "lab", room: "PPS LAB", span: 2 } },
            "B2": { "thu-1030": { type: "lab", room: "PPS LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "PPS LAB", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "PPS LAB", span: 2 } }
        }
    },

    // ==========================================
    // 32. PROBABILITY & STATISTICS (PS)
    // ==========================================
    "PS": {
        "Div 1": { "tue-1030": { type: "lec", room: "NC 03" }, "wed-0930": { type: "lec", room: "NC 03" }, "fri-1330": { type: "lec", room: "NC 03" }, "B1": { "wed-1030": { type: "lab", room: "NC 14", span: 2 } }, "B2": { "thu-1030": { type: "lab", room: "NC 14", span: 2 } }, "B3": { "thu-1030": { type: "lab", room: "NC 14", span: 2 } }, "B4": { "thu-1030": { type: "lab", room: "NC 14", span: 2 } } },
        "Div 2": { "tue-1030": { type: "lec", room: "NC 04" }, "wed-0930": { type: "lec", room: "NC 04" }, "fri-1330": { type: "lec", room: "NC 04" }, "B1": { "wed-1030": { type: "lab", room: "NC 13", span: 2 } }, "B2": { "wed-1030": { type: "lab", room: "NC 13", span: 2 } }, "B3": { "thu-1030": { type: "lab", room: "NC 13", span: 2 } }, "B4": { "thu-1630": { type: "lab", room: "NC 14", span: 2 } } },
        "Div 3": { "wed-1130": { type: "lec", room: "NC 04" }, "thu-1130": { type: "lec", room: "NC 04" }, "fri-1130": { type: "lec", room: "NC 04" }, "B1": { "mon-1030": { type: "lab", room: "NC 14", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC 14", span: 2 } }, "B3": { "thu-1630": { type: "lab", room: "NC 11", span: 2 } }, "B4": { "fri-0830": { type: "lab", room: "NC 14", span: 2 } } },
        "Div 4": { "mon-1530": { type: "lec", room: "NC 03" }, "tue-1630": { type: "lec", room: "NC 03" }, "fri-1630": { type: "lec", room: "NC 03" }, "B1": { "mon-1630": { type: "lab", room: "NC 14", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "NC 14", span: 2 } }, "B3": { "fri-1430": { type: "lab", room: "NC 14", span: 2 } }, "B4": { "fri-1430": { type: "lab", room: "NC 14", span: 2 } } },
        "Div 5": { "mon-1530": { type: "lec", room: "NC 04" }, "tue-1630": { type: "lec", room: "NC 04" }, "fri-1630": { type: "lec", room: "NC 04" }, "B1": { "fri-1430": { type: "lab", room: "NC 13", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "NC 13", span: 2 } }, "B3": { "fri-1430": { type: "lab", room: "NC 13", span: 2 } }, "B4": { "fri-1430": { type: "lab", room: "NC 13", span: 2 } } },
        "Div 6": { "mon-1530": { type: "lec", room: "NC 08" }, "tue-1630": { type: "lec", room: "NC 08" }, "fri-1630": { type: "lec", room: "NC 08" }, "B1": { "mon-1630": { type: "lab", room: "NC 13", span: 2 } }, "B2": { "mon-1630": { type: "lab", room: "NC 13", span: 2 } }, "B3": { "mon-1630": { type: "lab", room: "NC 13", span: 2 } }, "B4": { "mon-1630": { type: "lab", room: "NC 13", span: 2 } } },
        "Div 7": { "tue-1430": { type: "lec", room: "NC 08" }, "wed-1630": { type: "lec", room: "NC 04" }, "fri-1130": { type: "lec", room: "NC 04" }, "B1": { "wed-1430": { type: "lab", room: "NC 14", span: 2 } }, "B2": { "wed-1430": { type: "lab", room: "NC 14", span: 2 } }, "B3": { "wed-1430": { type: "lab", room: "NC 14", span: 2 } }, "B4": { "thu-1630": { type: "lab", room: "NC 13", span: 2 } } }
    },

    // ==========================================
    // 33. QUANTUM PHYSICS (QP)
    // ==========================================
    "QP": {
        "Div 1": { "mon-1130": { type: "lec", room: "NC 02" }, "tue-1130": { type: "lec", room: "NC 02" }, "B1": { "wed-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "wed-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "thu-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "thu-1430": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 2": { "mon-1130": { type: "lec", room: "NC 03" }, "tue-1130": { type: "lec", room: "NC 03" }, "B1": { "fri-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "fri-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "fri-1630": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 3": { "wed-1530": { type: "lec", room: "NC 01" }, "fri-1330": { type: "lec", room: "NC 12" }, "B1": { "fri-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "fri-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "fri-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "fri-1030": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 4": { "wed-1530": { type: "lec", room: "NC 02" }, "fri-1330": { type: "lec", room: "NC 13" }, "B1": { "thu-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "thu-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "wed-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "wed-1030": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 5": { "mon-1130": { type: "lec", room: "NC 04" }, "tue-1130": { type: "lec", room: "NC 04" }, "B1": { "fri-1430": { type: "lab", room: "Cognizant", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "Cognizant", span: 2 } }, "B3": { "tue-1630": { type: "lab", room: "Cognizant", span: 2 } }, "B4": { "tue-1630": { type: "lab", room: "Cognizant", span: 2 } } },
        "Div 6": { "mon-0930": { type: "lec", room: "NC 04" }, "tue-0930": { type: "lec", room: "NC 12" }, "B1": { "wed-1630": { type: "lab", room: "Cognizant", span: 2 } }, "B2": { "wed-1630": { type: "lab", room: "Cognizant", span: 2 } }, "B3": { "thu-1430": { type: "lab", room: "Cognizant", span: 2 } }, "B4": { "thu-1430": { type: "lab", room: "Cognizant", span: 2 } } },
        "Div 7": { "wed-1530": { type: "lec", room: "NC 03" }, "fri-1330": { type: "lec", room: "NC 14" }, "B1": { "mon-0830": { type: "lab", room: "Cognizant", span: 2 } }, "B2": { "mon-0830": { type: "lab", room: "Cognizant", span: 2 } }, "B3": { "wed-1030": { type: "lab", room: "Cognizant", span: 2 } }, "B4": { "wed-1030": { type: "lab", room: "Cognizant", span: 2 } } }
    },

    // ==========================================
    // 34. RDOS
    // ==========================================
    "RDOS": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 06" },
            "B1": { "mon-1630": { type: "lab", room: "RDOS LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "RDOS LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "RDOS LAB", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "RDOS LAB", span: 2 } }
        }
    },

    // ==========================================
    // 35. VECTOR CALCULUS (VCDE)
    // ==========================================
    "VCDE": {
        "Div 1": { "tue-1030": { type: "lec", room: "NC 01" }, "wed-0930": { type: "lec", room: "NC 01" }, "fri-1330": { type: "lec", room: "NC 01" }, "B1": { "wed-1030": { type: "lab", room: "NC 12", span: 2 } }, "B2": { "wed-1030": { type: "lab", room: "NC 12", span: 2 } }, "B3": { "thu-1030": { type: "lab", room: "NC 12", span: 2 } }, "B4": { "thu-1030": { type: "lab", room: "NC 12", span: 2 } } },
        "Div 2": { "tue-1030": { type: "lec", room: "NC 02" }, "wed-0930": { type: "lec", room: "NC 02" }, "fri-1330": { type: "lec", room: "NC 02" }, "B1": { "wed-1030": { type: "lab", room: "NC 08", span: 2 } }, "B2": { "wed-1030": { type: "lab", room: "NC 08", span: 2 } }, "B3": { "wed-1030": { type: "lab", room: "NC 08", span: 2 } }, "B4": { "thu-1030": { type: "lab", room: "NC 11", span: 2 } } },
        "Div 3": { "wed-1130": { type: "lec", room: "NC 01" }, "thu-1130": { type: "lec", room: "NC 01" }, "fri-1130": { type: "lec", room: "NC 01" }, "B1": { "mon-1030": { type: "lab", room: "NC 13", span: 2 } }, "B2": { "thu-0830": { type: "lab", room: "NC 14", span: 2 } }, "B3": { "thu-0830": { type: "lab", room: "NC 14", span: 2 } }, "B4": { "thu-0830": { type: "lab", room: "NC 14", span: 2 } } },
        "Div 4": { "wed-1130": { type: "lec", room: "NC 02" }, "thu-1130": { type: "lec", room: "NC 02" }, "fri-1130": { type: "lec", room: "NC 02" }, "B1": { "mon-1030": { type: "lab", room: "NC 12", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC 12", span: 2 } }, "B3": { "mon-1030": { type: "lab", room: "NC 12", span: 2 } }, "B4": { "thu-0830": { type: "lab", room: "NC 13", span: 2 } } },
        "Div 5": { "wed-1130": { type: "lec", room: "NC 03" }, "thu-1130": { type: "lec", room: "NC 03" }, "fri-1130": { type: "lec", room: "NC 03" }, "B1": { "mon-1030": { type: "lab", room: "NC 11", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC 11", span: 2 } }, "B3": { "mon-1030": { type: "lab", room: "NC 11", span: 2 } }, "B4": { "mon-1030": { type: "lab", room: "NC 11", span: 2 } } },
        "Div 6": { "mon-1530": { type: "lec", room: "NC 01" }, "tue-1630": { type: "lec", room: "NC 01" }, "fri-1630": { type: "lec", room: "NC 01" }, "B1": { "mon-1630": { type: "lab", room: "NC 12", span: 2 } }, "B2": { "mon-1630": { type: "lab", room: "NC 12", span: 2 } }, "B3": { "mon-1630": { type: "lab", room: "NC 12", span: 2 } }, "B4": { "mon-1630": { type: "lab", room: "NC 12", span: 2 } } },
        "Div 7": { "mon-1530": { type: "lec", room: "NC 02" }, "tue-1630": { type: "lec", room: "NC 02" }, "fri-1630": { type: "lec", room: "NC 02" }, "B1": { "mon-1630": { type: "lab", room: "NC 11", span: 2 } }, "B2": { "mon-1630": { type: "lab", room: "NC 11", span: 2 } }, "B3": { "fri-1430": { type: "lab", room: "NC 12", span: 2 } }, "B4": { "fri-1430": { type: "lab", room: "NC 12", span: 2 } } },
        "Div 8": { "tue-1430": { type: "lec", room: "NC 01" }, "wed-1630": { type: "lec", room: "NC 01" }, "fri-1530": { type: "lec", room: "NC 01" }, "B1": { "wed-1430": { type: "lab", room: "NC 13", span: 2 } }, "B2": { "tue-1630": { type: "lab", room: "NC 14", span: 2 } }, "B3": { "wed-1430": { type: "lab", room: "NC 13", span: 2 } }, "B4": { "wed-1430": { type: "lab", room: "NC 13", span: 2 } } },
        "Div 9": { "tue-1430": { type: "lec", room: "NC 02" }, "wed-1630": { type: "lec", room: "NC 02" }, "fri-1530": { type: "lec", room: "NC 02" }, "B1": { "tue-1630": { type: "lab", room: "NC 13", span: 2 } }, "B2": { "wed-1430": { type: "lab", room: "NC 12", span: 2 } }, "B3": { "wed-1430": { type: "lab", room: "NC 12", span: 2 } }, "B4": { "wed-1430": { type: "lab", room: "NC 12", span: 2 } } }
    },

    // ==========================================
    // 36. WD
    // ==========================================
    "WD": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC 03" },
            "B1": { "wed-1630": { type: "lab", room: "WD LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "WD LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "WD LAB", span: 2 } },
            "B4": { "thu-1030": { type: "lab", room: "WD LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1330": { type: "lec", room: "NC 04" },
            "B1": { "wed-1630": { type: "lab", room: "WD LAB", span: 2 } },
            "B2": { "thu-1030": { type: "lab", room: "WD LAB", span: 2 } },
            "B3": { "mon-0830": { type: "lab", room: "WD LAB", span: 2 } }
        }
    }
};

// --- LAB EMOJI MAPPING ---
// Assign emojis to lab slots by subject code
const LAB_EMOJI_GROUPS = [
    { emoji: '💻', codes: ['CAED', 'WD', 'MPFL', 'IPSSF', 'DS', 'DPV', 'PPS', 'FCP', 'GE', 'EW', 'CAD', 'DPI', 'EVA', 'RDOS'] },
    { emoji: '📐', codes: ['VCDE', 'PS', 'AEIOT', 'FPI', 'AIMA', 'NM', 'BMT'] }, 
    { emoji: '🗣️', codes: ['CS', 'PD'] },
    { emoji: '🔬', codes: ['EP', 'EC', 'QP', 'EEMI', 'FEET', 'EM', 'FME', 'FMS', 'BCE', 'EEU'] }
];

function getLabEmoji(code, room) {
    if (!code) return '';
    const upper = code.toUpperCase();
    for (const g of LAB_EMOJI_GROUPS) {
        if (g.codes.includes(upper) && g.emoji) return g.emoji;
    }
    // Fallback heuristics based on room name
    if (room && /computer|cognizant/i.test(room)) return '💻';
    return '';
}

// --- DATA MERGER FUNC TION ---
function getStudentData(mis) {
    // 1. Safety Check
    if (!GENERATED_DB || !GENERATED_DB[mis]) {
        return null;
    }

    const student = GENERATED_DB[mis];
    const personalSchedule = {};

    // 2. Build Schedule from allocated Cards
    if (student.cards && Array.isArray(student.cards)) {
        student.cards.forEach(card => {
            const subjectCode = card.code; // e.g. "AEIOT"
            const div = card.div;          // e.g. "Div 1"
            const batch = card.batch;      // e.g. "B1"

            // Ensure this subject exists in Master Schedule
            if (MASTER_SCHEDULE[subjectCode] && MASTER_SCHEDULE[subjectCode][div]) {
                const divSchedule = MASTER_SCHEDULE[subjectCode][div];

                // --- A. Process Lectures (Direct Keys) ---
                Object.keys(divSchedule).forEach(timeKey => {
                    // Filter out Batch keys (B1, B2) by checking length or content
                    // Time keys are like "mon-1030" (length 8), Batches are "B1" (length 2)
                    if (timeKey.length < 5) return; 

                    const slot = divSchedule[timeKey];
                    const entry = {
                        ...slot,
                        subj: subjectCode,
                        class: subjectCode.toLowerCase(),
                        tag: "" // Lectures usually don't have emoji tags
                    };

                    // Add to schedule (Handling Collisions)
                    addToSchedule(personalSchedule, timeKey, entry);
                });

                // --- B. Process Labs (Batch Keys) ---
                // If the student has a batch assigned (e.g., "B1") and the schedule has that batch
                if (batch !== '-' && divSchedule[batch]) {
                    const labSlots = divSchedule[batch];
                    
                    Object.keys(labSlots).forEach(timeKey => {
                        const lab = labSlots[timeKey];
                        const entry = {
                            ...lab,
                            subj: subjectCode,
                            class: subjectCode.toLowerCase(),
                            // Safety check for emoji function
                            tag: (typeof getLabEmoji === 'function') ? getLabEmoji(subjectCode, lab.room) : "🧪"
                        };

                        // Add to schedule (Handling Collisions)
                        addToSchedule(personalSchedule, timeKey, entry);
                    });
                }
            }
        });
    }

    // 3. Return the Final Data Object
    return {
        name: student.name, // Now correctly pulling "Ajinkya Patil" etc. from students.js
        info: student.info,
        cards: student.cards,
        schedule: personalSchedule
    };
}

// Helper to handle overlapping slots (arrays)
function addToSchedule(schedule, timeKey, entry) {
    if (schedule[timeKey]) {
        if (Array.isArray(schedule[timeKey])) {
            schedule[timeKey].push(entry);
        } else {
            schedule[timeKey] = [schedule[timeKey], entry];
        }
    } else {
        schedule[timeKey] = entry;
    }
}