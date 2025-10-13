# Guía de Deployment

Esta guía proporciona instrucciones detalladas para desplegar el portafolio en diferentes plataformas.

## 📋 Tabla de Contenidos

- [Deployment en Ubuntu/Rocky Linux](#deployment-en-ubunturocky-linux)
- [Deployment en Vercel](#deployment-en-vercel)
- [Deployment en Netlify](#deployment-en-netlify)
- [Configuración de Dominio](#configuración-de-dominio)
- [SSL/HTTPS](#sslhttps)

---

## 🐧 Deployment en Ubuntu/Rocky Linux

### Prerrequisitos

- Servidor Ubuntu 20.04+ o Rocky Linux 8+
- Acceso root o sudo
- Nginx instalado
- Node.js y npm instalados

### Paso 1: Preparar el Servidor

```bash
# Actualizar paquetes
sudo apt update && sudo apt upgrade -y  # Ubuntu
# o
sudo dnf update -y  # Rocky Linux

# Instalar Nginx (si no está instalado)
sudo apt install nginx -y  # Ubuntu
# o
sudo dnf install nginx -y  # Rocky Linux

# Instalar Node.js (si no está instalado)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y  # Ubuntu
# o
sudo dnf module enable nodejs:18 -y  # Rocky Linux
sudo dnf install nodejs -y
```

### Paso 2: Construir el Proyecto

```bash
# En tu máquina local
cd PortafolioDavid
npm install
npm run build
```

### Paso 3: Subir Archivos al Servidor

```bash
# Crear directorio en el servidor
ssh usuario@tu-servidor
sudo mkdir -p /var/www/portafolio
sudo chown -R $USER:$USER /var/www/portafolio

# Desde tu máquina local, copiar archivos
scp -r dist/* usuario@tu-servidor:/var/www/portafolio/
```

### Paso 4: Configurar Nginx

```bash
# En el servidor
sudo nano /etc/nginx/sites-available/portafolio

# Copiar contenido del archivo nginx.conf incluido en el proyecto
# Guardar y cerrar (Ctrl+X, Y, Enter)

# Crear enlace simbólico
sudo ln -s /etc/nginx/sites-available/portafolio /etc/nginx/sites-enabled/

# Verificar configuración
sudo nginx -t

# Recargar Nginx
sudo systemctl reload nginx
```

### Paso 5: Configurar Firewall

```bash
# UFW (Ubuntu)
sudo ufw allow 'Nginx Full'
sudo ufw enable

# Firewalld (Rocky Linux)
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### Paso 6: Verificar

Visita `http://tu-servidor-ip` en tu navegador.

---

## ☁️ Deployment en Vercel

### Método 1: Usando la Interfaz Web

1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Vercel detectará automáticamente Vite
5. Haz clic en "Deploy"

### Método 2: Usando CLI

```bash
# Instalar Vercel CLI
npm install -g vercel

# Desde el directorio del proyecto
vercel

# Seguir las instrucciones interactivas

# Para producción
vercel --prod
```

### Configuración Personalizada

Si necesitas configurar algo específico, crea `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install"
}
```

---

## 🎨 Deployment en Netlify

### Método 1: Drag & Drop

1. Construye el proyecto: `npm run build`
2. Ve a [netlify.com](https://netlify.com)
3. Arrastra la carpeta `dist` a la interfaz de Netlify

### Método 2: GitHub Integration

1. Ve a [netlify.com](https://netlify.com)
2. Haz clic en "New site from Git"
3. Conecta tu repositorio de GitHub
4. Configura:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Haz clic en "Deploy site"

### Método 3: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Inicializar
netlify init

# Deploy
netlify deploy --prod
```

### Archivo de Configuración

Crea `netlify.toml` en la raíz:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🌐 Configuración de Dominio

### Para Nginx (Ubuntu/Rocky Linux)

1. **Comprar/tener un dominio**
2. **Configurar DNS** - Añade un registro A:
   ```
   Tipo: A
   Host: @
   Valor: IP_de_tu_servidor
   TTL: 3600
   ```

3. **Actualizar Nginx**:
   ```bash
   sudo nano /etc/nginx/sites-available/portafolio
   # Cambiar server_name a tu dominio
   server_name tu-dominio.com www.tu-dominio.com;
   
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Para Vercel

1. Ve a tu proyecto en Vercel
2. Settings > Domains
3. Añade tu dominio
4. Configura los registros DNS según las instrucciones de Vercel

### Para Netlify

1. Ve a tu sitio en Netlify
2. Domain settings > Add custom domain
3. Sigue las instrucciones para configurar DNS

---

## 🔒 SSL/HTTPS

### Opción 1: Let's Encrypt (Nginx)

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y  # Ubuntu
# o
sudo dnf install certbot python3-certbot-nginx -y  # Rocky Linux

# Obtener certificado
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# Verificar renovación automática
sudo certbot renew --dry-run
```

### Opción 2: Vercel/Netlify

Vercel y Netlify proporcionan SSL automático y gratuito. No se requiere configuración adicional.

---

## 🔄 Actualización del Sitio

### Nginx

```bash
# Reconstruir localmente
npm run build

# Subir archivos actualizados
scp -r dist/* usuario@tu-servidor:/var/www/portafolio/
```

### Vercel

```bash
# Con Git
git push origin main

# O manualmente
vercel --prod
```

### Netlify

```bash
# Con Git
git push origin main

# O manualmente
netlify deploy --prod
```

---

## 📊 Monitoreo

### Nginx Logs

```bash
# Ver logs de acceso
sudo tail -f /var/log/nginx/portafolio-access.log

# Ver logs de error
sudo tail -f /var/log/nginx/portafolio-error.log
```

### Analytics

Considera añadir:
- Google Analytics
- Vercel Analytics
- Netlify Analytics

---

## 🐛 Troubleshooting

### Problema: 404 en rutas de React

**Solución**: Asegúrate de que Nginx o tu plataforma redirija todas las rutas a `index.html`.

### Problema: Estilos no cargan

**Solución**: Verifica que la ruta base en `vite.config.js` sea correcta:
```js
export default defineConfig({
  base: '/',
  // ...
})
```

### Problema: Permisos en Nginx

**Solución**:
```bash
sudo chown -R www-data:www-data /var/www/portafolio
sudo chmod -R 755 /var/www/portafolio
```

---

## 📞 Soporte

Si encuentras problemas durante el deployment:
1. Revisa los logs del servidor
2. Verifica la configuración de DNS
3. Asegúrate de que todos los puertos estén abiertos
4. Consulta la documentación oficial de tu plataforma

---

**¡Buena suerte con tu deployment! 🚀**

