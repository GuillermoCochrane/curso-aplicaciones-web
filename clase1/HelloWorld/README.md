# 👋 Clase 1

---

## Ejercicio 1: HelloWorld con Aptugo

Este proyecto fue generado con **Aptugo** y adaptado para quedar auto-contenido en este repositorio.

Incluye:
- Código fuente listo para modificar.
- Scripts para importar/exportar la base de datos.
- Instaladores automáticos para Windows (`setup.bat`) y Linux/Mac (`setup.sh`).

---

## ⚙️ Requisitos previos

Antes de ejecutar este proyecto, asegurate de tener instalado:
- [Node.js](https://nodejs.org/) 18+
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (6.0+)
- [MongoDB Database Tools](https://www.mongodb.com/try/download/database-tools)  
  (necesario para `mongodump` y `mongorestore`)
- pnpm (gestor de paquetes)
- [Visual Studio Code](https://code.visualstudio.com/download) (opcional, recomendado)  


👉 Para más detalles podés seguir la [Guía de Instalación oficial](../Guía%20de%20Instalación%20Aptugo%20Windows.pdf).


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

### ¡Listo! Ya podés usar los scripts:

```bash
npm run export-db 
```

y

```bash
npm run import-db
```

---

## 🚀 Cómo levantar el proyecto

### 🔹 Opción 1: Manual

1. Instalar dependencias:
```bash
npm install
cd back-end && npm install
```

2. Importar la base de datos incluida (desde la carpeta **back-end**): 

```bash
npm run export-db
```
  ⚠️ Si aún no hay dump en `db_dumps/`, este paso dará error.

3. Iniciar el proyecto (desde la carpeta base del proyecto):

```bash
npm start
```

4. Abrir en el navegador:

```bash
http://localhost:8080
```

---

### 🔹 Opción 2: Automática (recomendada)

* **Windows**: ejecutar `setup.bat` con doble click.
* **Linux / Mac**: ejecutar en la terminal:

```bash
sh setup.sh
```

👉 **Ambos scripts hacen lo mismo:** instalan dependencias, verifican las Database Tools, restauran la base de datos y levantan el proyecto de forma automática.

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

## 📚 Material de referencia

- [Guía de Estudio – Unidad Intro](../Unidad%20Intro%20y%20Aptugo%20-%20Guía%20de%20Estudio%20-%20Programación%20Web%20-%20App.pdf)
- [Guía de Instalación Aptugo Windows](../Guía%20de%20Instalación%20Aptugo%20Windows.pdf)

---