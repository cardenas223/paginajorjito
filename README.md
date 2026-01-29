# JANU - Página de Sorteos y Rifas

🎰 Página web moderna y atractiva de sorteos y rifas para la marca JANU. ¡Gana el auto de tus sueños!

## 🚀 Características

- **Diseño Moderno y Responsive**: Adaptado para todos los dispositivos (mobile-first)
- **Contador Regresivo en Tiempo Real**: Muestra el tiempo restante hasta el próximo sorteo
- **Sorteos Activos**: Grid de tarjetas con información detallada de cada sorteo
- **Animaciones Suaves**: Efectos de hover y animaciones al hacer scroll
- **FAQ Interactivo**: Acordeón con preguntas frecuentes
- **Navegación Intuitiva**: Menú sticky y smooth scroll entre secciones
- **Optimizado para SEO**: HTML5 semántico y metadatos apropiados

## 🎨 Paleta de Colores

- **Dorado/Amarillo**: `#FFD700`, `#FDB927` - Transmite premios y lujo
- **Negro/Gris Oscuro**: `#0A0A0A`, `#1A1A1A` - Elegancia y sofisticación
- **Blanco**: `#FFFFFF` - Claridad y contraste

## 📋 Estructura de la Página

### 1. Header/Navegación
- Logo JANU estilizado con degradado dorado
- Menú de navegación con smooth scroll
- Botón CTA "Comprar Boletos"
- Menú hamburguesa para dispositivos móviles

### 2. Hero Section
- Imagen de fondo de auto premium
- Título principal llamativo
- Contador regresivo funcional hasta el próximo sorteo
- Botón CTA con animación de pulso

### 3. Sorteos Activos
- Grid responsive con tarjetas de sorteos
- Cada tarjeta incluye:
  - Imagen del auto
  - Nombre del sorteo
  - Precio por boleto
  - Barra de progreso de boletos vendidos
  - Badge de estado (Últimos boletos, Hot, Nuevo)
  - Botón "Ver Detalles"

### 4. Cómo Participar
- 4 pasos ilustrados con iconos
- Diseño con tarjetas numeradas
- Efectos hover con borde dorado

### 5. Ganadores
- Grid de testimonios de ganadores anteriores
- Fotos, nombres y calificaciones con estrellas
- Efectos de hover elegantes

### 6. Preguntas Frecuentes (FAQ)
- Acordeón interactivo con 6 preguntas comunes
- Animación suave de apertura/cierre
- Solo una pregunta abierta a la vez

### 7. Footer
- Logo y descripción
- Enlaces rápidos a secciones
- Iconos de redes sociales (Facebook, Instagram, Twitter, YouTube, TikTok)
- Información de contacto con iconos
- Copyright dinámico con año actual

### 8. Extras
- Botón "Volver arriba" con scroll suave
- Animaciones al hacer scroll (fade-in)
- Header con fondo dinámico al hacer scroll

## 💻 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Variables CSS para colores reutilizables
  - Flexbox y CSS Grid para layouts
  - Animaciones y transiciones suaves
  - Media queries para diseño responsive
  - Degradados lineales para efectos premium
- **JavaScript Vanilla**:
  - Contador regresivo funcional
  - Toggle de menú móvil
  - Acordeón FAQ
  - Smooth scroll entre secciones
  - Intersection Observer para animaciones
  - Botón scroll to top
- **Fuentes**:
  - Google Fonts: Poppins (texto) y Bebas Neue (títulos)
- **Iconos**:
  - Font Awesome 6.4.0
- **Imágenes**:
  - Unsplash (placeholders de alta calidad)

## 📂 Estructura de Archivos

```
/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   └── main.js         # JavaScript funcional
└── README.md           # Documentación
```

## 🚀 Cómo Usar

1. Clona el repositorio:
   ```bash
   git clone https://github.com/cardenas223/paginajorjito.git
   ```

2. Abre el archivo `index.html` en tu navegador:
   ```bash
   cd paginajorjito
   open index.html
   ```

3. ¡Listo! La página se cargará con todas las funcionalidades.

## 📱 Responsive Design

La página está optimizada para:
- **Desktop**: 1200px+
- **Tablet**: 768px - 992px
- **Mobile**: 320px - 767px

Utiliza un enfoque mobile-first con breakpoints apropiados.

## ⚡ Optimizaciones

- **Rendimiento**: Carga de fuentes e iconos desde CDN
- **SEO**: Meta tags, descripción y título optimizados
- **Accesibilidad**: Atributos `alt` en imágenes, `aria-label` en botones
- **UX**: Animaciones sutiles que no distraen
- **Código Limpio**: Comentarios y estructura organizada

## 🎯 Inspiración

El diseño está inspirado en páginas exitosas de sorteos/rifas como jorgitoluna.com, enfocándose en:
- Sensación de urgencia (contadores, badges)
- Llamadas a la acción claras y visibles
- Elementos de confianza (testimonios, ganadores)
- Diseño premium y profesional
- Experiencia de usuario fluida

## 🔧 Personalización

Para personalizar la página:

1. **Colores**: Modifica las variables CSS en `:root` en `styles.css`
2. **Contenido**: Edita el texto directamente en `index.html`
3. **Imágenes**: Reemplaza las URLs de Unsplash con tus propias imágenes
4. **Fecha del Sorteo**: Ajusta la fecha objetivo en `main.js` (función `updateCountdown`)
5. **Funcionalidad de Botones**: Modifica los event listeners en `main.js`

## 📄 Licencia

© 2026 JANU - Todos los derechos reservados.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias y mejoras.

---

Desarrollado con ❤️ para JANU