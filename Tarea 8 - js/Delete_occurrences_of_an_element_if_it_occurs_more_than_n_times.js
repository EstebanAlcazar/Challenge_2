//Alice y Bob estaban de vacaciones. Ambos tomaron muchas fotografías de los lugares en los que han estado y ahora quieren mostrarle a Charlie toda su colección. Sin embargo, a Charlie no le gustan estas sesiones, ya que el motivo suele repetirse. No le gusta ver la torre Eiffel 40 veces.
//Les dice que sólo se sentará en la sesión si muestran el mismo motivo la mayor parte Ndel tiempo. Afortunadamente, Alice y Bob pueden codificar el motivo como un número. ¿Puedes ayudarlos a eliminar números de modo que su lista contenga cada número solo hasta un máximo de Nveces, sin cambiar el orden?

//Dada una lista y un número, cree una nueva lista que contenga cada número listcomo máximo N, sin reordenar.
//Por ejemplo, si el número de entrada es 2y la lista de entrada es [1,2,3,1,2,1,2,3], toma [1,2,3,1,2], descarta el siguiente [1,2]ya que esto llevaría a 1y 2estar en el resultado 3multiplicado, y luego toma 3, lo que lleva a [1,2,3,1,2,3].
//Con lista [20,37,20,21]y número 1, el resultado sería [20,37,21].

function deleteNth(arr, n) {
    const countMap = {};
    return arr.filter(num => {
      countMap[num] = (countMap[num] || 0) + 1;
      return countMap[num] <= n;
    });
  }
  
  console.log(deleteNth([1, 2, 3, 1, 2, 1, 2, 3], 2)); // Devuelve: [1, 2, 3, 1, 2]
  console.log(deleteNth([20, 37, 20, 21], 1)); // Devuelve: [20, 37, 21]
  