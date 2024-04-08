//Implemente la función generateRangeque toma tres argumentos (start, stop, step)y devuelve el rango de números enteros desde starthasta stop(inclusive) en incrementos de step.
//Nota
//iniciar < detener
//paso > 0

function generateRange(min, max, step){
    let result = [];
    for (let i = min; i <= max; i += step) {
      result.push(i);
    }
    return result;
  }
  