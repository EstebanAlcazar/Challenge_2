//Cree una función llamada para shortcuteliminar las vocales minúsculas ( a,,,,, ) en una cadena determinada.e i o u

function shortcut(string) {
    return string.replace(/[aeiou]/g, '');
  }
  
  // Pruebas
  const assert = require('chai').assert;
  
  function doTest(input, expected) {
    const actual = shortcut(input);
    assert.strictEqual(actual, expected, `for "${input}":\n`);
  }
  
  describe("Sample Tests", () => {
    it("Should pass sample tests", () => {
      doTest('hello', 'hll');
      doTest('how are you today?', 'hw r y tdy?');
      doTest('complain', 'cmpln');
    });
  });
  