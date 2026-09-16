@echo off
title Laureign Studios - Sample Synchronizer
echo ============================================================
echo   LAUREIGN STUDIOS - AUTOMATED SAMPLES SYNCHRONIZER
echo ============================================================
echo.
echo Scanning packages/samples folders...
node "%~dp0packages\js\sync-samples.js"
echo.
echo ============================================================
echo   Sync complete! All photos are now live in packages-data.js.
echo ============================================================
pause
