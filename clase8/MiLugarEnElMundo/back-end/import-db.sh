#!/bin/bash
echo "======================================"
echo "Importando base de datos: milugarenelmundoapi"
echo "======================================"

mongorestore --db milugarenelmundoapi ./db_dumps/milugarenelmundoapi

if [ $? -ne 0 ]; then
  echo "[ERROR] Fallo el import de la base de datos."
  exit 1
fi

echo "Import completado desde ./db_dumps/milugarenelmundoapi"