@echo off
rem Script para listar primero carpetas y luego archivos en contenido.txt

(
    echo ===== CARPETAS =====
    dir /b /ad
    echo.
    echo ===== ARCHIVOS =====
    dir /b /a-d
) > contenido.txt

echo Listado de carpetas y archivos guardado en contenido.txt
pause
