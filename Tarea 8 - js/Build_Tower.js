//Construya una torre en forma de pirámide, como una matriz/lista de cadenas, dado un número entero positivo number of floors. Se representa una torre con "*"carácter.
//Por ejemplo, una torre con 3pisos se ve así:
//[
//  "  *  ",
//  " *** ", 
//  "*****"
//]
//Y una torre con 6pisos se ve así:
//[
//  "     *     ", 
//  "    ***    ", 
//  "   *****   ", 
//  "  *******  ", 
//  " ********* ", 
//  "***********"
//]

function towerBuilder(nFloors) {
    const tower = [];
    const maxWidth = 2 * nFloors - 1;
    
    for (let i = 0; i < nFloors; i++) {
      const stars = 2 * i + 1;
      const spaces = (maxWidth - stars) / 2;
      const floor = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
      tower.push(floor);
    }
    
    return tower;
  }
  
  console.log(towerBuilder(3)); // Devuelve una matriz con la torre de 3 pisos
  console.log(towerBuilder(6)); // Devuelve una matriz con la torre de 6 pisos
  