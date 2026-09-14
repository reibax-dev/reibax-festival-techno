# 🎵 DJ Music Festival - Sitio Web Interactivo y Automatizado

[![HTML5](https://shields.io)](https://mozilla.org)
[![Sass](https://shields.io)](https://sass-lang.com)
[![JavaScript](https://shields.io)](https://mozilla.org)
[![Gulp](https://shields.io)](https://gulpjs.com)

¡Bienvenidos a mi primer repositorio avanzado de desarrollo Frontend! Este proyecto representa un paso clave en mi aprendizaje, siendo el primero donde integro elementos multimedia dinámicos como **Video de fondo** y un **Reproductor de Audio nativo**, controlados y optimizados mediante flujos de desarrollo modernos.

🌐 **Sitio web en producción:** 

*   https://reibax-dev.github.io/reibax-festival-techno/

---

## 🚀 Características Principales

*   **Primer Sistema Multimedia:** Integración de video en bucle para la sección principal y control de audio controlado estrictamente por la interacción del usuario.
*   **Arquitectura CSS Escalable:** Estructura modular construida con Sass (SCSS) aplicando un diseño responsive adaptable a móviles y escritorios.
*   **Interactividad con JavaScript Nativo:** Gestión inteligente de eventos del DOM sin dependencias externas.

---

## 🧠 Arquitectura de Código: JavaScript

El archivo `src/js/app.js` maneja toda la experiencia del usuario a través de funciones modulares cargadas de forma segura bajo el evento `DOMContentLoaded`:

1.  **`navegacionFija()`**: Implementa un observador del scroll (`window.addEventListener('scroll')`) que añade la clase `.fixed` al menú de navegación cuando el usuario pasa la sección principal.
2.  **`crearGaleria()` y `mostrarImagen()`**: Genera dinámicamente un bucle para insertar elementos HTML `<picture>` con carga (`loading="lazy"`). Al hacer clic en un DJ, se genera una ventana modal interactiva con transiciones de salida (`fade-out`).
3.  **`resaltarEnlace()`**: Analiza la posición del scroll vertical en tiempo real para iluminar automáticamente la pestaña del menú que corresponde a la sección visible en pantalla.
4.  **`scrollNav()`**: Intercepta los clics en los enlaces de navegación (`e.preventDefault()`) para ejecutar un desplazamiento suave (`scrollIntoView({behavior: 'smooth'})`) entre secciones.

---

## 🛠️ Pipeline de Automatización: Gulp & Sharp

El entorno de desarrollo se gestiona a través de un `gulpfile.js` avanzado que automatiza la optimización de recursos mediante Node.js:

*   **Compilación y Minificación CSS (`css`)**: Transpila los archivos jerárquicos de Sass a CSS, inyecta `sourcemaps` para depuración y comprime el archivo final usando `cssnano`.
*   **Minificación JS (`js`)**: Utiliza `gulp-terser` para reducir el peso y optimizar el código JavaScript final en la carpeta de distribución (`build/`).
*   **Recorte Inteligente (`crop`)**: Procesa las imágenes de los DJs mediante la librería **`sharp`**, recortándolas automáticamente desde el centro a un tamaño estandarizado (250x180 px) para las miniaturas.
*   **Optimización Multiformato (`imagenes`)**: Lee imágenes en formatos pesados (`.jpg`, `.png`) y las clona de manera masiva en tres variantes distintas: **JPEG optimizado**, **WebP** y **AVIF** para garantizar la máxima velocidad de carga en el navegador.

```javascript
// Secuencia de tareas en producción ejecutada por Gulp
export default series( crop, js, css, imagenes, dev )
```

---

## 💻 Instalación y Uso Local

1. Clona el repositorio:
   ```bash
   git clone https://github.com
   ```
2. Instala las dependencias de desarrollo (`devDependencies` de package.json):
   ```bash
   npm install
   ```
3. Ejecuta el modo observador en tiempo real:
   ```bash
   npm run dev
   ```

---
Diseñado y desarrollado por **Reibax** © 2026.
