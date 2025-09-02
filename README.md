# 📚 Curso Aplicaciones Web (MERN + Aptugo)

Este repositorio contiene las clases y ejercicios del curso de **Programación Web con Aptugo**, utilizando el stack **MERN** (MongoDB, Express, React, Node.js).

Cada clase incluye:
- Código fuente del ejercicio (front-end y back-end).
- Scripts para levantar el entorno.
- Opcionalmente, un **dump de la base de datos** para restaurar y ejecutar el proyecto tal como se desarrolló en la clase.
- Un `README.md` propio con instrucciones específicas.

---

## 🚀 Requisitos previos

Antes de clonar este repositorio asegurate de tener instalado:

- [Node.js](https://nodejs.org/) (versión recomendada: 18+)
- pnpm (gestor de paquetes)  
- [Visual Studio Code](https://code.visualstudio.com/download) (opcional, recomendado)  
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) (6.0+)
- [MongoDB Database Tools](https://www.mongodb.com/try/download/database-tools)
   En Windows, copiá la carpeta `bin` del zip descargado a:  
   ```
   C:\Program Files\MongoDB\Tools\100\\
   ```

👉 Para detalles de instalación ver:  
- [Guía de Instalación Aptugo Windows](./clase%201/Guía%20de%20Instalación%20Aptugo%20Windows.pdf)  

---

## 🚀 Cómo usar este repo

1. Clonar el repositorio:
```bash
git clone https://github.com/GuillermoCochrane/curso-aplicaciones-web.git
cd curso-aplicaciones-web
```

2. Entrar en la carpeta de la clase que quieras practicar, por ejemplo:

```bash
cd clase_1/HelloWorld
```

3. Seguir las instrucciones específicas en el `README.md` de esa clase.
   Allí encontrarás cómo instalar dependencias, restaurar la base de datos y levantar el proyecto.
   Cada clase tiene scripts `export-db` y `import-db` en `package.json` de la carpeta `back-end` para manejar la base de datos.

4. _(Opcional en Windows)_ Ejecutar `setup.bat` dentro de la clase para instalar, restaurar DB y arrancar automáticamente.

5. _(Opcional en Linux o Mac)_ Ejecutar `setup.sh` dentro de la clase para instalar, restaurar DB y arrancar automáticamente.

---

## 🗂 Clases disponibles

* [Clase 1 – Hello World con Aptugo](./clase1/HelloWorld/README.md)
* Clase 2 – (pendiente)
* Clase 3 – (pendiente)

---

## 📂 Estructura del Repo

```
curso-aplicaciones-web/
│
├── clase-1/
│   └── HelloWorld/
│       ├── back-end/
│       ├── front-end/
│       ├── db_dumps/
│       ├── setup.bat
│       ├── setup.sh
│       └── README.md   # Instrucciones específicas de esta clase
│
├── clase-2/
│   └── ...
│
├── .gitignore
└── README.md  # este archivo
```
Cada clase incluye su propio `readme.md` con detalles específicos.

---

## ✨ Notas

* Cada clase está diseñada para funcionar de manera **independiente**. Cada commit refleja el estado final de una clase.
* Los scripts `setup.bat` (Windows) y `setup.sh` (Linux/Mac) facilitan la instalación y puesta en marcha.
* Si tenés problemas con la base de datos, verificá que las **Database Tools** estén correctamente instaladas.

---

👩‍💻 ¡Listo! Entrá en una clase y empezá a codear.