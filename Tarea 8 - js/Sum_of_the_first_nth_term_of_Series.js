//Su tarea es escribir una función que devuelva el n-ésimo término de la siguiente serie, que es la suma de los primeros ntérminos de la secuencia ( nes el parámetro de entrada).

function SeriesSum(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
      sum += 1 / (1 + i * 3);
    }
    return sum.toFixed(2);
  }
  
  console.log(SeriesSum(1)); // Devuelve: "1.00"
  console.log(SeriesSum(2)); // Devuelve: "1.25"
  console.log(SeriesSum(5)); // Devuelve: "1.57"
  