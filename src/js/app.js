
document.addEventListener('DOMContentLoaded', () => {

    // reproducirMusica()
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
}) 
//!         MANTENER BARRA DE NAVEGACION
function navegacionFija () {
    const header        = document.querySelector('.header')
    const sobreFestival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', () => {
        if (sobreFestival.getBoundingClientRect().bottom < 200) {
            header.classList.add('fixed')

        }else {
            header.classList.remove('fixed')
        }
    })
}
//!         GALERIA
function crearGaleria() {

    const numero_imagenes   = 20
    const galeria           = document.querySelector('.galeria-imagenes')


    for(let i =1; i <= numero_imagenes; i++) {

        const imagen    = document.createElement('PICTURE')
        imagen.innerHTML = `
            <source srcset="build/img/gallery/thumb/${i}.avif" type="image/avif">
            <source srcset="build/img/gallery/thumb/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/gallery/thumb/${i}.jpg" alt="imagen galeria">
            `;
        // imagen.loading  = 'lazy'        //* El orden es importante
        // imagen.width    = "300"
        // imagen.height   = "200"
        // imagen.src      = `src/img/gallery/thumb/${i}.jpg`
        // imagen.alt      = 'Imagen Galería'
        
        // console.log(imagen)

//!      EVENT HANDLER
        imagen.onclick  = () => {
            mostrarImagen(i)
        }
        galeria.appendChild(imagen)
    }
}
function mostrarImagen (i) {
    const imagen        = document.createElement('PICTURE')
        imagen.innerHTML = `
            <source srcset="build/img/gallery/djs/${i}.avif" type="image/avif">
            <source srcset="build/img/gallery/djs/${i}.webp" type="image/webp">
            <img loading="lazy" width="200" height="300" src="build/img/gallery/djs/${i}.jpg" alt="imagen galeria">
        `;

        // imagen.src      = `src/img/gallery/djs/${i}.jpg`
        // imagen.alt      = 'Imagen Galería'


    //!     GENERAR FORMA
    const forma         = document.createElement('DIV')
    forma.classList.add('forma')
    forma.onclick       = cerrarForma

    //!     BOTON CERRAR
    const cerrarFormaBtn = document.createElement('BUTTON')
    cerrarFormaBtn.textContent = 'X'
    cerrarFormaBtn.classList.add('btn-cerrar')
    forma.onclick = cerrarForma

    forma.appendChild(imagen)
    forma.appendChild(cerrarFormaBtn)


    //!     AGREGAR AL HTML
    const body          = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(forma)
}
function cerrarForma () {
    const forma         = document.querySelector('.forma')
    forma.classList.add ('fade-out')

    setTimeout(() => {
        forma?.remove()
        const body      = document.querySelector('body')
            body.classList.remove('overflow-hidden')
    }, 800)
    
}
//!         RESALTA ENLACE
function resaltarEnlace () {
    document.addEventListener('scroll', () => {
        const sections  = document.querySelectorAll('section')
        const navLinks  = document.querySelectorAll('.navegacion-principal a')

        let actual      = ''
        sections.forEach( section => {
            const sectionTop    = section.offsetTop
            const sectionHeight = section.clientHeight

            // console.log(sectionTop)

            if(window.scrollY >= (sectionTop  - sectionHeight / 3 )) {
                actual = section.id
                // console.log(section.id)
            }
        })
        navLinks.forEach(link => {
            link.classList.remove('active')
            if(link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}
//!         NAVEGADOR SCROLL
function scrollNav () {
    const navLinks  = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section       = document.querySelector(sectionScroll)

            section.scrollIntoView({behavior: 'smooth'})

            // console.log(section)

        })
    })
}
// !         REPRODUCTOR MUSICA
// function reproducirMusica() {
//     const audio = document.querySelector('.audio audio');
//     if (!audio) return;
//     audio.play().catch(() => {

//         const playAlClic = () => {
//             if (audio.paused) { 
//                 audio.play();
//             }
    
//             document.removeEventListener('click', playAlClic);
//         };
        
//         document.addEventListener('click', playAlClic);
//     });
// }
