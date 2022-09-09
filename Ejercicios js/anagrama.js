/*
  ¿Qué es un anagrama? Bueno, dos palabras son anagramas entre sí si ambas contienen las mismas letras. Por ejemplo:

  'abba' & 'baab' == true

  'abba' & 'bbaa' == true

  'abba' & 'abbba' == false

  'abba' & 'abca' == false
  Escribe una función que encuentre todos los anagramas de una palabra de una lista. Se le darán dos entradas, una palabra y una matriz con palabras. Debe devolver una matriz de todos los anagramas o una matriz vacía si no hay ninguno. Por ejemplo:

  anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

  anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
*/

function anagrams(word, words) {
    var j;
    var aux;
    var arrWord;
    var arrWords = [];
    
    for(var i = 0; i < words.length; i++){
      arrWord = words[i].split("");
      j = 0;
        // Iteramos las caracteres de 'word'
        for(var i2 = 0; i2 < word.length; i2++){
          for(var j = 0; j < word.length; j++){
                if((word[i2] === arrWord[j]) && (i2 !== j)){
              aux = arrWord[j];
              arrWord[j] = arrWord[i2];
              arrWord[i2] = aux;
            
                  j = i2;
              break;
              }
          }
      }
      if(word === arrWord.join("")){
          arrWords.push(words[i]); 
      }
    }
    return arrWords;
  }
  
  anagrams('abba', ['baab', 'abcd', 'bbaa', 'dada']);
  anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
  anagrams('laser', ['lazing', 'lazy',  'lacer']);