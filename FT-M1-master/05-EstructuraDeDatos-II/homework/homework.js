"use strict";

const ConsoleLogger = require("@11ty/eleventy/src/Util/ConsoleLogger");

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por
  parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList(){
  this.length = 0;
  this.head = null;
}

function Node(arg){
  this.value = arg;
  this.next = null;
}

LinkedList.prototype.add = function(value){
  let node = new Node(value);
  console.log(node);
  let current = this.head;

  //   2  != 0
  if(this.length === 0){
    this.head = node;
    this.length++;
    return node;
  }

  console.log(this);

  while(current.next !== null){
    //  head = head.next --> Node
    current = current.next;
  }

  current.next = node;

  this.length++;
  return node;
}

LinkedList.prototype.remove = function(){
  let value;
  let current = this.head;

  if(current === null)
    return null;
  if(current.next === null){
    value = this.head.value;
    this.head = null;
    this.length--;

    return value;
  }

  while(current.next.next){
    current = current.next;
  }

  value = current.next.value;

  current.next = null;
  this.length--;

  return value;
}

LinkedList.prototype.search = function(arg){
  let value;
  let current = this.head;

  if(typeof(arg) === 'function'){
    while(current !== null){
      console.log(current.value);
      console.log(arg(current.value));
      if(arg(current.value)){
        console.log(true);
        return current.value;
      }
      current = current.next;
    }
  }

  while(current !== null){
    if(current.value === arg){
      return current.value;
    }
    
    current = current.next;
  }

  return null;
}

/* 
// Pruebas:
let newList = new LinkedList()

newList.add('dato');
console.log(newList);
newList.add('dato2');
console.log(newList);
newList.add('dato3');
console.log(newList);

console.log(newList.remove());
console.log(newList);
console.log(newList.remove());
console.log(newList);
console.log(newList.remove());
console.log(newList);
console.log(newList.remove());
console.log(newList);

newList.add(2);
newList.add(3);
newList.add(4);

function cb(number){
  if(!(number%2))
    return true
  else
    return false
}

console.log(newList.search(2));
console.log(newList.search(3));
console.log(newList.search(4));
console.log(newList.search(cb));
 */
/*
Implementar la clase HashTable.

  Nuetra tabla hash, internamente, consta de un arreglo de buckets
(slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar
la información), donde guardaremos datos en formato clave-valor (por ejemplo,
{instructora: 'Ani'}).
  Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35).
(Luego de haber pasado todos los tests, a modo de ejercicio adicional,
pueden modificar un poco la clase para que reciba la cantidad de buckets por
parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/
function Nodo(clave, valor){
  this.clave = clave;
  this.valor = valor;
  this.next = null;
}

function HashTable(arg){
  this.numBuckets = 0;
  this.buckets = []

  for(let i = 0; i < (arg || 35); i++){
    this.buckets[i] = new LinkedList();
    this.numBuckets++;
  }
}

LinkedList.prototype.searchByKey = function(arg){
  let current = this.head;

  while(current !== null){
    if(current.clave === arg){
      return current;
    }    
    current = current.next;
  }

  return false;
}

LinkedList.prototype.addToHash = function(clave, value){
  let node = new Nodo(clave, value);
  let current = this.head;

  //   2  != 0
  if(this.length === 0){
    this.head = node;
    this.length++;
    return node;
  }

  console.log(this);

  while(current.next !== null){
    //  head = head.next --> Node
    current = current.next;
  }

  current.next = node;

  this.length++;
  return node;
}

HashTable.prototype.hash = function(arg){
  let counter = 0;

  for(let i = 0; i < arg.length; i++)
  counter += arg.charCodeAt(i);
  
  return counter%this.numBuckets;
}

HashTable.prototype.set = function(clave, valor){
  let key, buckets, search;

  // Verificamos si es string
  if(typeof clave !== 'string'){
    throw new TypeError('Keys must be strings');
  }

  key = this.hash(clave);
  buckets = this.buckets[key]
  search = buckets.searchByKey(clave)

  // Verificamos si ya existe la clave
  if((search !== false)){
    // Si existe la clave actualizamos el valor
    search.valor = valor;
    return buckets;
  }else{
    // Si no existe la clave agregamos un nuevo nodo con los valores
    buckets.addToHash(clave, valor);
    return buckets;
  }
}

HashTable.prototype.get = function(clave){
  return this.buckets[this.hash(clave)].searchByKey(clave).valor;
}

HashTable.prototype.hasKey = function(arg){
  if(this.buckets[this.hash(arg)].searchByKey(arg) !== false)
    return true;
  else
    return false;
}

/*
// Prueba:
let newHT = new HashTable(35);
console.log(newHT);

// Agregamos nuevos elementos
console.log(newHT.set('key1', 'val1'));
console.log(newHT.set('key2', 'val2'));
console.log(newHT.set('this is a very different string', 44.4));
console.log(newHT.set('this is a very different string', 44.6));
console.log(newHT.set('this is a very different strign', 44.8));
// console.log(newHT.set(false, 44.4));

console.log(newHT.get('key1'))
console.log(newHT.get('key2'))
console.log(newHT.get('this is a very different string'))
console.log(newHT.get('this is a very different strign'))

console.log(newHT.set('foo', 'bar1'));
console.log(newHT.set('ofo', 'bar2'));

newHT.set('foobar', 'fluf cats');
console.log(newHT.hasKey('foobar'));
console.log(newHT.hash('foobar'))

console.log(newHT.hasKey('raboof'));
console.log(newHT.hash('raboof'))

console.log(newHT.get('foobar'));
console.log(newHT.get('raboof'));
*/

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
