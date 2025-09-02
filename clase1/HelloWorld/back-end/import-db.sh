#!/bin/bash
echo "======================================"
echo "Importando base de datos: helloworldapi"
echo "======================================"

mongorestore --db helloworldapi ../db_dumps/helloworldapi

if [ $? -ne 0 ]; then
  echo "[ERROR] Fallo el import de la base de datos."
  exit 1
fi

echo "Import completado desde ./db_dumps/helloworldapi"