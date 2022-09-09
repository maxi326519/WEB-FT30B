'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:

  // Elegir un povote aleatoriamente

  let random = Math.round(Math.random() * array.length);
  console.log(random); // 6

  let left  = [];
  let right = [];

  // Condicion de corte
  if(array.length <= 1)
    return array;

  // Recorremos el array y lo comparamos con el pivote/random
  for(let i=0; i<array.length; i++){
    // Evitamos guardar el pivote
    if(i === random) continue;

    // Si el numero es menor que el pivote
    if(array[i] < array[random]){
      left.push(array[i]);
    }else{
      right.push(array[i]);
    }
  }

  return quickSort(left).concat(array[random]).concat(quickSort(right));
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let left = [];
  let right = [];
  let mitad = Math.floor(array.length/2);

  console.log(mitad);

  // Condicion de cortes
  if(array.length <= 1)
    return array

  for(let i=0; i<array.length; i++){
    if(i < mitad){
      left.push(array[i]);
    }else{
      right.push(array[i]); 
    }
  }

  console.log(left)
  console.log(right)

  if(){

  }
  
  mergeSort(left);
  mergeSort(right);

}

let arr = [2,6,2,90/* ,5,2,13,54,7 */];    // [2,2,2,5,6,7,13,54,90]

console.log(quickSort(arr));
console.log(mergeSort(arr));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};