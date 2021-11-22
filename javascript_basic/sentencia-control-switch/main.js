'use strict';

var edad = 20;

var texto = "";

switch (edad) {
  case 17:
    texto = "No tienes 18 años";
    break;
  case 18:
    texto = "Eres mayor de Edad";
    break;
  default:
    texto = "Parece que no tienes Edad 😂";
    break;
}

console.log(texto);