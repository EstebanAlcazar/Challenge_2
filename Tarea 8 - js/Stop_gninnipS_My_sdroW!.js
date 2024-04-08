//Escriba una función que tome una cadena de una o más palabras y devuelva la misma cadena, pero con todas las palabras que tengan cinco o más letras invertidas (como el nombre de este Kata). Las cadenas pasadas consistirán únicamente en letras y espacios. Los espacios se incluirán únicamente cuando esté presente más de una palabra.

function spinWords(string) {
    return string.split(' ').map(word => word.length >= 5 ? word.split('').reverse().join('') : word).join(' ');
  }
  
  console.log(spinWords("Hey fellow warriors"));
  console.log(spinWords("This is a test"));
  console.log(spinWords("This is another test"));
  