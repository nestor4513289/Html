// Función para extraer números de una cadena de caracteres
function extraerNumeros(cadena) {
    // Expresión regular para encontrar números en la cadena
    var regex = /\d+/g;
    
    // Aplicar la expresión regular a la cadena y obtener los números encontrados en un arreglo
    var numerosEncontrados = cadena.match(regex);
    
    // Retornar los números encontrados
    return numerosEncontrados;
  }
  
  // Ejemplo de uso
  var cadena = "La empresa extaction S.A. de C.V. requiere 123 que se pueda extraer 456 de esta cadena 789.";
  var numeros = extraerNumeros(cadena);
  console.log(numeros); // Resultado: ["123", "456", "789"]
  