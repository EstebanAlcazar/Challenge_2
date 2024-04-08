//Escriba una función que elimine de la cadena todos los caracteres que no sean dígitos y analice el resto en números. Por ejemplo: "hell5o world" -> 56
//Función: getNumberFromString(s)

function getNumberFromString(s) {
    const digitsOnly = s.replace(/\D/g, ''); // Eliminar todos los caracteres que no sean dígitos
    return parseInt(digitsOnly); // Convertir la cadena de dígitos en un número
  }
  
  // Ejemplo de uso
  console.log(getNumberFromString("hell5o world")); // Devuelve: 56
  