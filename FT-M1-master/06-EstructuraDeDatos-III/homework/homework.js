"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto value existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes, según se indique por parámetro ("post-order", "pre-order", o "in-order"). Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)

  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/

function BinarySearchTree(value){
  this.value = value;
  this.left  = null;
  this.right = null;
}

BinarySearchTree.prototype.size = function() {
  let suma = 1;

  if(this.left !== null){
    suma += this.left.size();
  }

  if(this.right !== null){
    suma += this.right.size();
  }

  return suma;
}

BinarySearchTree.prototype.insert = function(value){

  //Verificamos si es menor o mayor que el value del nodo
  if(value < this.value){
    // Verificamos si left esta vacio
    if(this.left === null){
      // Si esta vacio creamos un nuevo nodo
      this.left = new BinarySearchTree(value);
    }else{
      // Si no esta vacio volvemos a llamar a insert sobre left
      this.left.insert(value);
    }
  }else{
    // Verificamos si right esta vacio
    if(this.right === null){
      // Si esta vacio creamos un nuevo nodo
      this.right = new BinarySearchTree(value);
    }else{
      // Si no esta vacio volvemos a llamar a insert sobre right
      this.right.insert(value);
    }
  }
}

BinarySearchTree.prototype.contains = function(value){

    if((this.value === value) ||                                // Si es igual al nodo actual 
      ((value < this.value) && (this.left !== null) && (this.left.contains(value))) ||  // Si es menos que value y left esta vacio, aplicamos contains
      ((value > this.value) && (this.right !== null) && (this.right.contains(value))))  // Si right esta vacio y aplicamos contains
      return true;
    return false;

/*   
    // Verificamos si es igual al valor del nodo actual
    if(this.value === value){
      // Si es igual devolvemos true
      return true;
    }

    // Verificamos si left esta vacio
    if(this.left !== null){
      // Validamos los valores de left
      if(this.left.contains(value)){
        return true;
      }
    }

    // Verificamos si right esta vacio
    if(this.right !== null){
      // Validamos los valores de right
      if(this.right.contains(value)){
        return true;
      }
    }
 */
}

BinarySearchTree.prototype.depthFirstForEach = function(cb, order){

  //"post-order", "pre-order", o "in-order"
  /*
  DEPTH FIRT TRAVERSAL:
    POST ORDER:
           7
         /   \
       3      6
      / \    / \
    1    2  4   5

    PRE ORDER:
           1
         /   \
       2      5
      / \    / \
    3    4  6   7
    
    IN ORDER:
           4
         /   \
       2      6
      / \    / \
    1    3  5   7
  */

  if('post-order' === order){
    search(this.left);
    search(this.right);
    cb(this.value);
  }else if('pre-order' === order){
    cb(this.value);
    search(this.left);
    search(this.right);
  }else{
    search(this.left);
    cb(this.value);
    search(this.right);
  }
  function search(arg){
    if(arg !== null){
      arg.depthFirstForEach(cb, order);
    }
  }
}

BinarySearchTree.prototype.breadthFirstForEach = function(cb, arr = []){
  /*
    BREADTH FIRST TRAVERSAL
           7
         /   \
       5      6
      / \    / \
    1    2  3   4
  */

  if(this.left !== null){
    arr.push(this.left);
  }
  if(this.right !== null){
    arr.push(this.right);
  }

  cb(this.value);
  console.log(arr.length)
  while(arr.length > 0){
    arr.shift().breadthFirstForEach(cb, arr)
  }
}

let newNode = new BinarySearchTree(10);

newNode.insert(8);
newNode.insert(12);
newNode.insert(7);
newNode.insert(9);
newNode.insert(11);
newNode.insert(13);
newNode.insert(13);

console.log(newNode);
/* 
console.log(newNode.contains(10));
console.log(newNode.contains(8));
console.log(newNode.contains(12));
console.log(newNode.contains(7));
console.log(newNode.contains(9));
console.log(newNode.contains(11));
console.log(newNode.contains(13));
*/

let newArr = [];

var p = function (value){
  newArr.push(value);
}

console.log(newNode.breadthFirstForEach(p));
console.log(newArr);

/* console.log(newNode.depthFirstForEach(p, "pre-order"));
console.log(newArr);
newArr = [];

console.log(newNode.depthFirstForEach(p, "post-order"));
console.log(newArr);
newArr = [];

console.log(newNode.depthFirstForEach(p, 'in-order'))
console.log(newArr); */

// newNode.depthFirstForEach(pushArr, '"in-order"');
/* 
    Pre Order:  10 8 7 9 12 11 13
    Post Order: 7 9 8 11 13 12 10
    In Order:   7 8 9 10 11 12 13
           10
         /   \
       8      12
      / \    / \
    7    9 11   13
    B: 7 9 11 13 8 12 10
*/


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
