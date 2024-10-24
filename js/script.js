document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('img');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        nav.classList.toggle('active');
        logo.classList.toggle('hidden');
    })
})
