//Escriba una función que acepte una matriz de 10 números enteros (entre 0 y 9), que devuelva una cadena de esos números en forma de número de teléfono.
//El formato devuelto debe ser correcto para poder completar este desafío.
//¡No olvides el espacio después del paréntesis de cierre!

function createPhoneNumber(numbers) {
    const areaCode = numbers.slice(0, 3).join('');
    const firstPart = numbers.slice(3, 6).join('');
    const secondPart = numbers.slice(6, 10).join('');
    return `(${areaCode}) ${firstPart}-${secondPart}`;
  }
  
  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Devuelve: "(123) 456-7890"
  