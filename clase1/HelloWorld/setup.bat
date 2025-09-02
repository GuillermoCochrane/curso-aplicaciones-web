@echo off
echo ===============================
echo 🚀 Instalando dependencias del proyecto raíz...
echo ===============================
npm install

echo ======================================
echo ⚙ Instalando dependencias del back-end
echo ======================================
cd back-end && npm install

echo ===============================
echo 💾 Restaurando base de datos (si existe dump)...
echo ===============================
npm run import-db
cd ..

echo ===============================
echo ▶️ Iniciando el proyecto...
echo ===============================
npm start

pause