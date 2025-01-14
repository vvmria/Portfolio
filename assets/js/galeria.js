// Obtener todas las imágenes
const images = document.querySelectorAll('.portfolio__img');

// Crear el lightbox (modal)
const lightbox = document.createElement('div');
lightbox.id = 'lightbox';
document.body.appendChild(lightbox);

// Crear la imagen dentro del lightbox
const lightboxImage = document.createElement('img');
lightbox.appendChild(lightboxImage);

// Agregar evento click a las imágenes
images.forEach(image => {
    image.addEventListener('click', () => {
        lightboxImage.src = image.src;  // Asignar la imagen seleccionada al lightbox
        lightbox.style.display = 'flex';  // Mostrar el lightbox
    });
});

// Cerrar el lightbox cuando se hace clic fuera de la imagen
lightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';  // Ocultar el lightbox
});

