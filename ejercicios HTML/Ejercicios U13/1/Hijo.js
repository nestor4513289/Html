// Selecciona el elemento existente al que queremos añadir un nodo hijo
const elementoPadre = document.getElementById('elementoPadre');

// Crea un nuevo nodo de elemento
const nuevoElementoHijo = document.createElement('p');
nuevoElementoHijo.textContent = 'Este es el nuevo nodo hijo añadido con JavaScript.';

// Añade el nuevo nodo hijo al elemento existente como su hijo
elementoPadre.appendChild(nuevoElementoHijo);