document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000); // Tiempo para mostrar el preloader (2 segundos)
});


document.getElementById('copyEmail').addEventListener('click', function () {
    const email = 'cruzmmanuel@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Correo copiado al portapapeles: ' + email);
    }).catch(err => {
        console.error('Error al copiar el correo:', err);
    });
});