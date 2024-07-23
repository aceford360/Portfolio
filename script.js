document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const banner = document.querySelector('header.banner');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        banner.classList.toggle('expanded');
    });
});
