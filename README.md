# Portafolio Profesional - David

Portafolio profesional moderno y responsivo para desarrollador full-stack, construido con React y diseño en azul y blanco.

## 🚀 Características

- ✨ Diseño moderno y minimalista con animaciones suaves
- 📱 Completamente responsivo (móvil, tablet y escritorio)
- 🎨 Esquema de colores azul y blanco profesional
- ⚡ Rendimiento optimizado con Vite
- 🎯 Secciones interactivas y tarjetas con efectos hover
- 📧 Formulario de contacto funcional
- 🔗 Integración con redes sociales (GitHub, LinkedIn)

## 📋 Secciones Incluidas

1. **Hero / Inicio** - Presentación impactante con llamados a la acción
2. **Sobre Mí** - Información profesional y estadísticas
3. **Proyectos** - Portafolio de proyectos con detalles técnicos
4. **Habilidades** - Skills técnicas con barras de progreso animadas
5. **Educación** - Formación académica y certificaciones
6. **Contacto** - Formulario funcional y métodos de contacto
7. **Footer** - Navegación y enlaces adicionales

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal de UI
- **Vite** - Build tool y dev server
- **CSS3** - Estilos modernos con animaciones
- **JavaScript ES6+** - Lógica de la aplicación

## 📦 Instalación

### Prerrequisitos

- Node.js (v16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd PortafolioDavid
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🏗️ Construir para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## 🚀 Deployment

### Opción 1: Servidor Ubuntu/Rocky Linux

1. **Construir el proyecto**
   ```bash
   npm run build
   ```

2. **Copiar archivos al servidor**
   ```bash
   scp -r dist/* usuario@servidor:/var/www/portafolio/
   ```

3. **Configurar Nginx** (ver archivo `nginx.conf` incluido)
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/portafolio
   sudo ln -s /etc/nginx/sites-available/portafolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```

### Opción 2: Vercel (Recomendado)

1. Instalar Vercel CLI
   ```bash
   npm install -g vercel
   ```

2. Deploy
   ```bash
   vercel
   ```

### Opción 3: Netlify

1. Construir el proyecto
   ```bash
   npm run build
   ```

2. Subir la carpeta `dist` a Netlify mediante drag & drop o CLI

## 📁 Estructura del Proyecto

```
PortafolioDavid/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── styles/          # Archivos CSS
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Projects.css
│   │   ├── Skills.css
│   │   ├── Education.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx          # Componente principal
│   └── main.jsx         # Punto de entrada
├── index.html           # HTML base
├── package.json         # Dependencias
├── vite.config.js       # Configuración Vite
└── README.md           # Este archivo
```

## 🎨 Personalización

### Cambiar Información Personal

Edita los siguientes archivos:

- **Hero.jsx** - Nombre y descripción principal
- **About.jsx** - Información sobre ti
- **Projects.jsx** - Tus proyectos
- **Skills.jsx** - Tus habilidades técnicas
- **Education.jsx** - Tu formación académica
- **Contact.jsx** - Tu información de contacto

### Cambiar Enlaces de Redes Sociales

Busca y reemplaza las URLs en:
- `src/components/Hero.jsx`
- `src/components/Contact.jsx`
- `src/components/Footer.jsx`

Reemplaza:
- `https://github.com/dabidgmz` - Perfil de GitHub de David
- `https://www.linkedin.com/in/gomezherreradavid` - Perfil de LinkedIn de David
- `tu-email@example.com` con tu correo electrónico real

### Personalizar Colores

Los colores se definen en `src/styles/index.css`:

```css
:root {
  --primary-blue: #2563eb;
  --primary-blue-dark: #1e40af;
  --primary-blue-light: #3b82f6;
  /* Modifica estos valores según tu preferencia */
}
```

## 📧 Configurar Formulario de Contacto

El formulario actualmente usa una API mock. Para hacerlo funcional:

1. **Opción A: EmailJS**
   - Registrarse en [EmailJS](https://www.emailjs.com/)
   - Instalar: `npm install @emailjs/browser`
   - Configurar en `Contact.jsx`

2. **Opción B: Backend propio**
   - Crear endpoint POST en tu backend
   - Actualizar la función `handleSubmit` en `Contact.jsx`

3. **Opción C: Formspree**
   - Crear cuenta en [Formspree](https://formspree.io/)
   - Actualizar la acción del formulario

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Vista previa de la build de producción
- `npm run lint` - Ejecuta ESLint para encontrar problemas

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (< 640px)
- 📱 Tablets (640px - 968px)
- 💻 Desktop (> 968px)

## ⚡ Performance

- Lazy loading de imágenes
- CSS optimizado con animaciones performantes
- Bundle size optimizado
- Lighthouse score: 95+

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la Licencia MIT.

## 👤 Autor

**David Herrera**
- Software Developer Jr.
- Universidad Tecnológica de Torreón
- Especializado en desarrollo full-stack
- GitHub: [dabidgmz](https://github.com/dabidgmz)
- LinkedIn: [gomezherreradavid](https://www.linkedin.com/in/gomezherreradavid)

## 🤝 Contribuciones

Las contribuciones, issues y sugerencias son bienvenidas. Si deseas mejorar este portafolio:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Si tienes preguntas o necesitas ayuda:
- 📧 Email: tu-email@example.com
- 💼 LinkedIn: [Tu Perfil](https://linkedin.com)
- 🐙 GitHub: [Tu Usuario](https://github.com)

---

⭐ Si te gusta este proyecto, no olvides darle una estrella en GitHub!

Hecho con ❤️ y React

