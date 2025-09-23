@echo off
echo ======================================
echo Importando base de datos: milugarenelmundoapi
echo ======================================

"C:\Program Files\MongoDB\Server\6.0\bin\mongorestore.exe" --db milugarenelmundoapi ".\db_dumps\milugarenelmundoapi"

if %ERRORLEVEL% neq 0 (
  echo [ERROR] Fallo el import de la base de datos.
  exit /b 1
)

echo Import completado desde .\db_dumps\milugarenelmundoapi
pause