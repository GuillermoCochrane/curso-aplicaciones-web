@echo off
echo ======================================
echo Exportando base de datos: clongoogleapi
echo ======================================

"C:\Program Files\MongoDB\Server\6.0\bin\mongodump.exe" --db clongoogleapi --out ".\db_dumps"

if %ERRORLEVEL% neq 0 (
  echo [ERROR] Fallo el export de la base de datos.
  exit /b 1
)

echo Export completado. Revisa la carpeta .\db_dumps
pause