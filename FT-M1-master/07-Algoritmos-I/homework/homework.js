'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let i=2;

  while(num !== 1){
    if(num%i === 0){
      num = num/i;
      arr.push(i);
      continue;
    }
    i++;
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let aux;

  for(let i=0; i < array.length; i++){
    for(let j=0; j < array.length; j++){
      if((array[j+1] !== undefined) && (array[j] > array[j+1])){
        aux = array[j];
        array[j] = array[j+1];
        array[j+1] = aux;
      }
    }
  }

  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let aux;

  for(let i=0; i < array.length; i++){
    // Comparamos si es menos al primer valor
    if((array[i+1] !== undefined) && (array[i] > array[i+1])){
      // Si es menor los comparamos con todos los anteriores
      for(let j=i; j>=0; j--){
        if(array[j] > array[j+1]){
          aux = array[j];
          array[j] = array[j+1];
          array[j+1] = aux;
        }
      }
    }
  }

  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  let aux, position;

  for(let i=0; i<array.length; i++){
    // Guardamos la posicion del primer elemento que vamos a comparar
    position = i;
    // Comenzamos a iterar los siguientes numeros del array
    for(let j=i+1; j<array.length; j++){
      // Comparamos los elementos que le siguen
      if(array[position] > array[j]){
        // Si se encuentra un elemento mas chico que el primer elemento actualizamos la posicion del numero mas chico
        position = j;
      }
    }

    // Hacemos el intercambio
    aux = array[position];
    array[position] = array[i];
    array[i] = aux;
  }
  
  return array;
}

console.log(factorear(150));
console.log(bubbleSort([4,7,2,88,0,5]));
console.log(insertionSort([4,7,2,88,0,5]));
console.log(selectionSort([4,7,2,88,0,5]));

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
