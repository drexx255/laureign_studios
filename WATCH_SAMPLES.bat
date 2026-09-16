@echo off
title Laureign Studios - Real-Time Sample Watcher
echo ============================================================
echo   LAUREIGN STUDIOS - LIVE SAMPLE FOLDER WATCHER
echo ============================================================
echo.
echo Watching packages/samples in background...
echo Any folder or image you add, rename, or delete will automatically sync!
echo Keep this window open while adjusting images. Press Ctrl+C to stop.
echo.
node "%~dp0packages\js\watch-samples.js"
pause
