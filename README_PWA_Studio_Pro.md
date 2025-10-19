# ✨ PWA Studio Pro – Build • Analyze • Deploy

**PWA Studio Pro** ist eine umfassende Entwicklungsumgebung zur Erstellung, Analyse und Bereitstellung von **Progressive Web Apps (PWAs)**.  
Das Tool vereint Generator, Analyzer, Live-Checker und Deployment-Vorlagen in einem modernen, benutzerfreundlichen Interface.

---

## 🚀 Features

### 🧩 PWA Builder
- Erzeugt automatisch:
  - **`manifest.json`**
  - **`service-worker.js`**
  - **`offline.html`**
  - **Maskable Icons**
- Unterstützt **Shortcuts**, **Share Targets** und **Background Sync**
- Fügt automatisch einen **Installations-Button (FAB)** hinzu

### 🔍 Analyzer & Live Checker
- Analysiert lokale HTML-Dateien auf PWA-Tauglichkeit  
- Erkennt automatisch `<meta>`, `<link>` und `<script>`-Fehler  
- Integrierter **PWA Live Checker** prüft veröffentlichte Seiten auf:
  - Manifest-Erreichbarkeit
  - Service Worker
  - Offlinefähigkeit

### 🧠 Supabase Integration
- Automatische Erkennung von Formularfeldern  
- Generiert SQL-Tabellenschemata und CRUD-Code-Snippets  
- Inklusive GitHub Actions Workflow für CI/CD mit Supabase

### 🌙 Dark & Light Mode
- Automatische Theme-Erkennung  
- Manueller Umschalter (☀️ / 🌙)  
- Einstellungen werden im `localStorage` gespeichert  

### 📦 ZIP Export
- Kompletter Projekt-Export mit allen generierten Dateien  
- Struktur: `/manifest.json`, `/sw.js`, `/offline.html`, `/icons/*`  
- Kompatibel mit **GitHub Pages**, **Supabase Hosting** und **lokalem Deployment**

### 🧰 Tools & Komfortfunktionen
- **CRUD-Helfer** für Supabase-Integration  
- **Footer-, Shortcut- und Theme-Generator**  
- **Info-Buttons mit Hilfetexten** (keine Checkbox-Konflikte 🎯)  
- **Offline/Online-Indikator**  
- **Automatisches Speichern & Wiederherstellen** aller Eingaben  

---

## 🧱 Projektstruktur

```text
PWA Studio Pro/
├── index.html               # Haupt-App (PWA Studio Oberfläche)
├── sw.js                    # Service Worker (wird generiert)
├── manifest.json            # Manifest (wird generiert)
├── offline.html             # Offline-Seite (wird generiert)
├── icons/                   # App-Icons & Maskable Icons
└── .github/workflows/       # CI/CD-Vorlagen für GitHub & Supabase
```

---

## ⚙️ Systemanforderungen

| Komponente | Mindestanforderung |
|-------------|-------------------|
| Browser | Chrome / Edge / Firefox / Safari (aktuell) |
| JavaScript | ES6+ (async/await, Promises) |
| Hosting | GitHub Pages, Supabase oder eigener Webserver |
| Offline-Support | HTTPS erforderlich für Service Worker |

---

## 🧭 Nutzung

1. **Öffne `index.html`** lokal oder über eine gehostete Umgebung (z. B. GitHub Pages).  
2. Wähle den Tab **„HTML Analyzer“** oder **„Manifest Builder“**.  
3. Erstelle deine PWA-Struktur Schritt für Schritt.  
4. Exportiere dein Projekt als ZIP.  
5. Lade es auf GitHub oder Supabase hoch und starte den **Live Checker**.  

---

## 🧩 Quick Demo (Ablauf)

1. Lade deine `index.html` hoch oder füge HTML-Code ein.  
2. Klicke **„Analysieren“** → Korrigierte Struktur wird angezeigt.  
3. Wechsel zu **Manifest / Service Worker** → generiere Dateien.  
4. Optional: Füge Supabase-Tabelle hinzu → kopiere Code-Snippet.  
5. Exportiere ZIP → entpacke → starte deine PWA.  
6. Prüfe sie mit dem integrierten **Live Checker**.  

---

## 🧠 Warum PWA Studio Pro?

| Vorteil | Beschreibung |
|----------|---------------|
| 🧩 Alles-in-einem | Generator, Analyzer, Checker, Exporter & Deployer |
| 🚀 Sofort startklar | Keine Installation notwendig |
| 🎨 Modern & responsiv | Klare Tabs, Animationen, Dark Mode |
| 🧱 Erweiterbar | Sauberer Code mit modularer Struktur |
| ☁️ Deployment-ready | GitHub Pages, Supabase, Offline-first |

---

## 👨‍💻 Entwickler

**Björn Voss (aka Omega)**  
📧 [voss.1980@gmail.com](mailto:voss.1980@gmail.com)  
🌐 Projektname: **PWA Studio Pro – Build • Analyze • Deploy**

---

## 🪪 Lizenz

Dieses Projekt steht unter der **MIT-Lizenz**.  
Du darfst den Code frei verwenden, anpassen und weiterentwickeln, solange der Urheber genannt wird.

```
MIT License  
Copyright (c) 2025 Björn Voss
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🧩 Keywords

`PWA`, `Progressive Web App`, `Service Worker`, `Manifest`,  
`Supabase`, `GitHub Pages`, `Offline`, `Analyzer`, `Builder`,  
`PWA Checker`, `Generator`, `PWA Studio Pro`, `Deploy`, `HTML5`

---

## 💬 Kurzbeschreibung für GitHub / Website

> **PWA Studio Pro** ist dein All-in-One Toolkit für Progressive Web Apps.  
> Erstelle, analysiere und deploye PWAs mit Manifest, Service Worker, Supabase-Integration und Live-Checker – alles in einer App.
