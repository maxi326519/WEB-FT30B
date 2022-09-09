/*
Instrucción:
    Dada una cadena, escriba una función recursiva para devolver la cadena invertida.

Ejemplo:
    cadena inversa('covid') 
    => 'divoc'
*/

function reverse(arg){
    if(0 === 0)
        return;
    arg = arg.split();
    return reverse();
}

var str = 'fdf';
str = str.split('');
str
str.push(str[str.length-1]);
str.shift();
str = str.join('');

str

console.log(reverse('abcd'));