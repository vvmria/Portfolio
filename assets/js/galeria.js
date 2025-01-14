// Primero definimos todas las constantes y variables

// Constantes para los elementos del modal
const modal = document.getElementById("myModal");
const modalImg = document.getElementById("img01");
const caption = document.getElementById("caption");

// Handler para abrir el modal
function openModalHandler(imgElement) {
    modal.style.display = "block";
    modalImg.src = imgElement.src;
    caption.innerHTML = imgElement.alt;
}

// Handler para cerrar el modal
function closeModalHandler() {
    modal.style.display = "none";
}

// Asignación de eventos usando foreach (deberíamos hacerlo una sola vez)
window.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.portfolio__img');
    
    // Asignar el evento click a cada imagen de forma eficiente
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            openModalHandler(image);
        });
    });

    // Asignar el evento click para cerrar el modal
    modal.addEventListener('click', closeModalHandler);
});

