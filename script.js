// ==================== INLINE SVG ICONS ====================
const icons = {
    'clipboard-list': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>',
    'home': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    'file-plus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
    'save': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
    'eye': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    'link': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    'share-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    'log-out': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>',
    'user': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
    'user-plus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
    'unlock': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/></svg>',
    'calendar': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    'calendar-days': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>',
    'type': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
    'hash': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="9" x2="20" y2="9"/><line x1="4" y1="15" x2="20" y2="15"/><line x1="10" y1="3" x2="8" y2="21"/><line x1="16" y1="3" x2="14" y2="21"/></svg>',
    'clock': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    'mail': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
    'phone': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    'align-left': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="17" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="17" y1="18" x2="3" y2="18"/></svg>',
    'chevron-down-square': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><polyline points="8 10 12 14 16 10"/></svg>',
    'circle-dot': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="1"/></svg>',
    'check-square': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
    'toggle-left': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/></svg>',
    'map-pin': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    'star': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
    'folder': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    'text-cursor-input': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1"/><path d="M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5"/><path d="M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1"/><path d="M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7"/><path d="M9 7v10"/></svg>',
    'sparkles': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>',
    'layout': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>',
    'download': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    'settings': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
    'mouse-pointer-click': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 9 5 12 1.8-5.2L21 14Z"/><path d="M7.2 2.2 8 5.1"/><path d="m5.1 8-2.9-.8"/><path d="M14 4.1 12 6"/><path d="m6 12-1.9 2"/></svg>',
    'chevron-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
    'chevron-down': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
    'trash-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>',
    'globe': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    'git-branch': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/></svg>',
    'flask-conical': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><path d="M8.5 2h7"/><path d="M7 16h10"/></svg>',
    'rocket': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>',
    'refresh-cw': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>',
    'smartphone': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
    'copy': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    'check-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
    'cloud': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    'info': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
    'alert-triangle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
    'x-circle': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
    'loader': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/></svg>',
    'database': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    'building-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/><path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/></svg>',
    'bar-chart-3': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M18 17V9"/><path d="M13 17V5"/><path d="M8 17v-3"/></svg>',
    'inbox': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12"/><path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/></svg>',
    'plus': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
    'pencil': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"/></svg>',
    'file-text': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    'arrow-left': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>',
    'arrow-right': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
    'table': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>',
    'bar-chart-2': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    'wifi': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    'wifi-off': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
    'check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
    'x': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
    'search': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    'trending-up': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>',
    'edit-3': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
    'list': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
    'upload': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
    'filter': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
    'layers': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    'activity': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    'file-spreadsheet': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h2"/><path d="M8 17h2"/><path d="M14 13h2"/><path d="M14 17h2"/></svg>',
    'code': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    'qr-code': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="3" height="3"/><rect x="18" y="14" width="3" height="3"/><rect x="14" y="18" width="3" height="3"/><rect x="18" y="18" width="3" height="3"/></svg>',
    'scan': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>',
    'calculator': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="8" y2="18"/><line x1="12" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16" y2="18"/></svg>',
    'file-edit': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5"/><polyline points="14 2 14 8 20 8"/><path d="M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l1-3.95 5.42-5.44Z"/></svg>',
    'copy-check': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 15 2 2 4-4"/><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>'
};

function getIcon(name, size = 16) {
    const svg = icons[name] || icons['file-text'];
    return svg.replace(/width="24"/g, `width="${size}"`).replace(/height="24"/g, `height="${size}"`);
}

function initIcons() {
    document.querySelectorAll('[data-icon]').forEach(el => {
        const name = el.getAttribute('data-icon');
        const size = el.getAttribute('data-size') || 16;
        el.innerHTML = getIcon(name, size);
    });
}

// ==================== CONFIGURATION ====================
const CONFIG = {
    PROXY_URL: 'https://script.google.com/macros/s/AKfycbwC9lJdYj4askujDNO2GfK-Rqq02VBcr90NXhifgvpawboEK1YCyUfbi2GA2hFL2UghkA/exec',
    AUTH_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwC9lJdYj4askujDNO2GfK-Rqq02VBcr90NXhifgvpawboEK1YCyUfbi2GA2hFL2UghkA/exec',
    LOGO_URL: 'https://github.com/mohamedsillahkanu/gdp-dashboard-2/raw/6c7463b0d5c3be150aafae695a4bcbbd8aeb1499/ICF-SL.jpg'
};

// ==================== STORAGE HELPERS ====================
const memoryStorage = {};
let storageAvailable = true;
let storageWarningShown = false;

try {
    localStorage.setItem('__test__', '1');
    localStorage.removeItem('__test__');
} catch (e) {
    storageAvailable = false;
    console.warn('localStorage not available:', e.message);
}

const safeStorage = {
    getItem: function(key) {
        if (!storageAvailable) {
            return memoryStorage[key] || null;
        }
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn('Storage read error:', e);
            return memoryStorage[key] || null;
        }
    },
    setItem: function(key, value) {
        memoryStorage[key] = value;
        if (!storageAvailable) {
            if (!storageWarningShown) {
                storageWarningShown = true;
                setTimeout(() => {
                    if (typeof notify === 'function') {
                        notify('⚠️ Storage blocked by browser. Data stored in memory only - will be lost on refresh. Host file on a web server for persistence.', 'warning');
                    }
                }, 2000);
            }
            return;
        }
        try {
            localStorage.setItem(key, value);
        } catch (e) {
            console.warn('Storage write error:', e);
        }
    },
    removeItem: function(key) {
        delete memoryStorage[key];
        if (!storageAvailable) return;
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('Storage remove error:', e);
        }
    }
};

// ==================== PROXY CONFIGURATION ====================
const PROXIES = [
    { name: 'Direct', url: '', type: 'direct' },
    { name: 'GAS Proxy', url: 'https://script.google.com/macros/s/AKfycbx68uwmC6Hb7Vp5VGrOsUVNcOe0pzB8j8MBBHEDoIifVL6QC_3S7U0OldnhhzCwzUPMeg/exec', type: 'gas' },
    { name: 'CORS Proxy 1', url: 'https://corsproxy.io/?', type: 'cors' },
    { name: 'CORS Proxy 2', url: 'https://api.allorigins.win/raw?url=', type: 'cors' },
    { name: 'CORS Proxy 3', url: 'https://cors-anywhere.herokuapp.com/', type: 'cors' }
];

function buildProxyUrl(proxy, targetUrl, auth, method) {
    if (proxy.type === 'direct') {
        return targetUrl;
    } else if (proxy.type === 'gas') {
        let proxyUrl = proxy.url + '?url=' + encodeURIComponent(targetUrl);
        if (auth) {
            proxyUrl += '&auth=' + encodeURIComponent(auth);
        }
        if (method && method !== 'GET') {
            proxyUrl += '&method=' + method;
        }
        return proxyUrl;
    } else {
        return proxy.url + encodeURIComponent(targetUrl);
    }
}

// ==================== GLOBAL STATE ====================
const state = {
    user: null,
    fields: [],
    selectedFieldId: null,
    fieldCounter: 0,
    isSharedMode: false,
    settings: {
        title: 'My Data Collection Form',
        originalTitle: '',
        formId: '',
        logo: CONFIG.LOGO_URL,
        aggregateColumn: '',
        aggregateColumns: [],
        gpsField: ''
    },
    sheets: {
        scriptUrl: CONFIG.AUTH_SCRIPT_URL,
        sheetId: '',
        connected: true
    },
    dhis2: {
        url: '',
        username: '',
        password: '',
        syncMode: 'aggregate',
        orgUnitLevel: 5,
        periodType: 'Monthly',
        periodColumn: '',
        orgUnitColumn: '',
        programId: '',
        connected: false,
        datasetId: null,
        dataElements: {},
        orgUnits: [],
        orgUnitMap: {}
    },
    collectedData: [],
    filters: {},
    filterOrder: [],
    dateFilter: { start: '', end: '' },
    currentDataView: 'case',
    chartInstances: {}
};

const fieldDefs = {
    period: { label: 'Period', icon: 'calendar-days', defaultLabel: 'Reporting Period', valueType: 'TEXT', isDhis2: true, category: 'dhis2' },
    text: { label: 'Text', icon: 'type', defaultLabel: 'Text Field', valueType: 'TEXT', category: 'text' },
    number: { label: 'Number', icon: 'hash', defaultLabel: 'Number Field', valueType: 'NUMBER', category: 'numeric' },
    calculation: { label: 'Calculation', icon: 'calculator', defaultLabel: 'Calculated Field', valueType: 'NUMBER', category: 'numeric' },
    date: { label: 'Date', icon: 'calendar', defaultLabel: 'Date Field', valueType: 'DATE', category: 'date' },
    time: { label: 'Time', icon: 'clock', defaultLabel: 'Time Field', valueType: 'TIME', category: 'time' },
    email: { label: 'Email', icon: 'mail', defaultLabel: 'Email Address', valueType: 'TEXT', category: 'text' },
    phone: { label: 'Phone', icon: 'phone', defaultLabel: 'Phone Number', valueType: 'TEXT', category: 'text' },
    textarea: { label: 'Long Text', icon: 'align-left', defaultLabel: 'Long Text', valueType: 'LONG_TEXT', category: 'text' },
    select: { label: 'Dropdown', icon: 'chevron-down-square', defaultLabel: 'Dropdown', valueType: 'TEXT', category: 'categorical', options: ['Option 1', 'Option 2', 'Option 3'] },
    radio: { label: 'Radio', icon: 'circle-dot', defaultLabel: 'Radio Choice', valueType: 'TEXT', category: 'categorical', options: ['Option 1', 'Option 2', 'Option 3'] },
    checkbox: { label: 'Checkbox', icon: 'check-square', defaultLabel: 'Checkbox', valueType: 'TRUE_ONLY', category: 'categorical', options: ['Option 1', 'Option 2'] },
    yesno: { label: 'Yes/No', icon: 'toggle-left', defaultLabel: 'Yes/No Question', valueType: 'BOOLEAN', category: 'categorical' },
    gps: { label: 'GPS', icon: 'map-pin', defaultLabel: 'GPS Location', valueType: 'TEXT', category: 'text' },
    qrcode: { label: 'QR Code', icon: 'qr-code', defaultLabel: 'QR/Barcode Scanner', valueType: 'TEXT', category: 'text' },
    cascade: { label: 'Cascade', icon: 'git-branch', defaultLabel: 'Cascading Dropdown', valueType: 'TEXT', category: 'categorical', cascadeData: [], cascadeColumns: [] },
    rating: { label: 'Rating', icon: 'star', defaultLabel: 'Rating', valueType: 'INTEGER', category: 'categorical', max: 5 },
    section: { label: 'Section', icon: 'folder', defaultLabel: 'New Section', valueType: null, category: 'structure' }
};

// ==================== PERIODS ====================
function generatePeriods() {
    const periods = [];
    for (let year = 2020; year <= 2026; year++) {
        for (let month = 1; month <= 12; month++) {
            periods.push(`${year}${String(month).padStart(2, '0')}`);
        }
    }
    return periods;
}
const PERIODS = generatePeriods();

// ==================== NEW SHORT URL FUNCTIONS ====================
function generateShortHash() {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let hash;
    do {
        hash = '';
        for (let i = 0; i < 6; i++) {
            hash += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    } while (localStorage.getItem('icfCollectShortForms') && 
             JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}')[hash]);
    
    return hash;
}

function saveFormWithHash(hash, formData) {
    const forms = JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}');
    forms[hash] = formData;
    localStorage.setItem('icfCollectShortForms', JSON.stringify(forms));
    saveFormToGoogleSheetsBackup(hash, formData);
}

function loadFormFromHash(hash) {
    const forms = JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}');
    let formData = forms[hash];
    
    if (!formData) {
        loadFormFromGoogleSheetsBackup(hash).then(backupData => {
            if (backupData) {
                formData = backupData;
                forms[hash] = formData;
                localStorage.setItem('icfCollectShortForms', JSON.stringify(forms));
                renderFormFromData(formData);
            } else {
                document.getElementById('viewerContainer').innerHTML = `
                    <div style="text-align:center;padding:40px;color:#dc3545;">
                        <h3>Form not found</h3>
                        <p>The form with code <code>${hash}</code> doesn't exist or has expired.</p>
                        <button onclick="window.location='/'">Go Home</button>
                    </div>
                `;
            }
        });
    } else {
        renderFormFromData(formData);
    }
}

function renderFormFromData(formData) {
    state.fields = formData.fields || [];
    state.settings = formData.settings || { title: formData.title || 'Form' };
    state.dhis2 = formData.dhis2 || {};
    
    document.getElementById('formTitle').value = state.settings.title;
    document.getElementById('previewTitle').textContent = state.settings.title;
    
    renderFormViewer();
}

async function saveFormToGoogleSheetsBackup(hash, formData) {
    try {
        await fetch(CONFIG.AUTH_SCRIPT_URL, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
                action: 'saveShortFormBackup',
                hash: hash,
                formData: formData,
                timestamp: new Date().toISOString()
            })
        });
    } catch (err) {
        console.log('Cloud backup failed, but local storage works');
    }
}

async function loadFormFromGoogleSheetsBackup(hash) {
    try {
        const response = await fetch(`${CONFIG.AUTH_SCRIPT_URL}?action=getShortFormBackup&hash=${hash}`, {
            mode: 'cors'
        });
        const result = await response.json();
        if (result.success && result.formData) {
            return result.formData;
        }
    } catch (err) {
        console.log('Cloud load failed');
    }
    return null;
}

// NEW: Share form with fixed-length URL
async function shareForm() {
    if (state.fields.length === 0) { 
        notify('Add fields!', 'error'); 
        return; 
    }
    
    const hash = generateShortHash();
    
    const formData = {
        title: state.settings.title,
        fields: state.fields.map(f => ({
            id: f.id,
            type: f.type,
            label: f.label,
            name: f.name,
            required: f.required,
            options: f.options,
            max: f.max,
            showLogic: f.showLogic,
            validation: f.validation,
            minLength: f.minLength,
            maxLength: f.maxLength,
            exactLength: f.exactLength,
            exactDigits: f.exactDigits,
            minDigits: f.minDigits,
            maxDigits: f.maxDigits,
            noFutureDates: f.noFutureDates,
            noPastDates: f.noPastDates,
            minDate: f.minDate,
            maxDate: f.maxDate,
            autoTime: f.autoTime,
            checkDuplicate: f.checkDuplicate,
            cascadeGroup: f.cascadeGroup,
            cascadeLevel: f.cascadeLevel,
            cascadeColumn: f.cascadeColumn,
            cascadeColumns: f.cascadeColumns,
            cascadeDataRef: f.cascadeDataRef,
            cascadeValueColumn: f.cascadeValueColumn,
            formula: f.formula
        })),
        settings: state.settings,
        dhis2: state.dhis2 ? {
            url: state.dhis2.url,
            username: state.dhis2.username,
            password: btoa(state.dhis2.password || ''),
            syncMode: state.dhis2.syncMode,
            orgUnitLevel: state.dhis2.orgUnitLevel,
            periodType: state.dhis2.periodType,
            periodColumn: state.dhis2.periodColumn,
            orgUnitColumn: state.dhis2.orgUnitColumn,
            programId: state.dhis2.programId
        } : null
    };
    
    saveFormWithHash(hash, formData);
    
    const baseUrl = window.location.origin + window.location.pathname;
    const shortUrl = baseUrl + '#' + hash;
    
    document.getElementById('shareUrl').textContent = shortUrl;
    document.getElementById('shareModal').classList.add('show');
    state.currentShortHash = hash;
    
    notify(`Short URL created! Length: ${shortUrl.length} characters`, 'success');
}

function createNewShortUrl() {
    if (!state.fields || state.fields.length === 0) {
        notify('No form to share', 'error');
        return;
    }
    
    const hash = generateShortHash();
    
    const formData = {
        title: state.settings.title,
        fields: state.fields.map(f => ({
            id: f.id,
            type: f.type,
            label: f.label,
            name: f.name,
            required: f.required,
            options: f.options
        })),
        settings: state.settings,
        dhis2: state.dhis2
    };
    
    saveFormWithHash(hash, formData);
    
    const baseUrl = window.location.origin + window.location.pathname;
    const shortUrl = baseUrl + '#' + hash;
    
    document.getElementById('shareUrl').textContent = shortUrl;
    state.currentShortHash = hash;
    
    notify('New URL generated!', 'success');
}

function showShortUrls() {
    const forms = JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}');
    const baseUrl = window.location.origin + window.location.pathname;
    
    let html = '<div style="max-width:600px;margin:20px auto;">';
    html += '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">';
    html += '<h2 style="color:#004080;"><span class="inline-icon">' + getIcon('link', 20) + '</span> Your Short URLs</h2>';
    html += '<button onclick="closeHome()" style="padding:10px 20px;background:#28a745;color:#fff;border:none;border-radius:6px;cursor:pointer;">Back to Builder</button>';
    html += '</div>';
    
    if (Object.keys(forms).length === 0) {
        html += '<div style="text-align:center;padding:40px;background:#f8f9fa;border-radius:8px;">';
        html += '<p style="font-size:48px;margin-bottom:12px;"><span class="inline-icon">' + getIcon('inbox', 48) + '</span></p>';
        html += '<p style="color:#666;">No short URLs created yet</p>';
        html += '<button onclick="shareForm()" style="margin-top:20px;padding:12px 24px;background:#004080;color:#fff;border:none;border-radius:6px;cursor:pointer;">Create Your First Short URL</button>';
        html += '</div>';
    } else {
        html += '<div style="background:#e8f4fc;padding:15px;border-radius:8px;margin-bottom:20px;">';
        html += '<p style="margin:0;font-size:12px;color:#004080;"><span class="inline-icon">' + getIcon('info', 14) + '</span> Each URL is exactly 6 characters + domain name. Always the same length!</p>';
        html += '</div>';
        
        Object.keys(forms).forEach(hash => {
            const form = forms[hash];
            const shortUrl = baseUrl + '#' + hash;
            const createdDate = form.createdAt ? new Date(form.createdAt).toLocaleDateString() : 'Unknown';
            
            html += `
                <div style="background:#fff;padding:15px;margin-bottom:15px;border-radius:8px;border-left:4px solid #004080;box-shadow:0 2px 4px rgba(0,0,0,0.1);">
                    <h3 style="margin:0 0 5px 0;font-size:16px;">${escapeHtml(form.title || 'Untitled')}</h3>
                    <div style="font-size:12px;color:#666;margin-bottom:8px;">
                        <span class="inline-icon">${getIcon('calendar', 12)}</span> Created: ${createdDate}
                        <span style="margin-left:10px;"><span class="inline-icon">${getIcon('bar-chart-3', 12)}</span> ${form.fields?.length || 0} fields</span>
                    </div>
                    <div style="background:#f1f3f5;padding:10px;border-radius:4px;font-family:monospace;margin-bottom:10px;word-break:break-all;">
                        ${shortUrl}
                    </div>
                    <div style="display:flex;gap:5px;flex-wrap:wrap;">
                        <button onclick="copyUrl('${shortUrl}')" style="padding:8px 15px;background:#004080;color:#fff;border:none;border-radius:4px;cursor:pointer;"><span class="inline-icon">${getIcon('copy', 12)}</span> Copy</button>
                        <button onclick="testUrl('${hash}')" style="padding:8px 15px;background:#28a745;color:#fff;border:none;border-radius:4px;cursor:pointer;"><span class="inline-icon">${getIcon('eye', 12)}</span> Preview</button>
                        <button onclick="deleteShortUrl('${hash}')" style="padding:8px 15px;background:#dc3545;color:#fff;border:none;border-radius:4px;cursor:pointer;"><span class="inline-icon">${getIcon('trash-2', 12)}</span> Delete</button>
                    </div>
                </div>
            `;
        });
    }
    
    html += '</div>';
    
    document.getElementById('homeContainer').innerHTML = html;
    document.querySelector('.header').style.display = 'none';
    document.getElementById('homeContainer').classList.add('show');
    initIcons();
}

function copyUrl(url) {
    navigator.clipboard.writeText(url);
    notify('Copied to clipboard!');
}

function testUrl(hash) {
    window.open(window.location.origin + window.location.pathname + '#' + hash, '_blank');
}

function deleteShortUrl(hash) {
    if (confirm('Delete this short URL? The form will no longer be accessible.')) {
        const forms = JSON.parse(localStorage.getItem('icfCollectShortForms') || '{}');
        delete forms[hash];
        localStorage.setItem('icfCollectShortForms', JSON.stringify(forms));
        showShortUrls();
        notify('Short URL deleted');
    }
}

// ==================== YOUR EXISTING AUTH FUNCTIONS ====================
function checkAuth() {
    const saved = safeStorage.getItem('icfCollectUser');
    if (saved) { state.user = JSON.parse(saved); showBuilder(); }
}

function switchAuthTab(tab) {
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector(`.auth-tab[data-tab="${tab}"]`)?.classList.add('active');
    document.getElementById(tab + 'Form')?.classList.add('active');
}

function showForgotPassword() {
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.getElementById('forgotForm').classList.add('active');
    document.getElementById('authError').style.display = 'none';
    document.getElementById('authSuccess').style.display = 'none';
}

function showAuthLoading(show) {
    document.getElementById('authLoading').style.display = show ? 'block' : 'none';
    document.querySelectorAll('.auth-btn').forEach(btn => btn.disabled = show);
}

async function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    
    document.getElementById('authError').style.display = 'none';
    showAuthLoading(true);
    
    try {
        const response = await fetch(CONFIG.AUTH_SCRIPT_URL, {
            method: 'POST', mode: 'cors', redirect: 'follow',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
                action: 'login',
                email: email,
                password: password
            })
        });
        const result = await response.json();
        
        showAuthLoading(false);
        
        if (result.success && result.user) {
            state.user = result.user;
            safeStorage.setItem('icfCollectUser', JSON.stringify(result.user));
            showBuilder();
        } else {
            document.getElementById('authError').style.display = 'block';
            document.getElementById('authError').textContent = result.error || 'Invalid credentials';
        }
    } catch (error) {
        showAuthLoading(false);
        const users = JSON.parse(safeStorage.getItem('icfCollectUsers') || '[]');
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            state.user = user;
            safeStorage.setItem('icfCollectUser', JSON.stringify(user));
            showBuilder();
        } else {
            document.getElementById('authError').style.display = 'block';
            document.getElementById('authError').textContent = 'Connection error. Please try again.';
        }
    }
}

async function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value.trim();
    const email = document.getElementById('signupEmail').value.trim();
    const password = document.getElementById('signupPassword').value;
    
    document.getElementById('authError').style.display = 'none';
    document.getElementById('authSuccess').style.display = 'none';
    showAuthLoading(true);
    
    try {
        const response = await fetch(CONFIG.AUTH_SCRIPT_URL, {
            method: 'POST', mode: 'cors', redirect: 'follow',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({
                action: 'signup',
                name: name,
                email: email,
                password: password
            })
        });
        const result = await response.json();
        
        showAuthLoading(false);
        
        if (result.success) {
            const users = JSON.parse(safeStorage.getItem('icfCollectUsers') || '[]');
            if (!users.find(u => u.email === email)) {
                users.push({ id: result.user?.id || Date.now().toString(), name, email, password });
                safeStorage.setItem('icfCollectUsers', JSON.stringify(users));
            }
            
            document.getElementById('authSuccess').style.display = 'block';
            document.getElementById('authSuccess').textContent = 'Account created! Please login.';
            setTimeout(() => switchAuthTab('login'), 1500);
        } else {
            document.getElementById('authError').style.display = 'block';
            document.getElementById('authError').textContent = result.error || 'Registration failed';
        }
    } catch (error) {
        showAuthLoading(false);
        document.getElementById('authError').style.display = 'block';
        document.getElementById('authError').textContent = 'Connection error. Please try again.';
    }
}

async function handleForgotPassword(e) {
    e.preventDefault();
    const email = document.getElementById('forgotEmail').value.trim();
    
    document.getElementById('authError').style.display = 'none';
    document.getElementById('authSuccess').style.display = 'none';
    showAuthLoading(true);
    
    try {
        const response = await fetch(CONFIG.AUTH_SCRIPT_URL + '?action=forgotPassword&email=' + encodeURIComponent(email), {
            mode: 'cors',
            redirect: 'follow'
        });
        const result = await response.json();
        
        showAuthLoading(false);
        
        if (result.success) {
            document.getElementById('authSuccess').style.display = 'block';
            document.getElementById('authSuccess').textContent = 'Password sent to your email!';
            setTimeout(() => switchAuthTab('login'), 2000);
        } else {
            document.getElementById('authError').style.display = 'block';
            document.getElementById('authError').textContent = result.message || 'Email not found';
        }
    } catch (error) {
        showAuthLoading(false);
        document.getElementById('authError').style.display = 'block';
        document.getElementById('authError').textContent = 'Connection error. Please try again.';
    }
}

function showBuilder() {
    document.getElementById('authContainer').style.display = 'none';
    document.getElementById('mainContainer').classList.add('show');
    document.getElementById('headerUser').innerHTML = '<span data-icon="user" data-size="14"></span> ' + (state.user?.name || 'User');
    renderFields();
    initIcons();
}

function logout() {
    state.user = null;
    safeStorage.removeItem('icfCollectUser');
    document.getElementById('mainContainer').classList.remove('show');
    document.getElementById('authContainer').style.display = 'flex';
}

// ==================== UPDATED INIT FUNCTION ====================
function init() {
    // Check for hash-based short URL first
    const hash = window.location.hash.substring(1);
    
    if (hash && hash.length === 6) {
        document.getElementById('authContainer').style.display = 'none';
        document.getElementById('viewerContainer').classList.add('show');
        document.getElementById('viewerContainer').innerHTML = `
            <div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;">
                <div style="font-size:48px;margin-bottom:20px;">⏳</div>
                <div style="color:#004080;font-weight:600;">Loading form <code>${hash}</code>...</div>
            </div>
        `;
        
        loadFormFromHash(hash);
        return;
    }
    
    // Check for compressed data (backward compatibility)
    const urlParams = new URLSearchParams(window.location.search);
    const compressedData = urlParams.get('d');
    
    if (compressedData) {
        try {
            const decoded = atob(decodeURIComponent(compressedData));
            const charData = decoded.split('').map(c => c.charCodeAt(0));
            const binData = new Uint8Array(charData);
            const decompressed = pako.inflate(binData, { to: 'string' });
            const data = JSON.parse(decompressed);
            
            const cacheKey = 'shared_form_' + window.location.search.substring(0, 100);
            try {
                safeStorage.setItem(cacheKey, decompressed);
            } catch (e) {}
            
            state.isSharedMode = true;
            renderSharedForm(data);
            return;
        } catch (err) { 
            console.error('Decode error:', err);
            
            if (!navigator.onLine) {
                const cacheKey = 'shared_form_' + window.location.search.substring(0, 100);
                const cached = safeStorage.getItem(cacheKey);
                if (cached) {
                    try {
                        const data = JSON.parse(cached);
                        state.isSharedMode = true;
                        renderSharedForm(data);
                        return;
                    } catch (e) {}
                }
            }
        }
    }
    
    loadFromStorage();
    loadConfigs();
    setupEventListeners();
    checkAuth();
}

function setupEventListeners() {
    document.querySelectorAll('.auth-tab').forEach(tab => tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab)));
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    document.getElementById('forgotForm').addEventListener('submit', handleForgotPassword);
    document.querySelectorAll('.field-type').forEach(el => el.addEventListener('click', () => addField(el.dataset.type)));
    document.getElementById('formTitle').addEventListener('input', (e) => {
        state.settings.title = e.target.value;
        document.getElementById('previewTitle').textContent = e.target.value;
        saveToStorage();
    });
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('show'); });
    });
}

// ==================== INITIALIZE ====================
// Start the app
init();
initIcons();
updateOnlineStatus();
