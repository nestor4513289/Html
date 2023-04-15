function contarPalabra(frase, palabra) {
    // Convierte la frase y la palabra a minúsculas para hacer la búsqueda case insensitive
    frase = frase.toLowerCase();
    palabra = palabra.toLowerCase();
  
    // Divide la frase en palabras usando espacio como separador
    const palabras = frase.split(" ");
  
    // Inicializa el contador de palabras encontradas
    let contador = 0;
  
    // Itera a través de cada palabra en la frase y compara con la palabra buscada
    for (let i = 0; i < palabras.length; i++) {
      if (palabras[i] === palabra) {
        contador++;
      }
    }
  
    // Retorna el resultado del contador
    return contador;
  }
  
  // Ejemplo de uso
  const frase = "Este es un ejemplo de texto con ejemplo de palabra repetida";
  const palabraBuscada = "ejemplo";
  const resultado = contarPalabra(frase, palabraBuscada);
  console.log(`La palabra "${palabraBuscada}" se encuentra ${resultado} veces en la frase.`);
  