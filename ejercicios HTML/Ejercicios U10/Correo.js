// Función para validar el correo electrónico
function validarCorreoElectronico(correo) {
    // Expresión regular para validar el correo electrónico
    var expresionRegular = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    // Verificar si el correo cumple con la expresión regular
    if (expresionRegular.test(correo)) {
      return "El correo electrónico es válido.";
    } else {
      return "El correo electrónico no es válido.";
    }
  }
  
  // Ejemplo de uso
  var correo1 = "usuario@dominio.com";
  var correo2 = "usuario@dominio";
  var correo3 = "usuario@dominio.";
  var correo4 = "usuario@dominio123";
  
  console.log(validarCorreoElectronico(correo1)); // El correo electrónico es válido.
  console.log(validarCorreoElectronico(correo2)); // El correo electrónico no es válido.
  console.log(validarCorreoElectronico(correo3)); // El correo electrónico no es válido.
  console.log(validarCorreoElectronico(correo4)); // El correo electrónico es válido.
  