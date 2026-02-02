@echo off
cd /d "%~dp0"
echo Starte Entwicklungsserver...
echo.
echo Wenn "Ready" erscheint, im Browser oeffnen:
echo   http://localhost:3000
echo.
echo Zum Beenden: Fenster schliessen oder Strg+C
echo.
npm run dev
pause
