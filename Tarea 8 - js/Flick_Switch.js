//Cree una función que siempre devuelva True/ truepara cada elemento de una lista determinada.
//Sin embargo, si un elemento es la palabra 'flick' , cambie para devolver siempre el valor booleano opuesto.
//Notas
//"flick" siempre se escribirá en minúsculas.
//Una lista puede contener varias películas.
//Cambie el valor booleano en el mismo elemento que el propio movimiento.

function flickSwitch(arr){
    let flick = true
    
     return arr.map(item => item === 'flick'? flick = !flick: flick)
  }