# 👋 Clase 1: HelloWorld

Este proyecto es la base del curso: una aplicación mínima con **front-end en React** y **back-end en Express + MongoDB**.

Incluye:
- Código fuente listo para modificar.
- Scripts para importar/exportar la base de datos.
- Instaladores automáticos para Windows (`setup.bat`) y Linux/Mac (`setup.sh`).

---

## ⚙️ Requisitos

- [Node.js](https://nodejs.org/) 18+
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (6.0+)
- [MongoDB Database Tools](https://www.mongodb.com/try/download/database-tools)  
  (necesario para `mongodump` y `mongorestore`)

### Instalación de Database Tools en Windows
1. Descargar el `.zip` desde [este link](https://www.mongodb.com/try/download/database-tools).  
   Seleccionar **Windows x86_64**.
2. Extraer el archivo descargado.
3. Copiar la carpeta `bin` dentro de:

```
C:\Program Files\MongoDB\Tools\100\\
```

Te debería quedar:

```
C:\Program Files\MongoDB\Tools\100\bin\mongodump.exe
C:\Program Files\MongoDB\Tools\100\bin\mongorestore.exe
```
4. ¡Listo! Ya podés usar los scripts `npm run export-db` y `npm run import-db`.

---

## 🚀 Cómo levantar el proyecto

### 🔹 Opción 1: Manual

1. Instalar dependencias:
```bash
npm install
cd back-end && npm install
```

2. Importar la base de datos incluida:

```bash
npm run import-db
```

3. Iniciar el proyecto:

```bash
npm start
```

4. Abrir en el navegador:

```bash
http://localhost:8080
```

---

### 🔹 Opción 2: Automática (recomendada)

* En **Windows**:

```bash
setup.bat
```

* En **Linux / Mac**:

```bash
./setup.sh
```

Los scripts verifican las Database Tools y levantan el proyecto de forma automática.

---

## 📦 Scripts disponibles

En el directorio `back-end`:

* `npm run export-db` → exporta la base de datos actual a `./db_dumps/`
* `npm run import-db` → restaura la base de datos desde `./db_dumps/`

---

## 📂 Estructura de la carpeta

```
HelloWorld/
├── back-end/
├── front-end/
├── db_dumps/        # Backups de la base de datos
├── setup.bat        # Instalación y ejecución automática en Windows
├── setup.sh         # Instalación y ejecución automática en Linux/Mac
└── README.md        # este archivo
```

---
