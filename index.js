// Esperar a que el documento esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtener todas las secciones que tienen la clase "fade-in"
    const sections = document.querySelectorAll('.fade-in');

    // Función para comprobar el scroll
    function checkScroll() {
        // Recorrer cada sección
        sections.forEach(section => {
            // Obtener la posición de la sección en la ventana
            const rect = section.getBoundingClientRect();
            // Comprobar si la sección está en la vista
            if (rect.top < window.innerHeight && rect.bottom >= 0) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    // Comprobar el scroll al cargar la página
    checkScroll();

    // Añadir evento de scroll
    window.addEventListener('scroll', checkScroll);
});
