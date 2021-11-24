'use strict';

var n1 = prompt("dime una palabra", "no has puesto nada");
var n2 = prompt("dime otra palabra", "no has puesto nada");

function unirPalabras(n1, n2){
  var palabrasUnidas = n1 + " " + n2;
  return palabrasUnidas;
}

var resultado = unirPalabras(n1, n2);

console.log(resultado);
