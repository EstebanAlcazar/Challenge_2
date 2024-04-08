//Escriba una función que tome una única cadena no vacía de letras ascii mayúsculas y minúsculas ( word) como argumento y devuelva una lista ordenada que contenga los índices de todas las letras mayúsculas (mayúsculas) de la cadena.

var capitals = function (word) {
    const indexes = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        indexes.push(i);
      }
    }
    return indexes;
  };
  
  console.log(capitals("CodEWaRs")); // Devuelve: [0, 3, 4, 6]
  