// Seleccionar el objeto a animar
var myObject = document.getElementById("myObject");

// Evento de clic en el objeto
myObject.addEventListener("click", function() {
  // Cambiar la opacidad del objeto
  if (myObject.style.opacity === "1") {
    myObject.style.opacity = "0.5"; // Hacer más transparente (opacidad 0.5)
  } else {
    myObject.style.opacity = "1"; // Hacer menos transparente (opacidad 1)
  }
});