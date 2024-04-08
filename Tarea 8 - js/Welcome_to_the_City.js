//Cree un método que tome como entrada un nombre, ciudad y estado para dar la bienvenida a una persona. Tenga en cuenta que nameserá una matriz que constará de uno o más valores que deben unirse con un espacio entre cada uno, y la longitud de la namematriz en los casos de prueba variará.

function sayHello(name, city, state) {
    const fullName = name.join(' ');
    return `Hello, ${fullName}! Welcome to ${city}, ${state}!`;
  }
  
  // Ejemplo de uso
  console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));
  // Devuelve: 'Hello, John Smith! Welcome to Phoenix, Arizona!'
  