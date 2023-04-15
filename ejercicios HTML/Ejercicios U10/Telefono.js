function validarNumeroTelefono(cadena) {
    // Remover espacios en blanco y guiones
    cadena = cadena.replace(/\s+/g, '').replace(/-/g, '');
  
    // Verificar si la cadena contiene exactamente 10 dígitos
    if (cadena.length !== 10) {
      return false;
    }
  
    // Verificar si la cadena contiene solo dígitos numéricos
    if (!/^\d+$/.test(cadena)) {
      return false;
    }
  
    // Si pasa las validaciones anteriores, es un número de teléfono válido
    return true;
  }
  