// Obtenemos el elemento padre y el nodo hijo a eliminar
var padre = document.getElementById("lista");
var nodoEliminar = document.getElementById("elemento-eliminar");

// Verificamos que el elemento padre y el nodo hijo existan
if (padre && nodoEliminar) {
    // Eliminamos el nodo hijo del elemento padre
    padre.removeChild(nodoEliminar);
} else {
    console.log("El elemento padre o el nodo hijo no existen.");
}