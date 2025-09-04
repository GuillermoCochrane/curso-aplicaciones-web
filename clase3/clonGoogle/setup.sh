#!/bin/bash
echo "==============================="
echo "🚀 Instalando dependencias proyecto raíz..."
echo "==============================="
npm install

echo "======================================"
echo "⚙ Instalando dependencias del back-end..."
echo "======================================"
cd back-end && npm install

echo "==============================="

echo "💾 Restaurando base de datos ..."
echo "==============================="
npm run import-db
cd ..

echo "==============================="
echo "▶️ Iniciando el proyecto..."
echo "==============================="
npm start