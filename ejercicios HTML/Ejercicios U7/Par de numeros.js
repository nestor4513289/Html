// Función para sumar dos números U7 4
function sumaNumeros(numero1, numero2) {
    // Verificar si los parámetros son números
    if (typeof numero1 !== 'number' || typeof numero2 !== 'number') {
      // Lanzar un error si los parámetros no son números
      throw new Error('Ambos parámetros deben ser números.');
    }
    
    // Realizar la suma
    var resultado = numero1 + numero2;
    
    // Retornar el resultado
    return resultado;
  }
  
  // Ejemplos de uso
  var numeroA = 5;
  var numeroB = 10;
  
  // Llamar a la función sumaNumeros y mostrar el resultado en la consola
  console.log('El resultado de la suma es: ' + sumaNumeros(numeroA, numeroB));