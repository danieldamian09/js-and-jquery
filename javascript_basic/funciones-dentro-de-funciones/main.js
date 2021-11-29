'use strict';

var n1 = prompt('ingresa una palabra', 'una');
var n2 = prompt('ingresa otra palabra', 'otra');

function mostrarConsole(n1, n2){
  console.log(n1 + ' ' + n2);
}

function mostarDocumento(n1, n2){
  document.write(n1 + ' ' + n2);
}

function mostar (n1, n2, n3 = false){

  if(n3 == false){
    mostrarConsole(n1, n2);
  }else{
    mostarDocumento(n1, n2);
  }

}

mostar(n1, n2);