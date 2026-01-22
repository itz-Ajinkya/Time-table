(function() {
    emailjs.init("RvbtnF8aMHVRMX91u"); // e.g., "user_123abc..."
})();

// --- GLOBAL DATA CONTAINERS ---
window.GENERATED_DB = {};
window.MASTER_SCHEDULE = {};
window.ACTIVE_NOTES = [];

// Official Subject Map
const SUBJECT_MAP = {
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
};

// --- LOGIC FUNCTIONS (Embedded directly so no external file needed) ---
const LAB_EMOJI_GROUPS = [
    { emoji: '💻', codes: ['PP', 'CAED', 'WD', 'MPFL', 'IPSSF', 'DS', 'DPV', 'PPS', 'FCP', 'GE', 'EW', 'CAD', 'DPI', 'EVA', 'RDOS'] },
    { emoji: '📐', codes: ['VCDE', 'PS', 'AEIOT', 'FPI', 'AIMA', 'NM', 'BMT'] }, 
    { emoji: '🗣️', codes: ['CS'] },
    { emoji: '🦸‍♂️', codes: ['PD'] },
    { emoji: '🔬', codes: ['EP', 'EC', 'QP', 'EEMI', 'FEET', 'EM', 'FME', 'FMS', 'BCE', 'EEU'] }
];

function getLabEmoji(code, room) {
    if (!code) return '🧪';
    const upper = code.toUpperCase();
    for (const g of LAB_EMOJI_GROUPS) {
        if (g.codes.includes(upper) && g.emoji) return g.emoji;
    }
    if (room && /computer|cognizant/i.test(room)) return '💻';
    return '🧪';
}

function getStudentData(mis) {
    if (!window.GENERATED_DB || !window.GENERATED_DB[mis]) return null;
    const student = window.GENERATED_DB[mis];
    const personalSchedule = {};

    if (student.cards && Array.isArray(student.cards)) {
        student.cards.forEach(card => {
            const subjectCode = card.code;
            const div = card.div;
            const batch = card.batch;

            if (window.MASTER_SCHEDULE[subjectCode] && window.MASTER_SCHEDULE[subjectCode][div]) {
                const divSchedule = window.MASTER_SCHEDULE[subjectCode][div];

                // Process Lectures
                Object.keys(divSchedule).forEach(timeKey => {
                    if (timeKey.length < 5) return; 
                    const slot = divSchedule[timeKey];
                    let lectureEmoji = "";
                    if (['PD', 'CS', 'PP'].includes(subjectCode.toUpperCase())) {
                        lectureEmoji = getLabEmoji(subjectCode, slot.room);
                    }
                    const entry = {
                        ...slot,
                        subj: subjectCode,
                        class: subjectCode.toLowerCase(),
                        tag: lectureEmoji,
                        room: (slot.room || ""),
                        div: div,
                        batch: batch
                    };
                    addToSchedule(personalSchedule, timeKey, entry);
                });

                // Process Labs
                if (batch !== '-' && divSchedule[batch]) {
                    const labSlots = divSchedule[batch];
                    Object.keys(labSlots).forEach(timeKey => {
                        const lab = labSlots[timeKey];
                        const entry = {
                            ...lab,
                            subj: subjectCode,
                            class: subjectCode.toLowerCase(),
                            tag: getLabEmoji(subjectCode, lab.room),
                            room: (lab.room || ""),
                            div: div,
                            batch: batch
                        };
                        addToSchedule(personalSchedule, timeKey, entry);
                    });
                }
            }
        });
    }
    return {
        name: student.name,
        mis: mis,
        cards: student.cards,
        schedule: personalSchedule
    };
}

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

// --- FIREBASE DATA LOADER ---
window.addEventListener('DOMContentLoaded', async () => {
    const db = firebase.firestore();
    try {
        // Fetch global data doc
        const doc = await db.collection('timetable_global').doc('main_data').get();
        if (doc.exists) {
            const data = doc.data();
            window.GENERATED_DB = data.students || {};
            window.MASTER_SCHEDULE = data.schedule || {};
            window.ACTIVE_NOTES = data.notes || [];
            console.log("🔥 Firebase Data Loaded Successfully");
            
            // If user was already logged in, reload dashboard with new data
            const savedUser = localStorage.getItem('currentUserMIS');
            if (savedUser) {
                const studentData = getStudentData(savedUser);
                if (studentData) {
                    loadDashboard(studentData);
                }
            }
        } else {
            console.warn("No data found in Firebase 'timetable_global/main_data'");
        }
    } catch (error) {
        console.error("Error fetching Firebase data:", error);
        showCustomNotification("Data Load Error", "NETWORK", "Please refresh");
    }
});

// Global Config
window.GROUP_COLOR_MAP = {
    blueGroup: { codes: ['EP','QP','EC'], color: '#2980b9', bg: '#EAF4FF' },
    purpleGroup: { codes: ['PS','VCDE'], color: '#8e44ad', bg: '#F4ECF7' },
    ochreGroup: { codes: ['BCE','FPI','AIMA','EEU','AEIOT','FMS','FME','BMT','NM'], color: '#f39c12', bg: '#FFF4E0' },
    tealGroup: { codes: ['IPSSF','EM','FEET','DS','EEMI','BMS','CAED','FFR'], color: '#16a085', bg: '#E8F8F5' },
    redGroup: { codes: ['PD','CS'], color: '#c0392b', bg: '#FDEDEC' },
    slateGroup: { codes: ['GE','FCP','PPS','WD','EW','DPI','DPV','CAD','EVA','MPFL','RDOS','PP'], color: '#34495e', bg: '#F2F4F6' }
};

let clockInterval;
let currentUserSchedule = null;
let currentLiveSlotId = null;
let activeEmojis = []; 
let wakeLock = null;

// Active Notification State
let activeNotifState = { key: null };

// Helpers
const getGroupData = (code) => {
    for (const key in window.GROUP_COLOR_MAP) {
        if (window.GROUP_COLOR_MAP[key].codes.includes(code)) return window.GROUP_COLOR_MAP[key];
    }
    return null;
};

const hexToRgba = (hex, alpha) => {
    if (!hex) return '';
    const h = hex.replace('#','');
    const bigint = parseInt(h, 16);
    return `rgba(${(bigint >> 16) & 255}, ${(bigint >> 8) & 255}, ${bigint & 255}, ${alpha})`;
};

const readableTextColor = (hex) => {
    if (!hex) return '#111';
    const h = hex.replace('#','');
    const b = parseInt(h, 16);
    const brightness = (((b >> 16) & 255) * 299 + ((b >> 8) & 255) * 587 + (b & 255) * 114) / 1000;
    return brightness > 180 ? '#111' : '#ffffff';
};

const toTitleCase = (str) => {
    if (!str) return "";
    return str.toLowerCase().split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
};

// Initialization
window.onload = function() {
    requestAnimationFrame(animateLoop);

    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeIcon();

    const savedViewMode = localStorage.getItem('viewMode');
    if (savedViewMode === 'mobile') {
        document.body.classList.add('view-mode-mobile');
        setViewport('mobile');
    } else if (savedViewMode === 'desktop') {
        document.body.classList.add('view-mode-desktop');
        setViewport('desktop');
    }

    updateViewIcon();

    const savedUser = localStorage.getItem('currentUserMIS');
    if(savedUser && typeof getStudentData === "function") {
        const data = getStudentData(savedUser);
        if(data) {
            loadDashboard(data);
            
            try {
                if (typeof enableDragScroll === "function") {
                    enableDragScroll();
                }
            } catch(e) {
                console.warn("Drag scroll failed to initialize:", e);
            }
        }
    }
};

window.addEventListener('resize', updateViewIcon);

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    updateThemeIcon();
}

function updateThemeIcon() {
    const isDark = document.body.classList.contains('dark-mode');
    const icon = document.getElementById('theme-icon');
    if(icon) icon.innerText = isDark ? '☀️' : '🌙';
}

function toggleViewMode() {
    const body = document.body;
    const isForcedMobile = body.classList.contains('view-mode-mobile');
    const isForcedDesktop = body.classList.contains('view-mode-desktop');
    
    let targetMode = '';

    if (isForcedDesktop) targetMode = 'mobile';
    else if (isForcedMobile) targetMode = 'desktop';
    else targetMode = window.innerWidth > 768 ? 'mobile' : 'desktop';
    
    if (targetMode === 'mobile') {
        body.classList.remove('view-mode-desktop');
        body.classList.add('view-mode-mobile');
        setViewport('mobile');
        localStorage.setItem('viewMode', 'mobile');
    } else {
        body.classList.remove('view-mode-mobile');
        body.classList.add('view-mode-desktop');
        setViewport('desktop');
        localStorage.setItem('viewMode', 'desktop');
    }
    updateViewIcon();
}

function setViewport(mode) {
    const meta = document.querySelector('meta[name="viewport"]');
    if (!meta) return;
    if (mode === 'desktop') meta.setAttribute('content', 'width=1200');
    else meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0');
}

function updateViewIcon() {
    const icon = document.getElementById('view-icon');
    if (!icon) return;
    const body = document.body;
    const isForcedMobile = body.classList.contains('view-mode-mobile');
    const isForcedDesktop = body.classList.contains('view-mode-desktop');
    
    const isDesktopView = isForcedDesktop || (window.innerWidth > 768 && !isForcedMobile);
    icon.innerText = isDesktopView ? '📱' : '💻';
}

// Login
const misInput = document.getElementById('mis-input');
misInput.addEventListener("keypress", (e) => { if (e.key === "Enter") attemptLogin(); });
misInput.addEventListener("paste", (e) => {
    e.preventDefault();
    let paste = (e.clipboardData || window.clipboardData).getData('text').trim();
    if (paste.startsWith("6125")) {
        paste = paste.substring(4);
    }
    misInput.value = paste;
});

function attemptLogin() {
    const val = misInput.value.trim();
    if(!val) return;
    const fullMis = val.length === 9 ? val : "6125" + val;

    if (typeof getStudentData !== "function") {
        alert("JS Files missing"); return;
    }

    const data = getStudentData(fullMis);
    if (data) {
        localStorage.setItem('currentUserMIS', fullMis);
        loadDashboard(data);
        
        try {
            if (typeof enableDragScroll === "function") {
                enableDragScroll();
            }
        } catch(e) {
            console.warn("Drag scroll failed:", e);
        }
    } else {
        const msg = document.getElementById('error-msg');
        showSystemToast("❌ Invalid MIS Number");
    }
}

function logout() {
    localStorage.removeItem('currentUserMIS');
    location.reload();
}

// --- NEW ADMIN LOGIN LOGIC ---
function adminLogin() {
    document.getElementById('admin-login-page').classList.add('active');
    setTimeout(() => document.getElementById('admin-pass-input').focus(), 100);
}

function closeAdminLogin() {
    document.getElementById('admin-login-page').classList.remove('active');
    document.getElementById('admin-pass-input').value = '';
}

async function verifyAdminLogin() {
    const pass = document.getElementById('admin-pass-input').value;
    if (!pass) return;

    const msgBuffer = new TextEncoder().encode(pass);
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    if (hashHex === "57fa8c37f04db0a8467991fdaa445c0ee53b83bedc9876084bfa75e3a39a5c47") {
        sessionStorage.setItem("admin_auth", "true");
        window.location.href = "admin.html";
    } else {
        showSystemToast("⛔ Access Denied: Incorrect Key");
        document.getElementById('admin-pass-input').value = '';
        // Shake animation
        const card = document.querySelector('.admin-login-card');
        card.style.transform = "translateX(10px)";
        setTimeout(() => card.style.transform = "translateX(-10px)", 50);
        setTimeout(() => card.style.transform = "translateX(10px)", 100);
        setTimeout(() => card.style.transform = "translateX(0)", 150);
    }
}

function showCustomNotification(subject, type, location, timerStr = "", persistent = false, isUrgent = false) {
    const toast = document.getElementById('custom-toast');
    const tSubject = document.getElementById('toast-subject');
    const tType = document.getElementById('toast-type');
    const tLocation = document.getElementById('toast-location');
    const tTimer = document.getElementById('toast-timer');

    if(toast) {
        if(tSubject) tSubject.innerText = subject;
        if(tType) tType.innerText = type;
        if(tLocation) tLocation.innerText = location;
        if(tTimer) tTimer.innerText = timerStr;

        // Handle Urgent State
        if (isUrgent) {
            toast.classList.add('urgent');
        } else {
            toast.classList.remove('urgent');
        }

        toast.classList.add('show');

        // Clear any existing timeout to hide
        if (toast.hideTimeout) clearTimeout(toast.hideTimeout);

        if (!persistent) {
            toast.hideTimeout = setTimeout(() => {
                toast.classList.remove('show');
                toast.classList.remove('urgent');
            }, 5000);
        }
    }
}

function hideCustomNotification() {
    const toast = document.getElementById('custom-toast');
    if(toast) {
        toast.classList.remove('show');
        if (toast.hideTimeout) clearTimeout(toast.hideTimeout);
    }
}

// --- GENERIC SYSTEM TOAST ---
function showSystemToast(msg) {
    const t = document.getElementById('system-toast');
    const m = document.getElementById('st-msg');
    if(t && m) {
        m.innerText = msg;
        t.classList.add('active');
        if (navigator.vibrate) navigator.vibrate(50);
        setTimeout(() => t.classList.remove('active'), 3000);
    }
}

function checkUpcomingClasses(now) {
    if (!currentUserSchedule) return;

    const currentDay = now.getDay(); 
    const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

    if (currentDay === 0 || currentDay > 6) return;
    const dayStr = days[currentDay];

    const slots = [
        { id: "0830", h: 8, m: 30 },
        { id: "0930", h: 9, m: 30 },
        { id: "1030", h: 10, m: 30 },
        { id: "1130", h: 11, m: 30 },
        { id: "1230", h: 12, m: 30 },
        { id: "1330", h: 13, m: 30 },
        { id: "1430", h: 14, m: 30 },
        { id: "1530", h: 15, m: 30 },
        { id: "1630", h: 16, m: 30 },
        { id: "1730", h: 17, m: 30 }
    ];

    let upcomingClassFound = false;

    for (const slot of slots) {
        const startTime = new Date(now);
        startTime.setHours(slot.h, slot.m, 0, 0);

        const diffMs = startTime.getTime() - now.getTime();
        const diffMins = diffMs / 60000;

        // Check if within 10 minutes window (and strictly before start)
        if (diffMins <= 10 && diffMins > 0) {
            const key = `${dayStr}-${slot.id}`;
            const classData = currentUserSchedule[key];

            if (classData) {
                upcomingClassFound = true;
                handlePersistentNotification(key, classData, diffMs);
                break; // Handle only the nearest one
            }
        }
    }

    // If no upcoming class in window, but we have an active notification, close it
    if (!upcomingClassFound && activeNotifState.key) {
        hideCustomNotification();
        activeNotifState = { key: null };
    }
}

function handlePersistentNotification(key, classData, diffMs) {
    // Reset state on refresh or new key
    if (activeNotifState.key !== key) {
        activeNotifState = { key: key };
    }

    const mins = Math.floor(diffMs / 60000);
    const secs = Math.floor((diffMs % 60000) / 1000);
    const timeString = `${mins}:${secs.toString().padStart(2, '0')}`;
    const diffMins = diffMs / 60000;
    const isUrgent = diffMins <= 5;

    // Prepare content
    let subject = "";
    let type = "";
    let location = "";

    if (Array.isArray(classData)) {
        subject = classData.map(c => c.subj).join('/');
        type = "CLASH";
        location = classData.map(c => c.room).join('/');
    } else {
        subject = classData.subj;
        type = classData.type === 'lab' ? 'LAB' : 'LECTURE';
        location = classData.room;
    }

    // Show/Update Notification
    showCustomNotification(subject, type, location, timeString, true, isUrgent);
}

// --- COLLISION FIXER ---
function fixSpanCollisions(schedule) {
    const timeSlots = ["0830", "0930", "1030", "1130", "1230", "1330", "1430", "1530", "1630", "1730"];
    const days = ["mon", "tue", "wed", "thu", "fri", "sat"];
    let hasCollision = false;

    days.forEach(day => {
        timeSlots.forEach(slot => {
            const k = `${day}-${slot}`;
            if (Array.isArray(schedule[k]) && schedule[k].length > 1) {
                hasCollision = true;
            }
        });

        for (let i = 0; i < timeSlots.length; i++) {
            const currentSlot = timeSlots[i];
            const key = `${day}-${currentSlot}`;
            let entry = schedule[key];

            if (!entry) continue;

            if (Array.isArray(entry)) {
                entry.forEach(subEntry => {
                    if (subEntry.span && subEntry.span > 1) {
                            for (let j = 1; j < subEntry.span; j++) {
                                if (i + j >= timeSlots.length) break;
                                const nextKey = `${day}-${timeSlots[i+j]}`;
                                if (schedule[nextKey]) {
                                    hasCollision = true;
                                    subEntry.span = 1; 
                                }
                            }
                    }
                });
            } 
            else if (entry.span && entry.span > 1) {
                let overlapFound = false;
                for (let j = 1; j < entry.span; j++) {
                    if (i + j >= timeSlots.length) break;
                    const nextKey = `${day}-${timeSlots[i+j]}`;
                    if (schedule[nextKey]) {
                        overlapFound = true;
                        break;
                    }
                }

                if (overlapFound) {
                    hasCollision = true;
                    const originalSpan = entry.span;
                    const baseEntry = { ...entry, span: 1 };
                    schedule[key] = baseEntry;

                    for (let j = 1; j < originalSpan; j++) {
                            if (i + j >= timeSlots.length) break;
                            const nextKey = `${day}-${timeSlots[i+j]}`;
                            const nextEntryClone = { ...baseEntry };
                            if (schedule[nextKey]) {
                                if (Array.isArray(schedule[nextKey])) {
                                    schedule[nextKey].push(nextEntryClone);
                                } else {
                                    schedule[nextKey] = [schedule[nextKey], nextEntryClone];
                                }
                            } else {
                                schedule[nextKey] = nextEntryClone;
                            }
                    }
                }
            }
        }
    });
    return hasCollision;
}

function loadDashboard(data) {
    document.getElementById('home-page').classList.add('hidden');
    document.getElementById('timetable-page').classList.remove('hidden');

    if (clockInterval) clearInterval(clockInterval);
    clockInterval = setInterval(updateClock, 1000);

    const rawName = data.name || "Student";
    document.getElementById('user-name-display').innerText = toTitleCase(rawName);
    document.getElementById('user-details-display').innerHTML = `MIS: ${data.mis}`;

    const container = document.getElementById('subject-cards-container');
    container.innerHTML = "";
    if (data.cards) {
        data.cards.forEach(c => {
            const group = getGroupData(c.code);
            const color = (group && group.color) || c.color || '#ccc';
            const bg = (group && group.bg) || hexToRgba(color, 0.1);
            const batchHtml = (c.batch && c.batch !== '-') ? `<div class="batch-badge">Batch: ${c.batch}</div>` : '';
            const subjName = SUBJECT_MAP[c.code] || c.code;

            container.innerHTML += `
                <div class="card" style="border-color:${color}; border-bottom-color:${color}; border-right-color:${color}; background:${bg}">
                    <div class="card-top-content">
                        <h3>${subjName}</h3>
                        <div class="subject" style="color:${color}">${c.code}</div>
                    </div>
                    <div>
                        <div class="detail">${c.div}</div>
                        <div class="batch-container">${batchHtml}</div>
                    </div>
                </div>
            `;
        });
    }

    const collisionDetected = fixSpanCollisions(data.schedule);
    const footerNote = document.getElementById('clash-footer');
    if (collisionDetected) footerNote.style.display = 'block';
    else footerNote.style.display = 'none';

    activeEmojis = []; // Clear emojis on reload to prevent glitches
    renderTable(data);
    currentUserSchedule = data.schedule;
    renderDynamicNotes();
    updateClock();

    // SCROLL TO CURRENT DAY AUTOMATICALLY ON LOAD
    setTimeout(scrollToCurrentDay, 300);
}

// --- FREE ROOM LOGIC ---

const TIME_SLOTS_CONFIG = [
    { id: "0830", label: "8:30 - 9:30" }, { id: "0930", label: "9:30 - 10:30" },
    { id: "1030", label: "10:30 - 11:30" }, { id: "1130", label: "11:30 - 12:30" },
    { id: "1230", label: "12:30 - 1:30" }, { id: "1330", label: "1:30 - 2:30" },
    { id: "1430", label: "2:30 - 3:30" }, { id: "1530", label: "3:30 - 4:30" },
    { id: "1630", label: "4:30 - 5:30" }, { id: "1730", label: "5:30 - 6:30" }
];

// 1. Extract all unique rooms from the Master Schedule
function getAllKnownRooms() {
    const rooms = new Set();
    if (!window.MASTER_SCHEDULE) return [];
    
    Object.values(window.MASTER_SCHEDULE).forEach(divs => {
        Object.values(divs).forEach(divData => {
            // Check lectures
            Object.values(divData).forEach(slot => {
                if (slot.room && slot.room !== '-' && slot.room !== 'Online') rooms.add(slot.room);
            });
            // Check batches (labs)
            Object.keys(divData).forEach(key => {
                if (divData[key] && typeof divData[key] === 'object' && !key.includes('-')) {
                    // This is likely a batch, check its slots
                    Object.values(divData[key]).forEach(labSlot => {
                        if (labSlot.room) rooms.add(labSlot.room);
                    });
                }
            });
        });
    });
    return Array.from(rooms).sort(); // Sort alphabetically (e.g., AC101, AC102)
}

// 2. Find occupied rooms for a specific day and time
function getOccupiedRooms(day, slotId) {
    const occupied = new Set();
    const targetIndex = TIME_SLOTS_CONFIG.findIndex(s => s.id === slotId);
    if (targetIndex === -1) return occupied;
    
    if (!window.MASTER_SCHEDULE) return occupied;

    Object.values(window.MASTER_SCHEDULE).forEach(divs => {
        Object.values(divs).forEach(divData => {
            // Helper to check if an entry overlaps with the target time
            const checkEntry = (entry, startSlotId) => {
                if (!entry) return;
                const startIndex = TIME_SLOTS_CONFIG.findIndex(s => s.id === startSlotId);
                if (startIndex === -1) return;
                
                const span = entry.span || 1;
                // Check if the entry's duration covers the target index
                if (startIndex <= targetIndex && (startIndex + span) > targetIndex) {
                    if (entry.room) occupied.add(entry.room);
                }
            };

            // Check Lectures & Batches
            Object.keys(divData).forEach(key => {
                if (key.startsWith(day + '-')) {
                    const startSlotId = key.split('-')[1];
                    const item = divData[key];
            
                    if (Array.isArray(item)) {
                        item.forEach(sub => checkEntry(sub, startSlotId));
                    } else if (typeof item === 'object' && (item.room || item.span)) {
                        checkEntry(item, startSlotId);
                    }
                }
                // Check nested batches (e.g. "B1": { ... })
                else if (typeof divData[key] === 'object' && !key.includes('-')) {
                    const batchData = divData[key];
                    Object.keys(batchData).forEach(bKey => {
                        if (bKey.startsWith(day + '-')) {
                            const bStartSlotId = bKey.split('-')[1];
                            checkEntry(batchData[bKey], bStartSlotId);
                        }
                    });
                }
            });
        });
    });
    return occupied;
}

// --- MOBILE PAGE NAVIGATION HANDLER ---
window.addEventListener('popstate', (e) => {
    if (window.innerWidth > 768) return;

    // 1. Close all modals visually
    document.querySelectorAll('.chat-modal-overlay').forEach(el => el.classList.remove('active'));
    document.getElementById('msgContextMenu').style.display = 'none';

    // 2. Handle State
    if (e.state && e.state.view) {
        document.getElementById('timetable-page').classList.add('hidden');
        
        if (e.state.view === 'freeRooms') document.getElementById('freeRoomsModal').classList.add('active');
        else if (e.state.view === 'auth') document.getElementById('authModal').classList.add('active');
        else if (e.state.view === 'subjects') document.getElementById('subjectModal').classList.add('active');
        else if (e.state.view === 'chat') document.getElementById('chatRoomModal').classList.add('active');
    } else {
        // Home/Dashboard
        document.getElementById('timetable-page').classList.remove('hidden');
        if (typeof unsubscribeChat === 'function' && unsubscribeChat) unsubscribeChat();
    }
});

// 3. Main Function to Show Modal
function showFreeRooms(day, slotId, timeLabel) {
    const allRooms = getAllKnownRooms();
    
    // Filter for NC-1 to NC-14 only
    const targetRooms = allRooms.filter(room => {
        const match = /NC\s*-\s*(\d+)/i.exec(room);
        if (match) {
            const num = parseInt(match[1], 10);
            return num >= 1 && num <= 14;
        }
        return false;
    });

    const occupied = getOccupiedRooms(day, slotId);
    
    // Calculate Vacant
    const vacant = targetRooms.filter(room => !occupied.has(room));
    
    // Sort the vacant rooms numerically based on the number in their name
    vacant.sort((a, b) => {
        const numA = parseInt(a.match(/\d+/)[0], 10);
        const numB = parseInt(b.match(/\d+/)[0], 10);
        return numA - numB;
    });

    // Update UI
    document.getElementById('fr-header').innerHTML = `
        <div style="font-size:1.2rem; font-weight:bold; color:var(--text-main)">${day.toUpperCase()} • ${timeLabel}</div>
        <div>Found ${vacant.length} Free Rooms</div>
    `;
    
    const grid = document.getElementById('fr-grid');
    grid.innerHTML = '';
    
    if (vacant.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:20px;">No free rooms found (or data missing).</div>';
    } else {
        vacant.forEach(room => {
            grid.innerHTML += `
                <div class="room-chip free">
                    <div>${room}</div>
                    <small>VACANT</small>
                </div>
            `;
        });
    }
    
    // Open Modal
    document.getElementById('freeRoomsModal').classList.add('active');

    // Mobile Page Logic
    if (window.innerWidth <= 768) {
        history.pushState({ view: 'freeRooms' }, "Free Rooms", "#freeRooms");
        document.getElementById('timetable-page').classList.add('hidden');
    }
}

function closeFreeRooms() {
    if (window.innerWidth <= 768 && history.state && history.state.view === 'freeRooms') {
        history.back();
    } else {
        document.getElementById('freeRoomsModal').classList.remove('active');
    }
}

function scrollToCurrentDay() {
    const currentTh = document.querySelector('th.current-day-col');
    if (!currentTh) return;

    // Check if we are effectively in mobile view (by window size or class)
    // Adjust this check if your mobile breakpoint is different
    if (window.innerWidth <= 768 || document.body.classList.contains('view-mode-mobile')) {
        const container = document.querySelector('.table-scroll-container');
        if (container) {
            // Determine how wide the sticky "Time" column is (usually 115px)
            const stickyColWidth = 115; 
            
            // Calculate scroll position: place the current column right next to the sticky column
            const scrollPos = currentTh.offsetLeft - stickyColWidth;
            
            container.scrollTo({
                left: scrollPos,
                behavior: 'smooth'
            });
        }
    }
}

// Helper for attaching the event
function attachFreeRoomListener(element, day, startSlotId, span = 1) {
    let timer;
    const holdDuration = 1000; // 1 seconds

    const start = (e) => {
        // Calculate which hour segment was clicked
        const rect = element.getBoundingClientRect();
        let clientY = e.touches ? e.touches[0].clientY : e.clientY;
        
        // Calculate relative position (0.0 to 1.0)
        const relativeY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
        
        // Determine offset based on span (e.g., if span is 2, top half is 0, bottom half is 1)
        const offset = Math.floor(relativeY * span);
        
        // Find the actual time slot ID
        const startIndex = TIME_SLOTS_CONFIG.findIndex(s => s.id === startSlotId);
        if (startIndex === -1) return;
        
        const targetIndex = Math.min(startIndex + offset, TIME_SLOTS_CONFIG.length - 1);
        const targetSlot = TIME_SLOTS_CONFIG[targetIndex];
        
        timer = setTimeout(() => {
            // Vibrate to indicate success
            if (navigator.vibrate) navigator.vibrate([50, 50, 50]);
            showFreeRooms(day, targetSlot.id, targetSlot.label);
        }, holdDuration);
    };

    const end = () => { clearTimeout(timer); };

    // Touch
    element.addEventListener('touchstart', start, {passive: true});
    element.addEventListener('touchend', end);
    element.addEventListener('touchmove', end); // Cancel if scrolling

    // Mouse
    element.addEventListener('mousedown', start);
    element.addEventListener('mouseup', end);
    element.addEventListener('mouseleave', end);
    
    // Prevent default context menu
    element.addEventListener('contextmenu', e => e.preventDefault());
}

function renderTable(data) {
    const schedule = data.schedule || {};
    const tbody = document.getElementById('table-body');
    tbody.innerHTML = "";

    const days = ["mon", "tue", "wed", "thu", "fri", "sat"];
    const skipped = {};

    TIME_SLOTS_CONFIG.forEach((slot, idx) => {
        if (slot.id === "1230") {
        }

        let rowHtml = `<tr id="row-${slot.id}"><td class="time-col time-col-cell">${slot.label}</td>`;

        days.forEach(day => {
            const key = `${day}-${slot.id}`;
            if (skipped[`${day}-${idx}`]) return;

            const item = schedule[key];

            if (slot.id === "1230" && !item) {
                rowHtml += `<td class="break" id="lunch-${day}" style="font-size:0.8rem"><div id="${key}" style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;"><span class="lb-text">LUNCH</span></div></td>`;
                return;
            }

            if (item) {
                if (Array.isArray(item)) {
                    const maxSpan = Math.max(...item.map(i => i.span || 1));
                    for(let i=1; i<maxSpan; i++) skipped[`${day}-${idx+i}`] = true;

                    rowHtml += `<td rowspan="${maxSpan}"><div class="slot slot-collision" id="${key}" data-span="${maxSpan}"><div class="slot-split">`;
                    item.forEach(it => {
                            const group = getGroupData(it.subj);
                            const color = (group && group.color) || '#7f8c8d';
                            const bg = (group && group.bg) || hexToRgba(color, 0.15);
                            const textColor = readableTextColor(color);
                            const emoji = it.tag || ((it.type === 'lab' && typeof getLabEmoji === 'function') ? getLabEmoji(it.subj, it.room) : '');

                            const divStr = it.div ? it.div.replace('Div ', 'D') : '';
                            const batchStr = (it.batch && it.batch !== '-') ? it.batch : '';
                            const metaStr = [divStr, batchStr].filter(Boolean).join(' | ');

                            rowHtml += `<div class="split-item ${it.class||''}" style="background:${bg}; border-left:4px solid ${color}; color:${textColor}">
                            ${emoji ? `<span class="lab-tag">${emoji}</span>` : ''}
                            <div class="slot-title" style="color:${color}; font-size:1.2rem">${it.subj}</div>
                            <div class="slot-footer">
                                <span class="info-box">${it.room}</span>
                                ${metaStr ? `<span class="separator">⚡</span><span class="info-box">${metaStr}</span>` : ''}
                            </div>
                            </div>`;
                    });
                    rowHtml += `</div></div></td>`;
                } else {
                    const span = item.span || 1;
                    for(let i=1; i<span; i++) skipped[`${day}-${idx+i}`] = true;

                    const group = getGroupData(item.subj);
                    const color = (group && group.color) || '#7f8c8d';
                    const bg = (group && group.bg) || hexToRgba(color, 0.15);
                    const textColor = readableTextColor(color);
                    const emoji = item.tag || ((item.type === 'lab' && typeof getLabEmoji === 'function') ? getLabEmoji(item.subj, item.room) : '');

                    let extraStyle = "";
                    let delayedClass = "";
                    if (item.delayed) {
                            extraStyle = "height: calc(100% - 40px) !important; margin-top: 40px !important;";
                            delayedClass = "delayed-slot";
                    }
                    
                    const divStr = item.div ? item.div.replace('Div ', 'D') : '';
                    const batchStr = (item.batch && item.batch !== '-') ? item.batch : '';
                    const metaStr = [divStr, batchStr].filter(Boolean).join(' | ');

                    rowHtml += `<td rowspan="${span}">
                    <div class="slot ${item.class||''} ${delayedClass}" id="${key}" data-span="${span}" style="background:${bg}; border-left:4px solid ${color}; color:${textColor}; ${extraStyle}">
                        ${emoji ? `<span class="lab-tag">${emoji}</span>` : ''}
                        <div class="slot-title" style="color:${color}">${item.subj}${item.type==='lab'?' LAB':''}</div>
                        <div class="slot-footer">
                            <span class="info-box">${item.room}</span>
                            ${metaStr ? `<span class="separator">⚡</span><span class="info-box">${metaStr}</span>` : ''}
                        </div>
                    </div></td>`;
                }
            } else {
                rowHtml += `<td><div id="${key}" class="slot empty-slot" data-span="1" style="background:transparent; box-shadow:none; border:none; color:var(--text-sub); font-size:0.65rem; opacity:0.5; display:flex; align-items:center; justify-content:center; height:100%; text-align:center; cursor:pointer;"><i class="fas fa-fingerprint" style="font-size: 1.5rem; opacity: 0.2;"></i></div></td>`;
            }
        });
        rowHtml += `</tr>`;
        tbody.innerHTML += rowHtml;
    });

    // Attach listeners to all generated slots
    TIME_SLOTS_CONFIG.forEach((slot) => {
        days.forEach(day => {
            const key = `${day}-${slot.id}`;
            const el = document.getElementById(key);
            if (el) {
                const span = parseInt(el.dataset.span || 1);
                attachFreeRoomListener(el, day, slot.id, span);
            }
        });
    });
}

function renderDynamicNotes() {
    if (typeof ACTIVE_NOTES === 'undefined' || !Array.isArray(ACTIVE_NOTES)) return;
    const container = document.getElementById('dynamic-notes-container');
    container.innerHTML = ACTIVE_NOTES.map(note => `
        <div style="text-align: center; font-family: 'Cascadia Code', monospace; font-size: 0.9rem; font-weight: bold; color: var(--error); background: rgba(255, 82, 82, 0.1); padding: 12px; border-radius: 12px; margin: 0 auto 20px auto; max-width: 500px; border: 2px solid var(--error);">
            📢 ${escapeHtml(note)}
        </div>
    `).join('');
}

// ============================================
// ANIMATION LOOP
// ============================================
function animateLoop() {
    updateLunchAnimation();
    updateSnowAnimation(); // FIXED: Added this call
    requestAnimationFrame(animateLoop);
}

function updateLunchAnimation() {
    return;
}

function updateSnowAnimation() {
    if (!currentLiveSlotId) return;

    const el = document.getElementById(currentLiveSlotId);
    if (!el || !el.classList.contains('live-active')) return;

    let snowContainer = el.querySelector('.snowfall');
    if (!snowContainer) {
        snowContainer = document.createElement('div');
        snowContainer.className = 'snowfall';
        el.appendChild(snowContainer);
    }

    if (Math.random() < 0.1) {
        const flake = document.createElement('div');
        flake.className = 'snowflake';
        flake.innerText = '❄️';
        flake.style.left = Math.random() * 100 + '%';
        flake.style.fontSize = (10 + Math.random() * 10) + 'px';
        const duration = 1.5 + Math.random() * 2;
        flake.style.animationDuration = duration + 's';
        // Increased opacity significantly (0.4 to 0.8 range)
        flake.style.opacity = 0.9 + Math.random() * 1.5;
        snowContainer.appendChild(flake);
        setTimeout(() => { if(flake.parentNode) flake.remove(); }, duration * 1000);
    }
}


function updateClock() {
    const now = new Date();
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const dayIdx = now.getDay();

    const timeStr = now.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute:'2-digit', second: '2-digit' });
    const clockEl = document.getElementById('clock');
    if(clockEl) clockEl.innerText = `${days[dayIdx]}, ${timeStr}`;

    // Notifications Check
    checkUpcomingClasses(now);

    document.querySelectorAll('.current-day-col').forEach(el => el.classList.remove('current-day-col'));
    let lb = null;
    
    // Highlight current day column
    if (dayIdx !== 0 && currentUserSchedule) {
        const dayName = days[dayIdx].toLowerCase();
        const th = document.getElementById(`th-${dayName}`);
        if(th) th.classList.add('current-day-col');
        lb = document.getElementById(`lunch-${dayName}`);
    }

    const min = now.getHours() * 60 + now.getMinutes();
    let slotId = null;

    if (min >= 510 && min < 570) slotId = "0830";
    else if (min >= 570 && min < 630) slotId = "0930";
    else if (min >= 630 && min < 690) slotId = "1030";
    else if (min >= 690 && min < 750) slotId = "1130";
    else if (min >= 750 && min < 810) slotId = "1230"; 
    else if (min >= 810 && min < 870) slotId = "1330";
    else if (min >= 870 && min < 930) slotId = "1430";
    else if (min >= 930 && min < 990) slotId = "1530";
    else if (min >= 990 && min < 1050) slotId = "1630";
    else if (min >= 1050 && min < 1110) slotId = "1730";

    // Highlight current time row
    document.querySelectorAll('.current-time-row').forEach(el => el.classList.remove('current-time-row'));
    if (slotId) {
        const row = document.getElementById(`row-${slotId}`);
        if (row) row.classList.add('current-time-row');
    }

    if (slotId === '1230' && lb) {
            if (!lb.classList.contains('lunch-now')) {
                lb.classList.add('lunch-now');
                const txt = lb.querySelector('.lb-text');
                if(txt) txt.innerHTML = `<span style="display:inline-block; animation: rotateEmoji 2s linear infinite; font-size: 1.5rem; vertical-align: middle;">🍽️</span> LUNCH <span style="display:inline-block; animation: rotateEmojiReverse 2s linear infinite; font-size: 1.5rem; vertical-align: middle;">🍽️</span>`;
            }
    } else {


        if (lb && lb.classList.contains('lunch-now')) lb.classList.remove('lunch-now');
        document.querySelectorAll('.lunch-now').forEach(el => {
            el.classList.remove('lunch-now');
            const txt = el.querySelector('.lb-text');
            if(txt) txt.innerText = 'LUNCH';
        });
    }

    // Determine new live slot
    let newLiveKey = null;
    if (dayIdx !== 0 && currentUserSchedule && slotId && slotId !== '1230') {
        const dayName = days[dayIdx].toLowerCase();
        let key = `${dayName}-${slotId}`;
        
        // Check direct slot
        if (document.getElementById(key)) {
            newLiveKey = key;
        } else {
            // Check spanning slots (look back up to 3 hours)
            const allIds = ["0830","0930","1030","1130","1230","1330","1430","1530","1630","1730"];
            const currIdx = allIds.indexOf(slotId);
            for (let i = 1; i <= 3; i++) {
                if (currIdx - i < 0) break;
                const prevKey = `${dayName}-${allIds[currIdx - i]}`;
                const prevItem = currentUserSchedule[prevKey];
                if (prevItem && prevItem.span > i) {
                    newLiveKey = prevKey;
                    break;
                }
            }
        }
    }

    // Update DOM only if the active slot has changed
    if (currentLiveSlotId !== newLiveKey) {
        if (currentLiveSlotId) {
            const oldEl = document.getElementById(currentLiveSlotId);
            if (oldEl) {
                oldEl.classList.remove('live-active');
                const b = oldEl.querySelector('.live-badge');
                if(b) b.remove();
                const s = oldEl.querySelector('.snowfall');
                if(s) s.remove();
            }
        }
        if (newLiveKey) {
            const el = document.getElementById(newLiveKey);
            if (el && !el.classList.contains('empty-slot')) {
                el.classList.add('live-active');
                if (!el.querySelector('.live-badge')) {
                const badge = document.createElement('div');
                badge.className = 'live-badge';
                badge.innerText = 'LIVE';
                el.appendChild(badge);
            }
        }
    }
    currentLiveSlotId = newLiveKey;
}

    // Update Live Toast
    const liveToast = document.getElementById('live-toast');
    if (currentLiveSlotId && currentUserSchedule) {
            const item = currentUserSchedule[currentLiveSlotId];
            if (item) {
                let title = "", room = "";
                if (Array.isArray(item)) {
                    title = item.map(i => i.subj).join(' / ');
                    room = item.map(i => i.room).join(' / ');
                } else {
                    title = item.subj + (item.type === 'lab' ? ' LAB' : '');
                    room = item.room;
                }
                document.getElementById('live-title').innerText = title;
                document.getElementById('live-room').innerText = room;
                liveToast.classList.add('show');
            } else {
                liveToast.classList.remove('show');
            }
    } else {
            if(liveToast) liveToast.classList.remove('show');
    }

    // Handle Dual Mode (Clash)
    const wrapper = document.getElementById('notification-wrapper');
    const customToast = document.getElementById('custom-toast');
    const isLive = liveToast && liveToast.classList.contains('show');
    const isCustom = customToast && customToast.classList.contains('show');

    if (wrapper) {
        if (isLive && isCustom) wrapper.classList.add('dual-mode');
        else wrapper.classList.remove('dual-mode');
    }
}

// Register Service Worker for PWA
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(reg => console.log('Service Worker registered'))
            .catch(err => console.log('Service Worker registration failed: ', err));
    });
}

// --- FIREBASE CHAT SYSTEM LOGIC ---

// 🔴 IMPORTANT: PASTE YOUR FIREBASE KEYS HERE 🔴
const firebaseConfig = {
    apiKey: "AIzaSyBZHCiqLPSM9_tO3g1NiYxr53YfwdrJeAM",
    authDomain: "coep-timetable-chat.firebaseapp.com",
    projectId: "coep-timetable-chat",
    storageBucket: "coep-timetable-chat.appspot.com",
    messagingSenderId: "104557504692",
    appId: "1:104557504692:web:506682eb4fd1e7d62d4fe1"
};

// Initialize Firebase if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const storage = firebase.storage();

// Close Chat on Escape Key
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeModals();
});

let currentChatId = null;
let unsubscribeChat = null;
let chatUser = "Student"; // Default fallback
let currentReply = null; // { id, text, sender }
let selectedFile = null;
let contextMenuMsgId = null;
let contextMenuMsgText = null;
let contextMenuIsMine = false;

// --- Chat Auth Logic ---
let chatAuthOTP = null;
let isChatAuthenticated = false;

async function initiateChatAuth() {
    // Check persistence
    if (localStorage.getItem('chat_auth_active') === 'true') {
        isChatAuthenticated = true;
    }

    if (isChatAuthenticated) {
        openSubjectSelector();
        return;
    }

    const mis = localStorage.getItem('currentUserMIS');
    if (!mis) {
        showSystemToast("Please login first.");
        return;
    }

    // Check if user exists in Firestore
    const docRef = db.collection('chat_users').doc(mis);
    const reqRef = db.collection('chat_activations').doc(mis);
    
    try {
        const doc = await docRef.get();
        
        document.getElementById('authModal').classList.add('active');
        document.getElementById('subjectModal').classList.remove('active');
        document.getElementById('chatRoomModal').classList.remove('active');
        
        if (window.innerWidth <= 768) {
            history.pushState({ view: 'auth' }, "Auth", "#auth");
            document.getElementById('timetable-page').classList.add('hidden');
        }

        hideAllAuthViews();

        if (doc.exists) {
            // User has password -> Show Login
            showLoginView();
        } else {
            // Check if request pending
            const req = await reqRef.get();
            if (req.exists) {
                showPendingView();
            } else {
                showRegisterView(true);
            }
        }
    } catch (e) {
        console.error("Auth Check Error", e);
        showSystemToast("Network Error");
    }
}

function togglePass(inputId, icon) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
        icon.classList.replace('fa-eye', 'fa-eye-slash');
    } else {
        input.type = "password";
        icon.classList.replace('fa-eye-slash', 'fa-eye');
    }
}

function hideAllAuthViews() {
    document.getElementById('auth-login-view').style.display = 'none';
    document.getElementById('auth-register-view').style.display = 'none';
    document.getElementById('auth-change-pass-view').style.display = 'none';
}

function showLoginView() {
    hideAllAuthViews();
    document.getElementById('auth-login-view').style.display = 'block';
    document.getElementById('authTitle').innerHTML = '<i class="fas fa-shield-alt"></i> Security';
}

function showPendingView() {
    hideAllAuthViews();
    document.getElementById('auth-register-view').style.display = 'block';
    document.getElementById('step-1-request').style.display = 'none';
    document.getElementById('step-2-pending').style.display = 'block';
    document.getElementById('reg-title').innerText = "Request Pending";
    document.getElementById('reg-desc').innerText = "Check your email later";
}

function showRegisterView(isFirstTime) {
    hideAllAuthViews();
    document.getElementById('auth-register-view').style.display = 'block';
    document.getElementById('step-1-request').style.display = 'block';
    document.getElementById('step-2-pending').style.display = 'none';
    
    if (isFirstTime) {
        document.getElementById('reg-title').innerText = "Request Access";
        document.getElementById('reg-desc').innerText = "Get password via email";
        document.getElementById('authTitle').innerHTML = '<i class="fas fa-user-shield"></i> Setup';
    } else {
        document.getElementById('reg-title').innerText = "Reset Password";
        document.getElementById('reg-desc').innerText = "Request new password";
        document.getElementById('authTitle').innerHTML = '<i class="fas fa-key"></i> Reset';
    }
}

async function requestChatAccess(btnElement) {
    const mis = localStorage.getItem('currentUserMIS');
    const student = window.GENERATED_DB ? window.GENERATED_DB[mis] : null;
    
    let email = student ? (student.email || "") : "";
    email = email.trim();
    let name = student ? (student.name || "Student") : "Student";

    if (!email) {
        showSystemToast("Email not found for this user.");
        return;
    }

    btnElement.disabled = true;
    btnElement.innerText = "Requesting...";

    // Generate Random Password
    const password = Math.random().toString(36).slice(-8);
    
    try {
        await db.collection('chat_activations').doc(mis).set({
            mis: mis,
            name: name,
            email: email,
            password: password,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        showPendingView();
    } catch (e) {
        console.error("Request Error", e);
        showSystemToast("Error sending request.");
        btnElement.disabled = false;
        btnElement.innerText = "Request Access";
    }
}

async function verifyChatLogin() {
    const pass = document.getElementById('login-pass').value.trim();
    const mis = localStorage.getItem('currentUserMIS');

    try {
        const doc = await db.collection('chat_users').doc(mis).get();
        if (doc.exists) {
            const data = doc.data();
            if (data.password === pass) {
                isChatAuthenticated = true;
                localStorage.setItem('chat_auth_active', 'true');
                document.getElementById('login-pass').value = ''; // Clear
                document.getElementById('authModal').classList.remove('active');
                openSubjectSelector();

                // Check if password looks like a default random one (8 chars)
                // Prompt user to change it if so
                if (pass.length === 8) {
                    setTimeout(() => {
                        if(confirm("⚠️ Security Alert\n\nYou are using a default password. Would you like to change it now?")) {
                            showChangePassView();
                        }
                    }, 500);
                }
            } else {
                showSystemToast("Incorrect Password");
            }
        } else {
            showSystemToast("User not found. Please register.");
            showRegisterView(true);
        }
    } catch (e) {
        console.error("Login Error", e);
        showSystemToast("Login Failed");
    }
}

function showForgotPass() {
    showRegisterView(false);
}

function toggleChatSettings() {
    const menu = document.getElementById('chatSettingsMenu');
    menu.classList.toggle('active');
}

function logoutChat() {
    isChatAuthenticated = false;
    localStorage.removeItem('chat_auth_active');
    document.getElementById('chatSettingsMenu').classList.remove('active');
    closeModals();
    showSystemToast("Logged out from Chat");
}

function showChangePassView() {
    document.getElementById('subjectModal').classList.remove('active');
    document.getElementById('chatSettingsMenu').classList.remove('active');
    document.getElementById('authModal').classList.add('active');
    hideAllAuthViews();
    document.getElementById('auth-change-pass-view').style.display = 'block';
    document.getElementById('authTitle').innerHTML = '<i class="fas fa-cog"></i> Settings';
}

function cancelChangePass() {
    document.getElementById('authModal').classList.remove('active');
    document.getElementById('subjectModal').classList.add('active');
}

async function doChangePassword() {
    const oldPass = document.getElementById('cp-old').value.trim();
    const newPass = document.getElementById('cp-new').value.trim();
    const confirmPass = document.getElementById('cp-confirm').value.trim();
    const mis = localStorage.getItem('currentUserMIS');
    
    if(!oldPass || !newPass) { showSystemToast("Please fill all fields"); return; }
    if(newPass !== confirmPass) { showSystemToast("New passwords do not match!"); return; }
    if(newPass.length < 4) { showSystemToast("New password too short"); return; }

    try {
        const docRef = db.collection('chat_users').doc(mis);
        const doc = await docRef.get();
        if(doc.exists && doc.data().password === oldPass) {
            await docRef.update({ password: newPass });
            showSystemToast("Password Updated! 🎉");
            triggerConfetti(); // CHEERING EFFECT
            document.getElementById('cp-old').value = '';
            document.getElementById('cp-new').value = '';
            document.getElementById('cp-confirm').value = '';
            cancelChangePass();
        } else {
            showSystemToast("Incorrect Old Password");
        }
    } catch(e) {
        console.error(e);
        showSystemToast("Error updating password");
    }
}

// 1. Open Selector Logic
async function openSubjectSelector() {
    // Use the same storage key as your login system
    const mis = localStorage.getItem('currentUserMIS');
    
    if (!mis || typeof GENERATED_DB === 'undefined' || !GENERATED_DB[mis]) {
        showSystemToast("Please login first.");
        return;
    }

    const student = GENERATED_DB[mis];
    chatUser = student.name; // Set user name for chat

    const list = document.getElementById('subjectListContent');
    list.innerHTML = ''; 

    // Create buttons for each subject
    if(student.cards && student.cards.length > 0) {
        // Prepare array to handle async operations
        const promises = student.cards.map(async card => {
            const btn = document.createElement('div');
            btn.className = 'subject-btn';
            
            // Unique Group ID: SubjectCode + Division (e.g., EP_Div7)
            // Remove spaces from Div for cleaner ID
            const cleanDiv = (card.div || "").replace(/\s+/g, ''); 
            const groupId = `${card.code}_${cleanDiv}`; 

            // Check for unseen messages
            let unseenHtml = '';
            try {
                const chatDoc = await db.collection('chats').doc(groupId).get();
                if (chatDoc.exists) {
                    const data = chatDoc.data();
                    if (data.lastMessageTimestamp) {
                        const lastSeen = localStorage.getItem('lastSeen_' + groupId) || 0;
                        if (data.lastMessageTimestamp.toMillis() > lastSeen) {
                            unseenHtml = '<div class="unseen-dot" title="New Messages"></div>';
                        }
                    }
                }
            } catch(e) { console.log("Error checking unseen", e); }

            btn.innerHTML = `
                <div style="display:flex; align-items:center;">
                    <div class="subject-code">${card.code}</div>
                    <div class="subject-div" style="margin-left:10px;">${card.div}</div>
                    ${unseenHtml}
                </div>
                <i class="fas fa-chevron-right" style="color:var(--text-sub)"></i>
            `;
            
            btn.onclick = () => openChatRoom(groupId, card.code);
            return btn;
        });
        
        const buttons = await Promise.all(promises);
        buttons.forEach(btn => list.appendChild(btn));
    }

    document.getElementById('subjectModal').classList.add('active');
    document.getElementById('chatRoomModal').classList.remove('active');

    if (window.innerWidth <= 768) {
        history.pushState({ view: 'subjects' }, "Groups", "#groups");
        document.getElementById('timetable-page').classList.add('hidden');
    }
}

// 2. Open Chat Room
function openChatRoom(groupId, subjectName) {
    currentChatId = groupId;
    // Mark as seen
    localStorage.setItem('lastSeen_' + groupId, Date.now());
    
    document.getElementById('chatTitle').innerText = subjectName;
    
    // Switch Modals
    document.getElementById('subjectModal').classList.remove('active');
    document.getElementById('chatRoomModal').classList.add('active');

    if (window.innerWidth <= 768) {
        history.pushState({ view: 'chat' }, "Chat", "#chat");
        document.getElementById('timetable-page').classList.add('hidden');
    }
    
    const msgArea = document.getElementById('messagesArea');
    msgArea.innerHTML = '<div style="text-align:center;color:#999;margin-top:20px;">Loading messages...</div>';

    // Detach previous listener
    if (unsubscribeChat) unsubscribeChat();

    // Listen for new messages
    unsubscribeChat = db.collection('chats').doc(groupId).collection('messages')
        .orderBy('timestamp', 'asc')
        .limit(50)
        .onSnapshot(snapshot => {
            msgArea.innerHTML = '';
            if (snapshot.empty) {
                msgArea.innerHTML = '<div style="text-align:center;color:#ccc;margin-top:50px;">No messages yet.<br>Start the conversation! 👋</div>';
            }
            
            snapshot.forEach(doc => {
                const data = doc.data();
                const msgId = doc.id;
                const el = document.createElement('div');
                const isMine = data.sender === chatUser;
                const isAdmin = data.sender === 'Admin';
                
                el.className = `message ${isMine ? 'mine' : (isAdmin ? 'admin' : 'theirs')}`;
                el.dataset.id = msgId;
                el.dataset.text = data.text || "";
                el.dataset.sender = data.sender;
                el.dataset.isMine = isMine;
                
                // Reply Preview
                let replyHtml = '';
                if (data.replyTo) {
                    replyHtml = `
                        <div class="msg-reply-preview">
                            <div style="font-weight:700; font-size:0.75rem;">${escapeHtml(data.replyTo.sender)}</div>
                            <div style="white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(data.replyTo.text)}</div>
                        </div>
                    `;
                }

                // Image
                let imageHtml = data.imageUrl ? `<img src="${data.imageUrl}" class="chat-image" onclick="window.open(this.src, '_blank')">` : '';

                let contentHtml = linkify(escapeHtml(data.text));

                el.innerHTML = `
                    <span class="msg-sender">${isMine ? 'You' : (data.sender || 'Anon')}</span>
                    ${replyHtml}
                    ${contentHtml}
                    ${imageHtml}
                `;
                
                // Attach Events for Swipe & Long Press
                attachMessageEvents(el, msgId, data.text, data.sender, isMine);

                msgArea.appendChild(el);
            });
            
            // Auto scroll to bottom
            msgArea.scrollTop = msgArea.scrollHeight;
            
            // Update seen status while chat is open
            localStorage.setItem('lastSeen_' + groupId, Date.now());
        });
}

// --- Message Interaction Logic (Swipe & Long Press) ---
function attachMessageEvents(el, msgId, text, sender, isMine) {
    let touchStartX = 0;
    let touchStartY = 0;
    let longPressTimer;
    let isSwiping = false;

    // Long Press (Mobile & Desktop)
    const startLongPress = (e) => {
        longPressTimer = setTimeout(() => {
            showContextMenu(e, msgId, text, isMine);
            // Vibrate if supported
            if (navigator.vibrate) navigator.vibrate(50);
        }, 500);
    };

    const cancelLongPress = () => {
        clearTimeout(longPressTimer);
    };

    // Touch Events
    el.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        startLongPress(e);
    }, {passive: true});

    el.addEventListener('touchmove', (e) => {
        const touchX = e.touches[0].clientX;
        const touchY = e.touches[0].clientY;
        const deltaX = touchX - touchStartX;
        const deltaY = touchY - touchStartY;

        // Cancel long press if moved
        if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) cancelLongPress();

        // Swipe to Reply Logic (Right Swipe)
        if (deltaX > 30 && Math.abs(deltaY) < 30) {
            isSwiping = true;
            el.style.transform = `translateX(${Math.min(deltaX, 100)}px)`;
        }
    }, {passive: true});

    el.addEventListener('touchend', (e) => {
        cancelLongPress();
        if (isSwiping) {
            const touchX = e.changedTouches[0].clientX;
            if (touchX - touchStartX > 80) {
                // Trigger Reply
                setReply(msgId, text, sender);
            }
            // Reset
            el.style.transform = 'translateX(0)';
            isSwiping = false;
        }
    });

    // Mouse Events (Desktop Long Press)
    el.addEventListener('mousedown', (e) => startLongPress(e));
    el.addEventListener('mouseup', cancelLongPress);
    el.addEventListener('mouseleave', cancelLongPress);
    
    // Prevent context menu on right click to use custom one
    el.addEventListener('contextmenu', (e) => {
        e.preventDefault();
        showContextMenu(e, msgId, text, isMine);
    });
}

function showContextMenu(e, msgId, text, isMine) {
    contextMenuMsgId = msgId;
    contextMenuMsgText = text;
    contextMenuIsMine = isMine;
    
    const menu = document.getElementById('msgContextMenu');
    const editBtn = document.getElementById('ctxEditBtn');
    const delBtn = document.getElementById('ctxDeleteBtn');

    // Show/Hide Edit/Delete based on ownership
    editBtn.style.display = isMine ? 'flex' : 'none';
    delBtn.style.display = isMine ? 'flex' : 'none';

    // Position Menu
    let x, y;
    if (e.touches) {
        x = e.touches[0].clientX;
        y = e.touches[0].clientY;
    } else {
        x = e.clientX;
        y = e.clientY;
    }

    // Boundary checks
    if (x + 150 > window.innerWidth) x = window.innerWidth - 160;
    if (y + 150 > window.innerHeight) y = window.innerHeight - 160;

    menu.style.left = x + 'px';
    menu.style.top = y + 'px';
    menu.style.display = 'flex';

    // Close menu on click elsewhere
    const closeMenu = () => {
        menu.style.display = 'none';
        document.removeEventListener('click', closeMenu);
    };
    // Delay slightly to prevent immediate closing
    setTimeout(() => document.addEventListener('click', closeMenu), 100);
}

// --- Reply Logic ---
function setReply(id, text, sender) {
    currentReply = { id, text, sender };
    document.getElementById('replySender').innerText = sender;
    document.getElementById('replyText').innerText = text || "Image";
    document.getElementById('replyBanner').classList.add('active');
    document.getElementById('msgInput').focus();
}

function clearReply() {
    currentReply = null;
    document.getElementById('replyBanner').classList.remove('active');
}

function triggerReplyFromMenu() {
    // Get sender from DOM since context menu might not have it
    // Actually we can find the element
    const el = document.querySelector(`.message[data-id="${contextMenuMsgId}"]`);
    if (el) {
        setReply(contextMenuMsgId, contextMenuMsgText, el.dataset.sender);
    }
}

// 3. Send Message
// 🔴 
const IMGBB_API_KEY = "0238f6629d829b482dff05cf989fa62a"; 

async function sendMessage(e) {
    e.preventDefault();
    const input = document.getElementById('msgInput');
    const text = input.value.trim();
    
    // Check if we have text OR a file to send
    if ((!text && !currentReply && !selectedFile) || !currentChatId) return;

    // Loading State
    const btn = e.target.querySelector('.send-btn') || document.querySelector('.send-btn');
    const originalIcon = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i>'; 
    btn.disabled = true;

    let finalImageUrl = null;

    try {
        // 1. IF FILE SELECTED: Upload to ImgBB first
        if (selectedFile) {
            const formData = new FormData();
            formData.append("image", selectedFile);

            const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            
            if (data.success) {
                finalImageUrl = data.data.url; // The direct link to the image
            } else {
                throw new Error("ImgBB Upload Failed");
            }
        }

        // 2. SAVE TO FIREBASE (Text + Image URL)
        // We use the same 'sendToFirestore' function you already have!
        await sendToFirestore(text, finalImageUrl);

        // Success Cleanup
        input.value = '';
        clearImagePreview();
        clearReply();

    } catch (error) {
        console.error("Error:", error);
        showSystemToast("Failed to send");
    } finally {
        // Reset Button
        btn.innerHTML = originalIcon;
        btn.disabled = false;
    }
}

function sendToFirestore(text, imageUrl) {
    const payload = {
        text: text,
        sender: chatUser,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    };

    if (currentReply) {
        payload.replyTo = currentReply;
    }

    if (imageUrl) {
        payload.imageUrl = imageUrl;
    }

    db.collection('chats').doc(currentChatId).collection('messages').add(payload).then(() => {
        clearReply();
        // Update Parent Doc for "Last Message" tracking (Seen/Unseen feature)
        db.collection('chats').doc(currentChatId).set({
            lastMessageTimestamp: firebase.firestore.FieldValue.serverTimestamp(),
            lastMessageText: payload.text || (payload.imageUrl ? "📷 Image" : "Message"),
            lastSender: chatUser
        }, { merge: true });
    }).catch(err => {
        console.error("Error sending:", err);
        showSystemToast("Message failed");
    });
}

// --- File Upload ---
function handleFileUpload(input) {
    const file = input.files[0];
    if (!file) return;

    selectedFile = file;
    
    // Show Preview
    const reader = new FileReader();
    reader.onload = function(e) {
        document.getElementById('imgPreview').src = e.target.result;
        document.getElementById('imagePreviewBanner').classList.add('active');
        document.querySelector('.attach-btn').style.color = 'var(--primary)';
        document.getElementById('msgInput').focus();
    };
    reader.readAsDataURL(file);
    
    // Clear input so same file can be selected again if needed (though we handle it via state)
    input.value = ''; 
}

function clearImagePreview() {
    selectedFile = null;
    document.getElementById('imagePreviewBanner').classList.remove('active');
    document.querySelector('.attach-btn').style.color = 'var(--text-sub)';
    document.getElementById('fileInput').value = '';
}

// --- Edit / Delete Triggers ---
function triggerDelete() {
    if(!confirm("Delete this message?")) return;
    db.collection('chats').doc(currentChatId).collection('messages').doc(contextMenuMsgId).delete()
        .catch(err => showSystemToast("Error deleting"));
}

function triggerEdit() {
    const newText = prompt("Edit message:", contextMenuMsgText);
    if (newText !== null && newText.trim() !== "" && newText !== contextMenuMsgText) {
        db.collection('chats').doc(currentChatId).collection('messages').doc(contextMenuMsgId).update({
            text: newText.trim()
        }).catch(err => showSystemToast("Error updating"));
    }
}

function closeModals() {
    if (window.innerWidth <= 768 && history.state && history.state.view) {
        history.back();
    } else {
        document.getElementById('subjectModal').classList.remove('active');
        document.getElementById('chatRoomModal').classList.remove('active');
        document.getElementById('authModal').classList.remove('active');
        document.getElementById('msgContextMenu').style.display = 'none';
        document.getElementById('chatSettingsMenu').classList.remove('active');
        if (unsubscribeChat) unsubscribeChat();
    }
}

// Security Helper
function escapeHtml(text) {
    if (!text) return text;
    return text
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function linkify(text) {
    if (!text) return "";
    const urlRegex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        return '<a href="' + url + '" target="_blank" style="color:var(--accent); text-decoration:underline;">' + url + '</a>';
    });
}

// Mobile Keyboard Fix: Adjust chat window height when keyboard opens
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        const chatModal = document.getElementById('chatRoomModal');
        if (chatModal.classList.contains('active') && window.innerWidth <= 480) {
            // Adjust height to visible area to prevent keyboard overlap
            chatModal.style.height = `${window.visualViewport.height}px`;
            // Scroll to bottom to keep latest messages visible
            const msgArea = document.getElementById('messagesArea');
            msgArea.scrollTop = msgArea.scrollHeight;
        }
    });
}

// --- CONFETTI ANIMATION ---
function triggerConfetti() {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const container = document.getElementById('confetti-container');
    
    for (let i = 0; i < 60; i++) {
        const el = document.createElement('div');
        el.className = 'confetti-piece';
        el.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        el.style.left = (Math.random() < 0.5 ? 0 : 100) + '%'; // Start from corners
        
        // Random trajectory towards center/up
        const tx = (Math.random() - 0.5) * 400 + 'px';
        const ty = -(Math.random() * 500 + 100) + 'px';
        
        el.style.setProperty('--tx', tx);
        el.style.setProperty('--ty', ty);
        el.style.animation = `confettiShoot ${1 + Math.random()}s ease-out forwards`;
        
        container.appendChild(el);
        setTimeout(() => el.remove(), 2000);
    }
}