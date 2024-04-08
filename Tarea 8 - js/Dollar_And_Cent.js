//A la empresa para la que trabaja le acaban de adjudicar un contrato para construir una pasarela de pago. Para ayudar a que las cosas avancen, usted se ha ofrecido como voluntario para crear una función que tomará un valor flotante y devolverá el formato de la cantidad en dólares y centavos.
//39.99 becomes $39.99
//El resto de su equipo se asegurará de que el argumento esté desinfectado antes de pasarlo a su función, aunque deberá tener en cuenta agregar ceros finales si faltan (aunque no tendrá que preocuparse por un punto pendiente).

function formatMoney(amount) {
    const formattedAmount = '$' + amount.toFixed(2);
    return formattedAmount;
  }
  
  // Prueba
  describe("Tests", () => {
    it("test", () => {
      Test.assertEquals(formatMoney(39.99), '$39.99', 'That\'s not formatted the way we expected.');
    });
  });
  