//¿Qué pasa si necesitamos agregar la longitud de las palabras separadas por un espacio al final de esa misma palabra y devolverla como una matriz?
//Su tarea es escribir una función que tome una cadena y devuelva una matriz/lista con la longitud de cada palabra agregada a cada elemento.
//Nota: La cadena tendrá al menos un elemento; Las palabras siempre estarán separadas por un espacio.

function addLength(str) {
    return str.split(' ').map(word => `${word} ${word.length}`);
  }
  
  // Ejemplo de uso
  console.log(addLength("apple ban")); // Devuelve: ["apple 5", "ban 3"]
  console.log(addLength("you will win")); // Devuelve: ["you 3", "will 4", "win 3"]
  