// Contexto de ejecucion:
console.log(); // Sale del objeto global, junto con otras funciones no definidas
// Los contextos de ejecucion se crean solamente
// cuando las funciones son llamadas


// Hoisting:
// 	Ordena las declaraciones de funciones hasta arriba
// de todo, tambien alas de las variables pero no sus
// inicializaciones, es decis el valor definido de su
// declaracion

// PRECEDENCIA Y ASOCITIVIDAD:
// El peso de las 

// Coercion de datos
// Convierte los datos en lo que necesites
// Es decir, cambia los datos en estos ejemplos

Nummber(false);     // devolvera 0
Nummber(true);      // devolvera 1
Nummber(undefined); // devolvera NaN ya que undefined no es un numero
Nummber("3");       // devolvera 3

3 + '3'     // devuelve '33' por que convierte todo a texto y lo concatena
3 - "3"     // devolvera 0 ya que no se puede concatenar ni restar texto entonces convierte a numero y resta

// FIRST CALSS FUNCTIONS:
const fn = function(){
    console.log('Nueva funcion');
    // Devuelve Undefined por defecto
}
// EXPRESIONS Y STATEMENTS
// EXPRESIONS
//  Devuelve valores
// STATMENTS
//  Son estructuras como el if o una fucnion, la cual no devuelve nada si no que hacen cosa

// VALOR Y REFERENCIA:
var a = 1;
var b = 2;

a = b;
// Si ambos son valores primitivos (string, float, int, etc), se copian en diferentes direcciones de memeria

var a = {};
var b = {};

a = b;

// Si son objetos si se hace una copia de la DIRECCION DE MEMORIA
// Como todo en js es un objeto cualquier cosa que no sea un numero primitivo al hace una copia se hara de la direccion de memoria donde eta alojado el objeto

//--------------------------------------------------
// THIS:
// Apunta al contexto donde esta siendo ejecutado
// Podes guardar la referencia
var that = this;


var obj = {
    name: "Maxi",
    fn: function(){
        console.log(this.name);
    }
}

var fns = obj.fn;
fns();
// Si se sacar la funcion de un objeto la cual tiene un this adentro
// cuando lo ejecutemos estaria haciendo referencia al objeto global
// entonces solo tomaria el valor si 
valor = 0;

// Pero no si: (pero en el navegador lo tira al glogal al igual que el anterior)
var valor = 0;


//--------------------------------------------------
// 
