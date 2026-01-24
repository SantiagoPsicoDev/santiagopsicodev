// Obtener el botón
const btnSubir = document.getElementById("btn-subir");

// Mostrar el botón cuando el usuario baje 300px
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btnSubir.style.display = "block";
    } else {
        btnSubir.style.display = "none";
    }
};

// Al hacer clic, volver arriba suavemente
btnSubir.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};
// Efecto de Escritura
const tituloAnimado = document.getElementById('titulo-animado');
const texto = "Programando la mente, diseñando el futuro.";
let i = 0;
let velocidad = 70; // Velocidad de escritura en milisegundos

function typeWriter() {
    if (i < texto.length) {
        tituloAnimado.innerHTML += texto.charAt(i);
        i++;
        setTimeout(typeWriter, velocidad);
    }
}

// Iniciar el efecto cuando la página cargue
window.addEventListener('load', typeWriter);