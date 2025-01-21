

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
        const preloader = document.getElementById("preloader");
        preloader.classList.add("fade-out");

        preloader.addEventListener("transitionend", () => {
            preloader.style.display = "none";
            document.getElementById("content").style.visibility = "visible";
        });
    }, 2000);
});



// Desplazamiento suave a las secciones
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70, // Ajuste para que no quede cubierto por el navbar
            behavior: 'smooth'
        });
    });
});

// Validación del formulario de contacto (simple)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('mensaje');

    // Validación de campos vacíos
    if (!nombre.value || !email.value || !mensaje.value) {
        e.preventDefault(); // Evita el envío del formulario
        alert('Por favor, complete todos los campos.');
        return false;
    }

    // Validación del formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        e.preventDefault();
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    // Si todo es válido, el formulario se envía
    alert('Formulario enviado correctamente');
});

// Agregar animación al hacer scroll (opcional, pero interesante)
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition > sectionTop + sectionHeight / 4) {
            section.classList.add('animate');
        }
    });
});