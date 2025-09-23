#!/bin/bash
echo "======================================"
echo "Instalando dependencias del proyecto raíz"
echo "======================================"
npm install

echo "======================================"
echo "Instalando dependencias del back-end"
echo "======================================"
cd back-end && npm install

echo "======================================"
echo "Importando base de datos (si existe dump)"
echo "======================================"
npm run import-db

echo "======================================"
echo "Levantando proyecto"
echo "======================================"
cd ..
npm start