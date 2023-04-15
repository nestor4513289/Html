document.getElementById("mostrarBoton").addEventListener("click", function() {
    var elementoMostrado = document.getElementById("elementoMostrado");
    if (elementoMostrado.style.display === "none") {
        elementoMostrado.style.display = "block";
    } else {
        elementoMostrado.style.display = "none";
    }
});