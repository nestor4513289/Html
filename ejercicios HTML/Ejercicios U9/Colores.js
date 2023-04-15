// Definir el arreglo de colores
var colores = ["rojo", "azul", "verde", "amarillo", "naranja"];

// Obtener el tercer elemento del arreglo
var tercerColor = colores[2];

// Crear un elemento de párrafo en el DOM
var parrafo = document.createElement("p");

// Crear un nodo de texto con el valor del tercer elemento del arreglo
var texto = document.createTextNode("El tercer color es: " + tercerColor);

// Agregar el nodo de texto al elemento de párrafo
parrafo.appendChild(texto);

// Agregar el elemento de párrafo al cuerpo del documento
document.body.appendChild(parrafo);