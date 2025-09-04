@echo off
echo ======================================
echo Importando base de datos: seleccionapi
echo ======================================

"C:\Program Files\MongoDB\Server\6.0\bin\mongorestore.exe" --db seleccionapi ".\db_dumps\seleccionapi"

if %ERRORLEVEL% neq 0 (
  echo [ERROR] Fallo el import de la base de datos.
  exit /b 1
)

echo Import completado desde .\db_dumps\seleccionapi
pause