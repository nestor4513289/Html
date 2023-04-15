// Función para validar un formulario Ejercicio U7 3
function validarFormulario() {
    // Obtener el formulario
    var formulario = document.getElementById("miFormulario");
    
    // Obtener todos los elementos del formulario
    var elementos = formulario.elements;
    
    // Recorrer todos los elementos del formulario
    for (var i = 0; i < elementos.length; i++) {
      var elemento = elementos[i];
      
      // Verificar si el elemento es un campo de entrada de texto o un área de texto y si está vacío
      if ((elemento.type === "text" || elemento.type === "textarea") && elemento.value === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return false; // Devolver falso para evitar el envío del formulario
      }
    }
    
    // Si todos los elementos están completos, se puede enviar el formulario
    alert("El formulario se ha enviado correctamente.");
    return true;
  }