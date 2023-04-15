// Obtén la referencia al elemento de la pelota en el DOM
var pelota = document.querySelector('.pelota');

// Definir las variables para la posición y velocidad de la pelota
var posX = 0;
var posY = 0;
var velocidadX = 5;
var velocidadY = 5;

// Función para actualizar la posición de la pelota y hacer que rebote
function actualizarPelota() {
    // Actualizar la posición de la pelota en función de la velocidad
    posX += velocidadX;
    posY += velocidadY;

    // Obtén el ancho y alto de la ventana del navegador
    var anchoVentana = window.innerWidth;
    var altoVentana = window.innerHeight;

    // Comprobar si la pelota choca con los bordes verticales
    if (posX <= 0 || posX + pelota.offsetWidth >= anchoVentana) {
        velocidadX = -velocidadX;
    }

    // Comprobar si la pelota choca con los bordes horizontales
    if (posY <= 0 || posY + pelota.offsetHeight >= altoVentana) {
        velocidadY = -velocidadY;
    }

    // Actualizar la posición de la pelota en el DOM
    pelota.style.left = posX + 'px';
    pelota.style.top = posY + 'px';

    // Llamar a la función de actualización de la pelota en el siguiente cuadro de animación
    requestAnimationFrame(actualizarPelota);
}

// Iniciar la animación de la pelota
actualizarPelota();