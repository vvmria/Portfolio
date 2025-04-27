// seleccionamos el botón y el menú
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');


// añadimos el evento click para mostrar/ocultar el menú
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Acordeon
const headers = document.querySelectorAll('.curriculum__header');
const items = document.querySelectorAll('.curriculum-item');

headers.forEach((header) => {
    header.addEventListener('click', () => {
        const item = header.closest('.curriculum-item');
        items.forEach((item) => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});