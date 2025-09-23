#!/bin/bash
echo "======================================"
echo "Exportando base de datos: milugarenelmundoapi"
echo "======================================"

mongodump --db milugarenelmundoapi --out ./db_dumps

if [ $? -ne 0 ]; then
  echo "[ERROR] Fallo el export de la base de datos."
  exit 1
fi

echo "Export completado. Carpeta ./db_dumps generada."