//Complete el método/función para que convierta palabras delimitadas por guiones/guiones bajos en mayúsculas de camello . La primera palabra dentro de la salida debe escribirse en mayúscula solo si la palabra original estaba en mayúscula (conocido como Upper Camel Case, también conocido como caso Pascal). Las siguientes palabras siempre deben estar en mayúscula.

function toCamelCase(str) {
    const words = str.split(/[-_]/);
    const camelCaseWords = words.map((word, index) => {
      if (index === 0) {
        return word;
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    });
    return camelCaseWords.join('');
  }
  
  console.log(toCamelCase("the-stealth-warrior")); // Devuelve: "theStealthWarrior"
  console.log(toCamelCase("The_Stealth_Warrior")); // Devuelve: "TheStealthWarrior"
  console.log(toCamelCase("The_Stealth-Warrior")); // Devuelve: "TheStealthWarrior"
  