// Oración de ejemplo
var oracion = "Lorem ipsum dolor sit amet, consectetur adipiscing elit";

// Palabra a buscar
var palabraBuscar = "/ipsum/";

// Palabra de reemplazo
var palabraReemplazo = "dolor";

// Utilizamos expresiones regulares para hacer el reemplazo globalmente
var expresionRegular = new RegExp(palabraBuscar, "g");
var oracionResultado = oracion.replace(expresionRegular, palabraReemplazo);

// Imprimimos la oración original y la oración modificada
console.log("Oración original: " + oracion);
console.log("Oración modificada: " + oracionResultado);
