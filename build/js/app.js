//!         MANTENER BARRA DE NAVEGACION
function navegacionFija(){const e=document.querySelector(".header"),t=document.querySelector(".sobre-festival");window.addEventListener("scroll",()=>{t.getBoundingClientRect().bottom<200?e.classList.add("fixed"):e.classList.remove("fixed")})}
//!         GALERIA
function crearGaleria(){const e=document.querySelector(".galeria-imagenes");for(let t=1;t<=20;t++){const a=document.createElement("PICTURE");a.innerHTML=`\n            <source srcset="build/img/gallery/thumb/${t}.avif" type="image/avif">\n            <source srcset="build/img/gallery/thumb/${t}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${t}.jpg" alt="imagen galeria">\n            `,
//!      EVENT HANDLER
a.onclick=()=>{mostrarImagen(t)},e.appendChild(a)}}function mostrarImagen(e){const t=document.createElement("PICTURE");t.innerHTML=`\n            <source srcset="build/img/gallery/djs/${e}.avif" type="image/avif">\n            <source srcset="build/img/gallery/djs/${e}.webp" type="image/webp">\n            <img loading="lazy" width="200" height="300" src="build/img/gallery/djs/${e}.jpg" alt="imagen galeria">\n        `;
//!     GENERAR FORMA
const a=document.createElement("DIV");a.classList.add("forma"),a.onclick=cerrarForma;
//!     BOTON CERRAR
const r=document.createElement("BUTTON");r.textContent="X",r.classList.add("btn-cerrar"),a.onclick=cerrarForma,a.appendChild(t),a.appendChild(r);
//!     AGREGAR AL HTML
const n=document.querySelector("body");n.classList.add("overflow-hidden"),n.appendChild(a)}function cerrarForma(){const e=document.querySelector(".forma");e.classList.add("fade-out"),setTimeout(()=>{e?.remove();document.querySelector("body").classList.remove("overflow-hidden")},800)}
//!         RESALTA ENLACE
function resaltarEnlace(){document.addEventListener("scroll",()=>{const e=document.querySelectorAll("section"),t=document.querySelectorAll(".navegacion-principal a");let a="";e.forEach(e=>{const t=e.offsetTop,r=e.clientHeight;window.scrollY>=t-r/3&&(a=e.id)}),t.forEach(e=>{e.classList.remove("active"),e.getAttribute("href")==="#"+a&&e.classList.add("active")})})}
//!         NAVEGADOR SCROLL
function scrollNav(){document.querySelectorAll(".navegacion-principal a").forEach(e=>{e.addEventListener("click",e=>{e.preventDefault();const t=e.target.getAttribute("href");document.querySelector(t).scrollIntoView({behavior:"smooth"})})})}document.addEventListener("DOMContentLoaded",()=>{navegacionFija(),crearGaleria(),resaltarEnlace(),scrollNav()});