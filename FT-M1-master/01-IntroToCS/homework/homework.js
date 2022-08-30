'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var suma = 0;

  for(var i = 0; i < num.length; i++){
    suma += (Math.pow(2,(num.length - i -1)))*num[i];
  }

  return suma;
}

function DecimalABinario(num) {
  // tu codigo aca
  var binaryStr = [];

  while(num != 0){
    binaryStr.unshift(num%2);
    num = Math.floor(num/2);
  };

  return binaryStr.join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}