//Estabas acampando con tus amigos lejos de casa, pero cuando llega el momento de regresar, te das cuenta de que se te está acabando el combustible y que el surtidor más cercano está a 50kilómetros de distancia. Usted sabe que, en promedio, su automóvil recorre aproximadamente 25millas por galón. Quedan 2galones.
//Teniendo en cuenta estos factores, escribe una función que te indique si es posible llegar a la bomba o no.
//La función debe regresar truesi es posible y falsesi no.

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    const distanciaPosible = mpg * fuelLeft;
    
    if (distanciaPosible >= distanceToPump) {
      return true;
    } else {
      return false;
    }
  };
  
  console.log(zeroFuel(50, 25, 2));
  