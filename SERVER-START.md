# Entwicklungsserver starten

## Projektordner finden

1. In **Cursor**: Linke Leiste → **Explorer** (Ordner-Symbol).
2. **Rechtsklick** auf `package.json` (in der Projektwurzel).
3. **"Reveal in File Explorer"** oder **"Im Explorer anzeigen"** wählen.
   → Windows öffnet den echten Projektordner. Merke dir den Pfad (z. B. in der Adresszeile).

## Server starten

### Option A: Aus Cursor (Terminal)

1. **Terminal → New Terminal** (oder `` Ctrl+` ``).
2. Im Terminal eingeben (Pfad ggf. anpassen, wenn dein Projekt woanders liegt):

   ```powershell
   cd c:\Users\korbi\golfclub-wiggensbach
   npm run dev
   ```

   Wenn Cursor einen anderen Pfad zeigt (z. B. nach "Reveal in File Explorer"), diesen Pfad verwenden – aber **ohne** `\package.json`, nur den Ordner:

   ```powershell
   cd "C:\DEIN_ECHTER_PFAD\golfclub-wiggensbach"
   npm run dev
   ```

3. Warten, bis **"Ready"** erscheint.
4. Im Browser öffnen: **http://localhost:3000**

### Option B: Über die Batch-Datei

1. Projektordner wie oben per "Reveal in File Explorer" öffnen.
2. **start-dev.bat** doppelklicken.
3. Warten auf "Ready", dann **http://localhost:3000** im Browser öffnen.

---

**Hinweis:** Wenn der Pfad `c:\Users\korbi\golfclub-wiggensbach` im Explorer nicht existiert, liegt das Projekt an einem anderen Ort (z. B. OneDrive, anderer Benutzerordner). "Reveal in File Explorer" zeigt immer den richtigen Ordner.
