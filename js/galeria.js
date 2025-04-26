// seleccionamos el botón y el menú
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');


// añadimos el evento click para mostrar/ocultar el menú
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
