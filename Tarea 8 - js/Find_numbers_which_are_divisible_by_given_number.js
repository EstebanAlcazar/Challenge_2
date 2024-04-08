//Complete la función que toma dos argumentos y devuelve todos los números que son divisibles por el divisor dado. El primer argumento es una matriz de numbersy el segundo es divisor.

function divisibleBy(numbers, divisor){
    return numbers.filter(number => number % divisor === 0);
  }
  