#!/bin/bash
echo "==============================="
echo "🚀 Instalando dependencias..."
echo "==============================="
npm install
cd back-end && npm install
cd ..

echo "==============================="
echo "💾 Restaurando base de datos..."
echo "==============================="
npm run import-db

echo "==============================="
echo "▶️ Iniciando el proyecto..."
echo "==============================="
npm start
