//La función toma 2 entradas x e y, y debe devolver x elevado a y
//Sencillo, ¿verdad? Pero NO puedes usar Math.pow();
//Obs: xey serán naturales, así que NO tomes en consideración fracciones;
//Nota: cero elevado a cero es igual a uno en este kata
//Gran codificación <3

function power(x, y) {
    if (y === 0) {
      return 1;
    } else {
      let result = 1;
      for (let i = 1; i <= y; i++) {
        result *= x;
      }
      return result;
    }
  }
  
  // Pruebas
  describe("Tests", function() {
    it("should return 1 when x is raised to 701270", function() {
      Test.assertEquals(power(1, 701270), 1);
    });
    
    it("should return 4 when 2 is raised to 2", function() {
      Test.assertEquals(power(2, 2), 4);
    });
    
    it("should return 9 when 3 is raised to 2", function() {
      Test.assertEquals(power(3, 2), 9);
    });
    
    it("should return 1 when -1 is raised to 40", function() {
      Test.assertEquals(power(-1, 40), 1);
    });
  });
  