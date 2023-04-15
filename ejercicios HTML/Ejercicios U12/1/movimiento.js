var myObject = document.getElementById('myObject');
var posX = 0;
var posY = 0;
var step = 10; // Cambia este valor para ajustar la velocidad del movimiento

function moveObject(direction) {
    switch (direction) {
        case 'left':
            posX -= step;
            break;
        case 'right':
            posX += step;
            break;
        case 'up':
            posY -= step;
            break;
        case 'down':
            posY += step;
            break;
        default:
            break;
    }
    myObject.style.top = posY + 'px';
    myObject.style.left = posX + 'px';
}

document.addEventListener('keydown', function (event) {
    var direction = '';
    switch (event.keyCode) {
        case 37:
            direction = 'left';
            break;
        case 38:
            direction = 'up';
            break;
        case 39:
            direction = 'right';
            break;
        case 40:
            direction = 'down';
            break;
        default:
            break;
    }
    if (direction !== '') {
        moveObject(direction);
    }
});