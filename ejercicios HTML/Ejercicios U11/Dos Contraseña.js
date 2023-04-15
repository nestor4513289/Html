// Obtener referencias a los elementos del DOM
var passwordField1 = document.getElementById("passwordField1");
var passwordField2 = document.getElementById("passwordField2");
var errorText = document.getElementById("errorText");
var submitButton = document.getElementById("submitButton");

// Agregar un evento de escucha al botón de envío
submitButton.addEventListener("click", function(event) {
  // Obtener los valores de los campos de contraseña
  var password1 = passwordField1.value;
  var password2 = passwordField2.value;
  
  // Validar si las contraseñas son iguales
  if (password1 === password2) {
    // Las contraseñas son iguales, mostrar mensaje de éxito
    errorText.style.display = "none";
    alert("Las contraseñas coinciden.");
  } else {
    // Las contraseñas no son iguales, mostrar mensaje de error
    errorText.style.display = "block";
    errorText.textContent = "Las contraseñas no coinciden. Por favor, inténtalo de nuevo.";
    // Prevenir el envío del formulario
    event.preventDefault();
  }
});