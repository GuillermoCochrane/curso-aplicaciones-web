#!/bin/bash
echo "======================================"
echo "Exportando base de datos: helloworldapi"
echo "======================================"

mongodump --db helloworldapi --out ./db_dumps

if [ $? -ne 0 ]; then
  echo "[ERROR] Fallo el export de la base de datos."
  exit 1
fi

echo "Export completado. Carpeta ./db_dumps generada."