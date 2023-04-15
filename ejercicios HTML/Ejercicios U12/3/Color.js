// Obtén el elemento div
var myDiv = document.getElementById("myDiv");

// Agrega un evento de click al div
myDiv.addEventListener("click", function() {
  // Genera un color aleatorio
  var randomColor = getRandomColor();
  
  // Cambia el color de fondo del div con una animación
  myDiv.style.backgroundColor = randomColor;
});

// Función para generar un color aleatorio en formato hexadecimal
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}