'use strict';

var n1 = prompt("Ingrese una palabra", "no has puesto nada");
var n2 = prompt("Ingrese otra palabra", "no has puesto nada");

function unirPalabras(n1, n2, n3 = false){
  if(n3 == false){
    console.log(n1 + " " + n2)
  }else{
    document.write(n1 + " " + n2);
  }
}

unirPalabras(n1, n2, true);
