/*
Un cuadrado de cuadrados
Te gustan los bloques de construcción. Te gustan especialmente los bloques de construcción que son cuadrados. ¡Y lo que más te gusta es organizarlos en un cuadrado de bloques de construcción cuadrados!

Sin embargo, a veces, no puedes organizarlos en un cuadrado. ¡En cambio, terminas con un rectángulo ordinario! ¡Esas malditas cosas! Si tuvieras una forma de saber si actualmente estás trabajando en vano... ¡Espera! ¡Eso es todo! Solo tienes que comprobar si tu número de bloques de construcción es un cuadrado perfecto .

Tarea
Dado un número entero, determine si es un número cuadrado :

En matemáticas, un número cuadrado o cuadrado perfecto es un número entero que es el cuadrado de un número entero; en otras palabras, es el producto de algún número entero consigo mismo.

Las pruebas siempre usarán algún número entero, así que no se preocupe por eso en lenguajes de tipo dinámico.

Ejemplos
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false
*/

var isSquare = function(n){
  if(Math.sqrt(n) === Math.floor(Math.sqrt(n)) ){
    return true;
  }else{
    return false;
  }
}