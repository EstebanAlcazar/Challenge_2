//¡Por cada buena idea de kata, parece haber bastantes malas!
//En este kata, debe verificar la matriz proporcionada (x) para ver si hay buenas ideas "buenas" y malas ideas "malas". Si hay una o dos buenas ideas, devuelva '¡Publicar!', si hay más de 2, devuelva '¡Huelo una serie!'. Si no hay buenas ideas, como suele ser el caso, devuelva '¡Falla!'.

function well(x) {
    const goodIdeasCount = x.filter(idea => idea === 'good').length;
    
    if (goodIdeasCount === 1 || goodIdeasCount === 2) {
      return 'Publish!';
    } else if (goodIdeasCount > 2) {
      return 'I smell a series!';
    } else {
      return 'Fail!';
    }
  }
  
  // Ejemplo de uso
  console.log(well(['good', 'bad', 'good'])); // Devuelve: 'Publish!'
  console.log(well(['good', 'bad', 'good', 'good'])); // Devuelve: 'Publish!'
  console.log(well(['bad', 'bad', 'bad'])); // Devuelve: 'Fail!'
  console.log(well(['good', 'good', 'good', 'good'])); // Devuelve: 'I smell a series!'
  