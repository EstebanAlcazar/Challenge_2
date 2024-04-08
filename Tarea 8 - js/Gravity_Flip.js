//Si ya has completado este kata y quieres un desafío mayor, aquí tienes la versión 3D.
//Bob se aburre durante sus lecciones de física, por lo que se construyó una caja de juguetes para pasar el tiempo. La caja es especial porque tiene la capacidad de cambiar la gravedad.
//Hay algunas columnas de cubos de juguete en la caja dispuestas en línea. La i-ésima columna contiene a_icubos. Al principio, la gravedad en la caja empuja los cubos hacia abajo. Cuando Bob cambia la gravedad, comienza a tirar todos los cubos hacia un lado determinado de la caja, dque puede ser 'L'o 'R'(izquierda o derecha). A continuación se muestra un ejemplo de cómo se vería una caja de cubos antes y después de cambiar la gravedad.
//+---+                                       +---+
//|   |                                       |   |
//+---+                                       +---+
//+---++---+     +---+              +---++---++---+
//|   ||   |     |   |   -->        |   ||   ||   |
//+---++---+     +---+              +---++---++---+
//+---++---++---++---+         +---++---++---++---+
//|   ||   ||   ||   |         |   ||   ||   ||   |
//+---++---++---++---+         +---++---++---++---+
//Dada la configuración inicial de los cubos en la caja, descubre cuántos cubos hay en cada una de las ncolumnas después de que Bob cambie la gravedad.

const flip = (d, a) => {
    if (d === 'R') {
      return a.sort((x, y) => x - y);
    } else if (d === 'L') {
      return a.sort((x, y) => y - x);
    }
  };
  
  // Pruebas de muestra
  console.log(flip('R', [3, 2, 1, 2])); // Devuelve: [1, 2, 2, 3]
  console.log(flip('L', [1, 4, 5, 3, 5])); // Devuelve: [5, 5, 4, 3, 1]
  