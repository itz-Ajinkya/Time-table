// --- MASTER SCHEDULE DATABASE ---
const MASTER_SCHEDULE = {
    // ==========================================
    // 1. VECTOR CALCULUS (VCDE)
    // ==========================================
    "VCDE": {
        "Div 1": { "tue-1030": { type: "lec", room: "NC01" }, "wed-0930": { type: "lec", room: "NC01" }, "fri-1330": { type: "lec", room: "NC01" }, "B1": { "wed-1030": { type: "lab", room: "NC12", span: 2 } }, "B2": { "wed-1030": { type: "lab", room: "NC12", span: 2 } }, "B3": { "thu-1030": { type: "lab", room: "NC12", span: 2 } }, "B4": { "thu-1030": { type: "lab", room: "NC12", span: 2 } } },
        "Div 2": { "tue-1030": { type: "lec", room: "NC02" }, "wed-0930": { type: "lec", room: "NC02" }, "fri-1330": { type: "lec", room: "NC02" }, "B1": { "wed-1030": { type: "lab", room: "NC08", span: 2 } }, "B2": { "wed-1030": { type: "lab", room: "NC08", span: 2 } }, "B3": { "wed-1030": { type: "lab", room: "NC08", span: 2 } }, "B4": { "thu-1030": { type: "lab", room: "NC11", span: 2 } } },
        "Div 3": { "wed-1130": { type: "lec", room: "NC01" }, "thu-1130": { type: "lec", room: "NC01" }, "fri-1130": { type: "lec", room: "NC01" }, "B1": { "mon-1030": { type: "lab", room: "NC13", span: 2 } }, "B2": { "thu-0830": { type: "lab", room: "NC14", span: 2 } }, "B3": { "thu-0830": { type: "lab", room: "NC14", span: 2 } }, "B4": { "thu-0830": { type: "lab", room: "NC14", span: 2 } } },
        "Div 4": { "wed-1130": { type: "lec", room: "NC02" }, "thu-1130": { type: "lec", room: "NC02" }, "fri-1130": { type: "lec", room: "NC02" }, "B1": { "mon-1030": { type: "lab", room: "NC12", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC12", span: 2 } }, "B3": { "mon-1030": { type: "lab", room: "NC12", span: 2 } }, "B4": { "thu-0830": { type: "lab", room: "NC13", span: 2 } } },
        "Div 5": { "wed-1130": { type: "lec", room: "NC03" }, "thu-1130": { type: "lec", room: "NC03" }, "fri-1130": { type: "lec", room: "NC03" }, "B1": { "mon-1030": { type: "lab", room: "NC11", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC11", span: 2 } }, "B3": { "mon-1030": { type: "lab", room: "NC11", span: 2 } }, "B4": { "mon-1030": { type: "lab", room: "NC11", span: 2 } } },
        "Div 6": { "mon-1530": { type: "lec", room: "NC01" }, "tue-1630": { type: "lec", room: "NC01" }, "fri-1630": { type: "lec", room: "NC01" }, "B1": { "mon-1630": { type: "lab", room: "NC12", span: 2 } }, "B2": { "mon-1630": { type: "lab", room: "NC12", span: 2 } }, "B3": { "mon-1630": { type: "lab", room: "NC12", span: 2 } }, "B4": { "mon-1630": { type: "lab", room: "NC12", span: 2 } } },
        "Div 7": { "mon-1530": { type: "lec", room: "NC02" }, "tue-1630": { type: "lec", room: "NC02" }, "fri-1630": { type: "lec", room: "NC02" }, "B1": { "mon-1630": { type: "lab", room: "NC11", span: 2 } }, "B2": { "mon-1630": { type: "lab", room: "NC11", span: 2 } }, "B3": { "fri-1430": { type: "lab", room: "NC12", span: 2 } }, "B4": { "fri-1430": { type: "lab", room: "NC12", span: 2 } } },
        "Div 8": { "tue-1430": { type: "lec", room: "NC01" }, "wed-1630": { type: "lec", room: "NC01" }, "fri-1530": { type: "lec", room: "NC01" }, "B1": { "wed-1430": { type: "lab", room: "NC13", span: 2 } }, "B2": { "tue-1630": { type: "lab", room: "NC14", span: 2 } }, "B3": { "wed-1430": { type: "lab", room: "NC13", span: 2 } }, "B4": { "wed-1430": { type: "lab", room: "NC13", span: 2 } } },
        "Div 9": { "tue-1430": { type: "lec", room: "NC02" }, "wed-1630": { type: "lec", room: "NC02" }, "fri-1530": { type: "lec", room: "NC02" }, "B1": { "tue-1630": { type: "lab", room: "NC13", span: 2 } }, "B2": { "wed-1430": { type: "lab", room: "NC12", span: 2 } }, "B3": { "wed-1430": { type: "lab", room: "NC12", span: 2 } }, "B4": { "wed-1430": { type: "lab", room: "NC12", span: 2 } } }
    },

    // ==========================================
    // 2. PROBABILITY & STATISTICS (PS)
    // ==========================================
    "PS": {
        "Div 1": { "tue-1030": { type: "lec", room: "NC03" }, "wed-0930": { type: "lec", room: "NC03" }, "fri-1330": { type: "lec", room: "NC03" }, "B1": { "wed-1030": { type: "lab", room: "NC14", span: 2 } }, "B2": { "thu-1030": { type: "lab", room: "NC14", span: 2 } }, "B3": { "thu-1030": { type: "lab", room: "NC14", span: 2 } }, "B4": { "thu-1030": { type: "lab", room: "NC14", span: 2 } } },
        "Div 2": { "tue-1030": { type: "lec", room: "NC04" }, "wed-0930": { type: "lec", room: "NC04" }, "fri-1330": { type: "lec", room: "NC04" }, "B1": { "wed-1030": { type: "lab", room: "NC13", span: 2 } }, "B2": { "wed-1030": { type: "lab", room: "NC13", span: 2 } }, "B3": { "thu-1030": { type: "lab", room: "NC13", span: 2 } }, "B4": { "thu-1630": { type: "lab", room: "NC14", span: 2 } } },
        "Div 3": { "wed-1130": { type: "lec", room: "NC04" }, "thu-1130": { type: "lec", room: "NC04" }, "fri-1130": { type: "lec", room: "NC04" }, "B1": { "mon-1030": { type: "lab", room: "NC14", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC14", span: 2 } }, "B3": { "fri-0830": { type: "lab", room: "NC14", span: 2 } }, "B4": { "fri-0830": { type: "lab", room: "NC14", span: 2 } } },
        "Div 4": { "mon-1530": { type: "lec", room: "NC03" }, "tue-1630": { type: "lec", room: "NC03" }, "fri-1630": { type: "lec", room: "NC03" }, "B1": { "mon-1630": { type: "lab", room: "NC14", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "NC14", span: 2 } }, "B3": { "fri-1430": { type: "lab", room: "NC14", span: 2 } }, "B4": { "fri-1430": { type: "lab", room: "NC14", span: 2 } } },
        "Div 5": { "mon-1530": { type: "lec", room: "NC04" }, "tue-1630": { type: "lec", room: "NC04" }, "fri-1630": { type: "lec", room: "NC04" }, "B1": { "fri-1430": { type: "lab", room: "NC13", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "NC13", span: 2 } }, "B3": { "fri-1430": { type: "lab", room: "NC13", span: 2 } }, "B4": { "fri-1430": { type: "lab", room: "NC13", span: 2 } } },
        "Div 6": { "mon-1530": { type: "lec", room: "NC08" }, "tue-1630": { type: "lec", room: "NC08" }, "fri-1630": { type: "lec", room: "NC08" }, "B1": { "mon-1630": { type: "lab", room: "NC13", span: 2 } }, "B2": { "mon-1630": { type: "lab", room: "NC13", span: 2 } }, "B3": { "mon-1630": { type: "lab", room: "NC13", span: 2 } }, "B4": { "mon-1630": { type: "lab", room: "NC13", span: 2 } } },
        "Div 7": { "tue-1430": { type: "lec", room: "NC08" }, "wed-1630": { type: "lec", room: "NC04" }, "fri-1130": { type: "lec", room: "NC04" }, "B1": { "wed-1430": { type: "lab", room: "NC14", span: 2 } }, "B2": { "wed-1430": { type: "lab", room: "NC14", span: 2 } }, "B3": { "wed-1430": { type: "lab", room: "NC14", span: 2 } }, "B4": { "thu-1630": { type: "lab", room: "NC13", span: 2 } } }
    },

    // ==========================================
    // 3. ENGINEERING PHYSICS (EP)
    // ==========================================
    "EP": {
        "Div 1": { "mon-1130": { type: "lec", room: "NC01" }, "tue-1130": { type: "lec", room: "NC01" }, "B1": { "mon-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "mon-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "tue-1630": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 2": { "mon-0930": { type: "lec", room: "NC01" }, "tue-0930": { type: "lec", room: "NC01" }, "B1": { "mon-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "tue-1430": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 3": { "mon-0930": { type: "lec", room: "NC02" }, "tue-0930": { type: "lec", room: "NC02" }, "B1": { "wed-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "wed-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "thu-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "thu-1630": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 4": { "wed-1530": { type: "lec", room: "NC08" }, "fri-1330": { type: "lec", room: "NC08" }, "B1": { "mon-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "mon-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "tue-0830": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 5": { "wed-1530": { type: "lec", room: "NC11" }, "fri-1330": { type: "lec", room: "NC11" }, "B1": { "wed-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "wed-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "thu-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "thu-0830": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 6": { "thu-1430": { type: "lec", room: "NC01" }, "fri-1430": { type: "lec", room: "NC01" }, "B1": { "mon-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "tue-1030": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 7": { "thu-1430": { type: "lec", room: "NC02" }, "fri-1430": { type: "lec", room: "NC02" }, "B1": { "mon-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "wed-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "tue-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "thu-0830": { type: "lab", room: "EP LAB", span: 2 } } },
    },

    // ==========================================
    // 4. QUANTUM PHYSICS (QP)
    // ==========================================
    "QP": {
        "Div 1": { "mon-1130": { type: "lec", room: "NC02" }, "tue-1130": { type: "lec", room: "NC02" }, "B1": { "wed-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "wed-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "thu-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "thu-1430": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 2": { "mon-1130": { type: "lec", room: "NC03" }, "tue-1130": { type: "lec", room: "NC03" }, "B1": { "fri-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "fri-1630": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "fri-1630": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 3": { "wed-1530": { type: "lec", room: "NC01" }, "fri-1330": { type: "lec", room: "NC12" }, "B1": { "fri-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "fri-0830": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "fri-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "fri-1030": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 4": { "wed-1530": { type: "lec", room: "NC02" }, "fri-1330": { type: "lec", room: "NC13" }, "B1": { "thu-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B2": { "thu-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B3": { "wed-1030": { type: "lab", room: "EP LAB", span: 2 } }, "B4": { "wed-1030": { type: "lab", room: "EP LAB", span: 2 } } },
        "Div 5": { "mon-1130": { type: "lec", room: "NC04" }, "tue-1130": { type: "lec", room: "NC04" }, "B1": { "fri-1430": { type: "lab", room: "Cognizant", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "Cognizant", span: 2 } }, "B3": { "tue-1630": { type: "lab", room: "Cognizant", span: 2 } }, "B4": { "tue-1630": { type: "lab", room: "Cognizant", span: 2 } } },
        "Div 6": { "mon-0930": { type: "lec", room: "NC04" }, "tue-0930": { type: "lec", room: "NC12" }, "B1": { "wed-1630": { type: "lab", room: "Cognizant", span: 2 } }, "B2": { "wed-1630": { type: "lab", room: "Cognizant", span: 2 } }, "B3": { "thu-1430": { type: "lab", room: "Cognizant", span: 2 } }, "B4": { "thu-1430": { type: "lab", room: "Cognizant", span: 2 } } },
        "Div 7": { "wed-1530": { type: "lec", room: "NC03" }, "fri-1330": { type: "lec", room: "NC14" }, "B1": { "mon-0830": { type: "lab", room: "Cognizant", span: 2 } }, "B2": { "mon-0830": { type: "lab", room: "Cognizant", span: 2 } }, "B3": { "wed-1030": { type: "lab", room: "Cognizant", span: 2 } }, "B4": { "wed-1030": { type: "lab", room: "Cognizant", span: 2 } } }
    },

    // ==========================================
    // 5. ENGINEERING CHEMISTRY (EC)
    // ==========================================
    "EC": {
        "Div 1": { "mon-0930": { type: "lec", room: "NC03" }, "tue-0930": { type: "lec", room: "NC03" }, "B1": { "mon-1430": { type: "lab", room: "EC LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "EC LAB", span: 2 } }, "B3": { "tue-1430": { type: "lab", room: "EC LAB", span: 2 } }, "B4": { "tue-1430": { type: "lab", room: "EC LAB", span: 2 } } },
        "Div 2": { "thu-1430": { type: "lec", room: "NC03" }, "fri-1430": { type: "lec", room: "NC03" }, "B1": { "tue-1030": { type: "lab", room: "EC LAB", span: 2 } }, "B2": { "tue-1030": { type: "lab", room: "EC LAB", span: 2 } }, "B3": { "fri-0830": { type: "lab", room: "EC LAB", span: 2 } }, "B4": { "fri-0830": { type: "lab", room: "EC LAB", span: 2 } } }
    },

    // ==========================================
    // 6. ENGINEERING MECHANICS (EM)
    // ==========================================
    "EM": {
        "Div 1": {
            "wed-1030": { type: "lec", room: "NC01" }, "thu-1030": { type: "lec", room: "NC01" }, "fri-1030": { type: "lec", room: "NC01" },
            "B1": { "tue-1030": { type: "lab", room: "EM LAB", span: 2 } },
            "B2": { "tue-1030": { type: "lab", room: "EM LAB", span: 2 } },
            "B3": { "wed-0830": { type: "lab", room: "EM LAB", span: 2 } },
            "B4": { "wed-0830": { type: "lab", room: "EM LAB", span: 2 } }
        },
        "Div 2": {
            "tue-1530": { type: "lec", room: "NC01" }, "thu-1530": { type: "lec", room: "NC01" }, "wed-1730": { type: "lec", room: "NC01" },
            "B1": { "mon-1430": { type: "lab", room: "EM LAB", span: 2 } },
            "B2": { "mon-1430": { type: "lab", room: "EM LAB", span: 2 } },
            "B3": { "fri-1630": { type: "lab", room: "EM LAB", span: 2 } },
            "B4": { "fri-1630": { type: "lab", room: "EM LAB", span: 2 } }
        }
    },

    // ==========================================
    // 7. DISCRETE STRUCTURES (DS)
    // ==========================================
    "DS": {
        "Div 1": {
            "mon-1030": { type: "lec", room: "NC01" }, "thu-0930": { type: "lec", room: "NC01" }, "fri-0930": { type: "lec", room: "NC01" },
            "B1": { "mon-0930": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "mon-0930": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "tue-0930": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "tue-0930": { type: "lab", room: "NC LAB", span: 1 } }
        },
        "Div 2": {
            "mon-1030": { type: "lec", room: "NC02" }, "thu-0930": { type: "lec", room: "NC02" }, "fri-0930": { type: "lec", room: "NC02" },
            "B1": { "thu-1130": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "fri-1130": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "thu-1130": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "fri-1130": { type: "lab", room: "NC LAB", span: 1 } }
        },
        "Div 3": {
            "mon-1430": { type: "lec", room: "NC01" }, "wed-1430": { type: "lec", room: "NC01" }, "tue-1730": { type: "lec", room: "NC01" },
            "B1": { "thu-1530": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "thu-1530": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "tue-1530": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "tue-1530": { type: "lab", room: "NC LAB", span: 1 } }
        },
        "Div 4": {
            "mon-1430": { type: "lec", room: "NC02" }, "wed-1430": { type: "lec", room: "NC02" }, "tue-1730": { type: "lec", room: "NC02" },
            "B1": { "wed-1630": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "wed-1630": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "wed-1630": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "wed-1630": { type: "lab", room: "NC LAB", span: 1 } }
        },
        "Div 5": {
            "mon-1430": { type: "lec", room: "NC03" }, "wed-1430": { type: "lec", room: "NC03" }, "tue-1730": { type: "lec", room: "NC03" },
            "B1": { "thu-1630": { type: "lab", room: "NC LAB", span: 1 } }, "B2": { "thu-1630": { type: "lab", room: "NC LAB", span: 1 } },
            "B3": { "thu-1630": { type: "lab", room: "NC LAB", span: 1 } }, "B4": { "thu-1630": { type: "lab", room: "NC LAB", span: 1 } }
        }
    },

    // ==========================================
    // 8. FOUNDATIONS OF ELECTRONICS (FEET)
    // ==========================================
    "FEET": {
        "Div 1": {
            "wed-1030": { type: "lec", room: "NC02" }, "thu-1030": { type: "lec", room: "NC02" }, "fri-1030": { type: "lec", room: "NC02" },
            "B1": { "tue-1030": { type: "lab", room: "FEET LAB", span: 2 } },
            "B2": { "tue-1030": { type: "lab", room: "FEET LAB", span: 2 } },
            "B3": { "wed-0830": { type: "lab", room: "FEET LAB", span: 2 } },
            "B4": { "wed-0830": { type: "lab", room: "FEET LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1430": { type: "lec", room: "NC08" }, "wed-1430": { type: "lec", room: "NC08" }, "tue-1730": { type: "lec", room: "NC08" },
            "B1": { "tue-1430": { type: "lab", room: "FEET LAB", span: 2 } },
            "B2": { "tue-1430": { type: "lab", room: "FEET LAB", span: 2 } },
            "B3": { "thu-1430": { type: "lab", room: "FEET LAB", span: 2 } },
            "B4": { "thu-1430": { type: "lab", room: "FEET LAB", span: 2 } }
        }
    },

    // ==========================================
    // 9. PRODUCTION SYSTEMS (IPSSF)
    // ==========================================
    "IPSSF": {
        "Div 1": {
            "tue-1530": { type: "lec", room: "NC03" }, "thu-1530": { type: "lec", room: "NC03" }, "wed-1730": { type: "lec", room: "NC03" },
            "B1": { "mon-1430": { type: "lab", room: "IPSSF LAB", span: 2 } },
            "B2": { "mon-1430": { type: "lab", room: "IPSSF LAB", span: 2 } },
            "B3": { "fri-1630": { type: "lab", room: "IPSSF LAB", span: 2 } },
            "B4": { "fri-1630": { type: "lab", room: "IPSSF LAB", span: 2 } }
        }
    },

    // ==========================================
    // 10. ELECTRICAL MEASUREMENTS (EEMI)
    // ==========================================
    "EEMI": {
        "Div 1": {
            "mon-1030": { type: "lec", room: "NC03" }, "thu-0930": { type: "lec", room: "NC03" }, "fri-0930": { type: "lec", room: "NC03" },
            "B1": { "mon-0830": { type: "lab", room: "EEMI LAB", span: 2 } }, "B2": { "mon-0830": { type: "lab", room: "EEMI LAB", span: 2 } },
            "B3": { "tue-0830": { type: "lab", room: "EEMI LAB", span: 2 } }, "B4": { "tue-0830": { type: "lab", room: "EEMI LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1430": { type: "lec", room: "NC04" }, "wed-1430": { type: "lec", room: "NC04" }, "tue-1730": { type: "lec", room: "NC04" },
            "B1": { "tue-1430": { type: "lab", room: "EEMI LAB", span: 2 } }, "B2": { "tue-1430": { type: "lab", room: "EEMI LAB", span: 2 } },
            "B3": { "thu-1430": { type: "lab", room: "EEMI LAB", span: 2 } }, "B4": { "thu-1430": { type: "lab", room: "EEMI LAB", span: 2 } }
        }
    },

    // ==========================================
    // 11. BASICS OF MEASUREMENT & SENSORS (BMS)
    // ==========================================
    "BMS": {
        "Div 1": {
            "mon-1030": { type: "lec", room: "NC10" }, "thu-0930": { type: "lec", room: "NC10" }, "fri-0930": { type: "lec", room: "NC10" },
            "B1": { "mon-0830": { type: "lab", room: "BMS LAB", span: 2 } }, "B2": { "mon-0830": { type: "lab", room: "BMS LAB", span: 2 } },
            "B3": { "tue-0830": { type: "lab", room: "BMS LAB", span: 2 } }, "B4": { "tue-0830": { type: "lab", room: "BMS LAB", span: 2 } }
        }
    },

    // ==========================================
    // 12. COMPUTER AIDED ENGINEERING DRAWING (CAED)
    // ==========================================
    "CAED": {
        "Div 1": {
            "wed-1030": { type: "lec", room: "NC03" }, "thu-1030": { type: "lec", room: "NC03" }, "fri-1030": { type: "lec", room: "NC03" },
            "B1": { "tue-1030": { type: "lab", room: "CAED LAB", span: 2 } }, "B2": { "tue-1030": { type: "lab", room: "CAED LAB", span: 2 } },
            "B3": { "wed-0830": { type: "lab", room: "CAED LAB", span: 2 } }, "B4": { "wed-0830": { type: "lab", room: "CAED LAB", span: 2 } }
        },
        "Div 2": {
            "tue-1530": { type: "lec", room: "NC02" }, "thu-1530": { type: "lec", room: "NC02" }, "wed-1730": { type: "lec", room: "NC02" },
            "B1": { "mon-1430": { type: "lab", room: "CAED LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "CAED LAB", span: 2 } },
            "B3": { "fri-1630": { type: "lab", room: "CAED LAB", span: 2 } }, "B4": { "fri-1630": { type: "lab", room: "CAED LAB", span: 2 } }
        }
    },

    // ==========================================
    // 13. FUEL FURNACES AND REFRACTORIES (FFR)
    // ==========================================
    "FFR": {
        "Div 1": {
            "wed-1030": { type: "lec", room: "NC04" }, "thu-1030": { type: "lec", room: "NC04" }, "fri-1030": { type: "lec", room: "NC04" },
            "B1": { "wed-0830": { type: "lab", room: "FFR LAB", span: 2 } }, "B2": { "wed-0830": { type: "lab", room: "FFR LAB", span: 2 } }, "B3": { "tue-1030": { type: "lab", room: "FFR LAB", span: 2 } }, "B4": { "tue-1030": { type: "lab", room: "FFR LAB", span: 2 } }
        }
    },

    // ==========================================
    // 14. FUNDAMENTALS OF MEASUREMENTS (FMS)
    // ==========================================
    "FMS": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC10" }, "wed-1330": { type: "lec", room: "NC10" }, "thu-1330": { type: "lec", room: "NC10" } },
        "Div 2": { "tue-1330": { type: "lec", room: "NC10" }, "wed-1330": { type: "lec", room: "NC10" }, "thu-1330": { type: "lec", room: "NC10" } },
        "Div 3": { "tue-1330": { type: "lec", room: "NC06" }, "wed-1330": { type: "lec", room: "NC06" }, "thu-1330": { type: "lec", room: "NC06" } }
    },

    // ==========================================
    // 15. COMMUNICATION SKILLS (CS)
    // ==========================================
    "CS": {
        "Div 1": { "B1": { "mon-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B3": { "tue-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B4": { "tue-1430": { type: "lab", room: "CS LAB", span: 2 } } },
        "Div 2": { "B1": { "mon-1430": { type: "lab", room: "NC11", span: 2 } }, "B2": { "mon-1430": { type: "lab", room: "NC11", span: 2 } }, "B3": { "tue-1430": { type: "lab", room: "NC11", span: 2 } }, "B4": { "tue-1430": { type: "lab", room: "NC11", span: 2 } } },
        "Div 3": { "B1": { "fri-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B2": { "fri-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B3": { "fri-1630": { type: "lab", room: "CS LAB", span: 2 } }, "B4": { "fri-1630": { type: "lab", room: "CS LAB", span: 2 } } },
        "Div 4": { "B1": { "tue-1630": { type: "lab", room: "CS LAB", span: 2 } }, "B2": { "tue-1630": { type: "lab", room: "CS LAB", span: 2 } }, "B3": { "wed-1430": { type: "lab", room: "CS LAB", span: 2 } }, "B4": { "wed-1430": { type: "lab", room: "CS LAB", span: 2 } } },
        "Div 5": { "B1": { "mon-1030": { type: "lab", room: "CS LAB", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC09", span: 2 } }, "B3": { "tue-1030": { type: "lab", room: "CS LAB", span: 2 } }, "B4": { "tue-1030": { type: "lab", room: "NC11", span: 2 } } },
        "Div 6": { "B1": { "mon-1030": { type: "lab", room: "NC08", span: 2 } }, "B2": { "mon-1030": { type: "lab", room: "NC10", span: 2 } }, "B3": { "tue-1030": { type: "lab", room: "NC08", span: 2 } }, "B4": { "tue-1030": { type: "lab", room: "NC09", span: 2 } } },
        "Div 7": { "B1": { "wed-1030": { type: "lab", room: "NC11", span: 2 } }, "B2": { "wed-1030": { type: "lab", room: "CS LAB", span: 2 } }, "B3": { "thu-1030": { type: "lab", room: "NC08", span: 2 } }, "B4": { "thu-1030": { type: "lab", room: "CS LAB", span: 2 } } }
    },

    // ==========================================
    // 16. PERSONALITY DEVELOPMENT (PD)
    // ==========================================
    "PD": {
        "Div 1": { "sat-0830": { type: "lec", room: "NC01", span: 2 } },
        "Div 2": { "sat-1030": { type: "lec", room: "NC01", span: 2 } },
        "Div 3": { "sat-0830": { type: "lec", room: "NC02", span: 2 } },
        "Div 4": { "sat-1030": { type: "lec", room: "NC02", span: 2 } },
        "Div 5": { "sat-0830": { type: "lec", room: "NC03", span: 2 } },
        "Div 6": { "sat-1030": { type: "lec", room: "NC03", span: 2 } },
        "Div 7": { "sat-0830": { type: "lec", room: "NC04", span: 2 } },
        "Div 8": { "sat-1030": { type: "lec", room: "NC04", span: 2 } },
        "Div 9": { "sat-1030": { type: "lec", room: "NC08", span: 2 } }
    },

    // ==========================================
    // 17. VSEC COURSES (GE, FCP, PPS, EW, CAD, MPFL, RDOS, DPV, DPI, EVA, WD, PP, NM, BMT)
    // ==========================================
    "GE": {
        "Div 1": {
            "mon-1230": { type: "lec", room: "NC01" },
            "B1": { "mon-1630": { type: "lab", room: "GE LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "GE LAB", span: 2 } }
        }
    },
    "FCP": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC02" },
            "B1": { "mon-1630": { type: "lab", room: "FCP LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "FCP LAB", span: 2 } }
        }
    },
    "PPS": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC09" },
            "B1": { "wed-1630": { type: "lab", room: "PPS LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "PPS LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "PPS LAB", span: 2 } },
            "B4": { "thu-1030": { type: "lab", room: "PPS LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1330": { type: "lec", room: "NC09" },
            "B1": { "wed-1630": { type: "lab", room: "PPS LAB", span: 2 } },
            "B2": { "thu-1030": { type: "lab", room: "PPS LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "PPS LAB", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "PPS LAB", span: 2 } }
        }
    },
    "EW": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC11" },
            "B1": { "wed-1630": { type: "lab", room: "EW LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "EW LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "EW LAB", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "EW LAB", span: 2 } }
        }
    },
    "CAD": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC13" },
            "B1": { "mon-1630": { type: "lab", room: "CAD LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "CAD LAB", span: 2 } }
        }
    },
    "MPFL": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC05" },
            "B1": { "mon-1630": { type: "lab", room: "MPFL LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "MPFL LAB", span: 2 } }
        }
    },
    "RDOS": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC06" },
            "B1": { "mon-1630": { type: "lab", room: "RDOS LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "RDOS LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "RDOS LAB", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "RDOS LAB", span: 2 } }
        }
    },
    "DPV": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC01" },
            "B1": { "wed-1630": { type: "lab", room: "Unknown", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "Unknown", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "NC11", span: 2 } },
            "B4": { "mon-0830": { type: "lab", room: "Unknown", span: 2 } }
        }
    },
    "DPI": {
        "Div 1": {
            "mon-1230": { type: "lec", room: "NC02" },
            "B1": { "mon-1630": { type: "lab", room: "DPI LAB", span: 2 } },
            "B2": { "thu-1030": { type: "lab", room: "DPI LAB", span: 2 } }
        }
    },
    "EVA": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC14" },
            "B1": { "mon-1630": { type: "lab", room: "EVA LAB", span: 2 } },
            "B2": { "mon-0830": { type: "lab", room: "EVA LAB", span: 2 } }
        }
    },
    "WD": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC03" },
            "B1": { "wed-1630": { type: "lab", room: "WD LAB", span: 2 } },
            "B2": { "mon-1630": { type: "lab", room: "WD LAB", span: 2 } },
            "B3": { "thu-1030": { type: "lab", room: "WD LAB", span: 2 } },
            "B4": { "thu-1030": { type: "lab", room: "WD LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1330": { type: "lec", room: "NC04" },
            "B1": { "wed-1630": { type: "lab", room: "WD LAB", span: 2 } },
            "B2": { "thu-1030": { type: "lab", room: "WD LAB", span: 2 } },
            "B3": { "mon-0830": { type: "lab", room: "WD LAB", span: 2 } }
        }
    },
    "PP": {
        "Div 1": {
            "mon-1330": { type: "lec", room: "NC08" },
            "B1": { "wed-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "wed-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "wed-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B4": { "wed-1430": { type: "lab", room: "PP LAB", span: 2 } }
        },
        "Div 2": {
            "mon-1330": { type: "lec", room: "NC07" },
            "B1": { "wed-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "wed-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "wed-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B4": { "wed-1030": { type: "lab", room: "PP LAB", span: 2 } }
        },
        "Div 3": {
            "mon-1330": { type: "lec", room: "NC12" },
            "B1": { "fri-0830": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "fri-0830": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "fri-0830": { type: "lab", room: "PP LAB", span: 2 } },
            "B4": { "fri-0830": { type: "lab", room: "PP LAB", span: 2 } }
        },
        "Div 4": {
            "mon-1330": { type: "lec", room: "Unknown" },
            "B1": { "tue-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "tue-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "tue-1030": { type: "lab", room: "PP LAB", span: 2 } },
        },
        "Div 5": {
            "mon-1330": { type: "lec", room: "Unknown" },
            "B1": { "mon-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B2": { "mon-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B3": { "mon-1030": { type: "lab", room: "PP LAB", span: 2 } },
            "B4": { "fri-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B5": { "fri-1430": { type: "lab", room: "PP LAB", span: 2 } },
            "B6": { "fri-1430": { type: "lab", room: "PP LAB", span: 2 } }
        }
    },
    "NM": {
        "Div 1": {
            "tue-1330": { "type": "lec", "room": "NC07" },
            "wed-1330": { "type": "lec", "room": "NC07" },
            "thu-1330": { "type": "lec", "room": "NC07" }
        },
        "Div 2": {
            "tue-1330": { "type": "lec", "room": "NC14" },
            "wed-1330": { "type": "lec", "room": "NC14" },
            "thu-1330": { "type": "lec", "room": "NC14" }
        }
    },
    "BMT": {
        "Div 1": {
            "tue-1330": { "type": "lec", "room": "NC13" },
            "wed-1330": { "type": "lec", "room": "NC13" },
            "thu-1330": { "type": "lec", "room": "NC13" }
        }
    },
    "FME": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC05" }, "wed-1330": { type: "lec", room: "NC05" }, "thu-1330": { type: "lec", room: "NC05" } }
    },
    "FPI": {
        "Div 1": { "tue-1230": { type: "lec", room: "NC03" }, "wed-1230": { type: "lec", room: "NC03" }, "thu-1230": { type: "lec", room: "NC03" } }
    },
    "BCE": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC01" }, "wed-1330": { type: "lec", room: "NC01" }, "thu-1330": { type: "lec", room: "NC01" } }
    },
    "AEIOT": {
        "Div 1": { "tue-1330": { type: "lec", room: "NC09" }, "wed-1330": { type: "lec", room: "NC09" }, "thu-1330": { type: "lec", room: "NC09" } },
        "Div 2": { "tue-1330": { type: "lec", room: "NC09" }, "wed-1330": { type: "lec", room: "NC09" }, "thu-1330": { type: "lec", room: "NC09" } },
        "Div 3": { "tue-1330": { type: "lec", room: "NC11" }, "wed-1330": { type: "lec", room: "NC11" }, "thu-1330": { type: "lec", room: "NC11" } }
    },
    // === ELECTRICAL ENERGY UTILIZATION (EEU) ===
    "EEU": {
        "Div 1": {
            "tue-1330": { type: "lec", room: "NC08" },
            "wed-1330": { type: "lec", room: "NC08" },
            "thu-1330": { type: "lec", room: "NC08" }
        },

        "Div 2": {
            "tue-1330": { type: "lec", room: "NC12" },
            "wed-1330": { type: "lec", room: "NC12" },
            "thu-1330": { type: "lec", room: "NC12" }
        }
    },
    // === APPLIED INDUSTRIAL MATHEMATICS (AIMA) ===
    "AIMA": {
        "Div 1": {
            "tue-1330": { type: "lec", room: "NC02" },
            "wed-1330": { type: "lec", room: "NC02" },
            "thu-1330": { type: "lec", room: "NC02" }
        },
        "Div 2": {
            "tue-1330": { type: "lec", room: "NC03" },
            "wed-1330": { type: "lec", room: "NC03" },
            "thu-1330": { type: "lec", room: "NC03" }
        },
        "Div 3": {
            "tue-1330": { type: "lec", room: "NC04" },
            "wed-1330": { type: "lec", room: "NC04" },
            "thu-1330": { type: "lec", room: "NC04" }
        }
    }


};

// --- LAB EMOJI MAPPING ---
// Assign emojis to lab slots by subject code
const LAB_EMOJI_GROUPS = [
    { emoji: '💻', codes: ['CAED', 'WD', 'MPFL', 'IPSSF', 'DS', 'DPV'] },      // computer / CAD / workshop
    { emoji: '📐', codes: ['VCDE', 'PS', 'AE101', 'FPI', 'AIMA', 'PPS'] }, // math / drawing / plotting
    { emoji: '🗣️', codes: ['CS', 'PD'] },                    // communication / speaking labs
    { emoji: '🔬', codes: ['EP', 'EC', 'QP', 'EEMI', 'FEET'] } // core science labs
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

// --- DATA MERGER FUNCTION ---
function getStudentData(mis) {
    if (typeof GENERATED_DB === 'undefined') {
        console.error("GENERATED_DB is missing. Check students.js");
        return null;
    }
    const student = GENERATED_DB[mis];
    if (!student) return null;
    const personalSchedule = {};

    student.cards.forEach(card => {
        const subjectCode = card.code;
        const div = card.div;
        const batch = card.batch;

        if (MASTER_SCHEDULE[subjectCode] && MASTER_SCHEDULE[subjectCode][div]) {
            const divSchedule = MASTER_SCHEDULE[subjectCode][div];

            // Lectures (allow collisions — merge into arrays)
            Object.keys(divSchedule).forEach(key => {
                if (key.includes("-")) {
                    const entry = {
                        ...divSchedule[key],
                        subj: subjectCode,
                        class: subjectCode.toLowerCase()
                    };
                    if (personalSchedule[key]) {
                        if (Array.isArray(personalSchedule[key])) personalSchedule[key].push(entry);
                        else personalSchedule[key] = [personalSchedule[key], entry];
                    } else {
                        personalSchedule[key] = entry;
                    }
                }
            });

            // Labs (allow collisions — merge into arrays). Assign emoji tag using getLabEmoji
            if (batch !== '-' && divSchedule[batch]) {
                const labSlots = divSchedule[batch];
                Object.keys(labSlots).forEach(timeKey => {
                    const lab = labSlots[timeKey];
                    const entry = {
                        ...lab,
                        subj: subjectCode,
                        class: subjectCode.toLowerCase(),
                        tag: getLabEmoji(subjectCode, lab.room)
                    };
                    if (personalSchedule[timeKey]) {
                        if (Array.isArray(personalSchedule[timeKey])) personalSchedule[timeKey].push(entry);
                        else personalSchedule[timeKey] = [personalSchedule[timeKey], entry];
                    } else {
                        personalSchedule[timeKey] = entry;
                    }
                });
            }
        }
    });

    return { ...student, schedule: personalSchedule };
}