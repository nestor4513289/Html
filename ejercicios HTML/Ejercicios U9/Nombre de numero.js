// Arreglo original con los números
var numeros = [1, 2, 3, 4, 5];

// Arreglo para almacenar los números multiplicados por dos
var numerosMultiplicados = [];

// Recorrer el arreglo original y multiplicar cada número por dos
for (var i = 0; i < numeros.length; i++) {
  var numeroMultiplicado = numeros[i] * 2;
  numerosMultiplicados.push(numeroMultiplicado);
}

// Mostrar el nuevo arreglo en el navegador
console.log(numerosMultiplicados);