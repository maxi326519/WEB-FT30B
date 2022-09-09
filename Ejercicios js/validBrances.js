/*
Escribe una función que tome una cadena de llaves y determine si el orden de las llaves es válido. Debería devolver truesi la cadena es válida y falsesi no es válida.

Este Kata es similar al Kata de paréntesis válidos , pero introduce nuevos caracteres: corchetes []y llaves {}. ¡Gracias a @arnedagpor la idea!

Todas las cadenas de entrada no estarán vacías y solo consistirán en paréntesis, corchetes y llaves: ()[]{}.

¿Qué se considera Válido?
Una cadena de llaves se considera válida si todas las llaves coinciden con la llave correcta.

Ejemplos
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/

function validBraces(braces){
    let arr = [0,0,0];

    braces = braces.split('').sort();

    console.log(braces);
    
    for(let i = 0; i < braces.length; i++){
        console.log(braces[i]);
        switch(braces[i]){
            case '(':
                arr[0]++;
                break;

            case ')':
                arr[0]--;
                break;
        
            case '[':
                arr[1]++;
                break;
                        
            case ']':
                arr[1]--;
                break;
                
            case '{':
                arr[2]++;
                break;
                
            case '}':
                arr[2]--;
                break;
            default:
                return false;
                break;
        }
    }
    console.log(arr.join(''));
    if(arr.join('') === '000')
        return true;
    else
        return false;
}

console.log(validBraces("[(])"));