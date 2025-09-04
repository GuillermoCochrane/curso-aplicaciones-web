#!/bin/bash
echo "======================================"
echo "Importando base de datos: clongoogleapi"
echo "======================================"

mongorestore --db clongoogleapi ./db_dumps/clongoogleapi

if [ $? -ne 0 ]; then
  echo "[ERROR] Fallo el import de la base de datos."
  exit 1
fi

echo "Import completado desde ./db_dumps/clongoogleapi"