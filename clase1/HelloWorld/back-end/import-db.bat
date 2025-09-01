@echo off
echo ======================================
echo Importando base de datos: helloworldapi
echo ======================================

"C:\Program Files\MongoDB\Server\6.0\bin\mongorestore.exe" --db helloworldapi ".\db_dumps\helloworldapi"

if %ERRORLEVEL% neq 0 (
  echo [ERROR] Fallo el import de la base de datos.
  exit /b 1
)

echo Import completado desde .\db_dumps\helloworldapi
pause