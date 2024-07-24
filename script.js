document.addEventListener("DOMContentLoaded", function() {
    //smooth scrolling
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    //toggle navigation menu for mobile
    document.getElementById("menu-toggle").addEventListener("click", function() {
        const navLinks = document.getElementById("nav-links");
        navLinks.classList.toggle("active");
    });

    //scroll to about me section when button is clicked
    document.getElementById("scroll-to-about").addEventListener("click", function() {
        document.getElementById("about").scrollIntoView({ behavior: "smooth" });
    });
});
