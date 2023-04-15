function validarEdad() {
    // Obtener el valor del campo de fecha de nacimiento
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
    // Crear un objeto de fecha con la fecha de nacimiento
    var fechaNacimientoObj = new Date(fechaNacimiento);
  
    // Obtener la fecha actual
    var fechaActual = new Date();
  
    // Calcular la diferencia de años entre la fecha actual y la fecha de nacimiento
    var edad = fechaActual.getFullYear() - fechaNacimientoObj.getFullYear();
  
    // Comparar los meses y días para determinar si ya cumplió años
    if (
      fechaActual.getMonth() < fechaNacimientoObj.getMonth() ||
      (fechaActual.getMonth() === fechaNacimientoObj.getMonth() &&
        fechaActual.getDate() < fechaNacimientoObj.getDate())
    ) {
      edad--;
    }
  
    // Comparar la edad con el límite de edad requerido (en este caso, 18 años)
    if (edad >= 18) {
      // El usuario es mayor de edad
      alert("¡Usuario mayor de edad!");
    } else {
      // El usuario es menor de edad
      alert("El usuario debe ser mayor de 18 años.");
    }
  }