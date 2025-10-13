# Guía de Inicio Rápido 🚀

## Instalación en 3 pasos

### 1️⃣ Instalar dependencias
```bash
npm install
```

### 2️⃣ Iniciar servidor de desarrollo
```bash
npm run dev
```

### 3️⃣ Abrir en el navegador
```
http://localhost:3000
```

---

## 📝 Personalización Rápida

### Cambiar tu información personal

1. **Nombre y título** → `src/components/Hero.jsx` (líneas 30-40)
2. **Proyectos** → `src/components/Projects.jsx` (líneas 8-70)
3. **Habilidades** → `src/components/Skills.jsx` (líneas 8-50)
4. **Email y redes** → Buscar y reemplazar:
   - `tu-email@example.com`
   - `https://github.com`
   - `https://linkedin.com`

### Cambiar colores

Edita `src/styles/index.css` líneas 9-15:
```css
--primary-blue: #2563eb;  /* Color principal */
--primary-blue-dark: #1e40af;  /* Hover effects */
```

---

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos optimizados estarán en la carpeta `dist/`

---

## 🚀 Deploy Rápido

### Vercel (Más Rápido)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Arrastra carpeta 'dist' a netlify.com
```

---

## 📁 Archivos Importantes

- `src/components/` → Todos los componentes React
- `src/styles/` → Todos los estilos CSS
- `src/App.jsx` → Componente principal
- `package.json` → Dependencias del proyecto

---

## 🆘 Problemas Comunes

**Error: Puerto 3000 ocupado**
```bash
# Cambiar puerto en vite.config.js línea 8
port: 3001
```

**Error: Módulos no encontrados**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build falla**
```bash
npm cache clean --force
npm install
npm run build
```

---

## 📖 Documentación Completa

Para más detalles:
- Ver `README.md` → Documentación completa
- Ver `DEPLOY.md` → Guías de deployment detalladas

---

**¡Listo para empezar! 💪**

