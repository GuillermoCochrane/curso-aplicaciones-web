const { execSync } = require("child_process");
const os = require("os");
const path = require("path");

try {
  if (os.platform() === "win32") {
    console.log("Detectado Windows. Ejecutando import-db.bat...");
    execSync(path.join(__dirname, "../import-db.bat"), { stdio: "inherit" });
  } else {
    console.log("Detectado Linux/Mac. Ejecutando import-db.sh...");
    execSync("bash " + path.join(__dirname, "../import-db.sh"), { stdio: "inherit" });
  }
} catch (err) {
  console.error("[ERROR] Falló la importación de la base de datos:", err.message);
  process.exit(1);
}