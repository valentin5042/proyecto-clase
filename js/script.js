document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('img'); // Seleccionamos el logo

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active'); // Toggle para cambiar la posición del botón
        nav.classList.toggle('active');
        logo.classList.toggle('hidden'); // Ocultamos o mostramos el logo
    });
});
