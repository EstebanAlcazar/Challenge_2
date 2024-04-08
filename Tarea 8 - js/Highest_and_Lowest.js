//En esta pequeña tarea, se le proporciona una cadena de números separados por espacios y debe devolver el número más alto y el más bajo.
//Todos los números son válidos Int32, no es necesario validarlos.
//Siempre habrá al menos un número en la cadena de entrada.
//La cadena de salida debe tener dos números separados por un solo espacio y el número más alto es el primero.

function highAndLow(numbers) {
    const numsArray = numbers.split(' ').map(Number);
    const maxNum = Math.max(...numsArray);
    const minNum = Math.min(...numsArray);
    return `${maxNum} ${minNum}`;
  }
  
  console.log(highAndLow("1 2 3 4 5"));
  console.log(highAndLow("1 2 -3 4 5"));
  console.log(highAndLow("1 9 3 4 -5"));
  