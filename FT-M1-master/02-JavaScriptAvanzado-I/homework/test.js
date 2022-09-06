x = 1;
var a = 5;
var b = 10;

var c = function(a, b, c){
  var x = 10;
  console.log(x);               // 10
  console.log(a);               // 8

  //               8  9  10 
  var f = function(a, b, c){
    b = a;                      
    console.log(b);             // imprime 8
    b = c;                      // b = 10
    var x = 5;
  }
  //8 9 10
  f(a,b,c);         // imprime 8
  console.log(b);   // imprime 9
}

c(8,9,10);
console.log(b);     // imprime 10
console.log(x);     // imprime  1

/*
    10
    8
    8
    9
    10
    1
*/