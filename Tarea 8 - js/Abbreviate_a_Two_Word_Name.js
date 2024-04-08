//Escribe una función para convertir un nombre en iniciales. Este kata requiere estrictamente dos palabras con un espacio entre ellas.
//El resultado debe ser dos letras mayúsculas separadas por un punto.
//Debe tener un aspecto como este:
//Sam Harris=>S.H
//patrick feeney=>P.F

function abbrevName(name) {
    const [firstName, lastName] = name.split(' ');
    return `${firstName[0].toUpperCase()}.${lastName[0].toUpperCase()}`;
  }
  
  // Ejemplo de uso
  console.log(abbrevName('Sam Harris')); // Devuelve: 'S.H'
  console.log(abbrevName('patrick feeney')); // Devuelve: 'P.F'
  //La función toma 2 entradas x e y, y debe devolver x elevado a y
