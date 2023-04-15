function validarContrasena(contrasena) {
    // Expresión regular que valida la contraseña
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).+$/;
  
    // Verificar si la contraseña cumple con la expresión regular
    if (regex.test(contrasena)) {
      return true; // La contraseña es válida
    } else {
      return false; // La contraseña no cumple con los requisitos
    }
  }
  
  // Ejemplo de uso
  const contrasena1 = "Abc123"; // Cumple con los requisitos
  const contrasena2 = "contraseña"; // No cumple con los requisitos
  const contrasena3 = "123456"; // No cumple con los requisitos
  
  console.log(validarContrasena(contrasena1)); // true
  console.log(validarContrasena(contrasena2)); // false
  console.log(validarContrasena(contrasena3)); // false
  