#!/bin/bash
echo "======================================"
echo "Importando base de datos: seleccionapi"
echo "======================================"

mongorestore --db seleccionapi ./db_dumps/seleccionapi

if [ $? -ne 0 ]; then
  echo "[ERROR] Fallo el import de la base de datos."
  exit 1
fi

echo "Import completado desde ./db_dumps/seleccionapi"