// Wait for the DOM to load completely
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Toggle the navigation menu visibility
    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });
});
