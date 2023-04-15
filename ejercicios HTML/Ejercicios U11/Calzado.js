// Función para validar el campo vacío
function validarCampoVacio() {
    // Obtener el valor del campo del formulario
    var campo = document.getElementById('campo').value;
    
    // Verificar si el campo está vacío
    if (campo === '') {
      alert('El campo no puede estar vacío'); // Mostrar mensaje de error
      return false; // Devolver falso para evitar el envío del formulario
    }
    
    return true; // Devolver verdadero si el campo no está vacío
  }
  
  // Asignar la función de validación al evento de envío del formulario
  document.getElementById('formulario').addEventListener('submit', function(event) {
    if (!validarCampoVacio()) {
      event.preventDefault(); // Evitar el envío del formulario si la validación falla
    }
  });
  