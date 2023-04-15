// Función para validar la longitud mínima de la contraseña
function validarLongitudContrasena() {
    // Obtener el valor del campo de contraseña
    var contrasena = document.getElementById("contrasena").value;
    
    // Verificar si la contraseña cumple con la longitud mínima de 8 caracteres
    if (contrasena.length < 8) {
      // Mostrar un mensaje de error
      document.getElementById("error-contrasena").innerHTML = "La contraseña debe tener al menos 8 caracteres";
      return false;
    } else {
      // Limpiar el mensaje de error
      document.getElementById("error-contrasena").innerHTML = "";
      return true;
    }
  }
  
  // Función para reiniciar el mensaje de error cuando se modifica el campo de contraseña
  function reiniciarErrorContrasena() {
    document.getElementById("error-contrasena").innerHTML = "";
  }