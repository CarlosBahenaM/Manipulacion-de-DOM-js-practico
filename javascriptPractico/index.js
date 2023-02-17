const h1 = document.querySelector('h1');
const input1 =document.querySelector('#calculo1');
const input2 =document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
const pResult =document.querySelector('#pResult-btnCalcular');
const form =document.querySelector('#form');


btn.addEventListener('click', conca);
// este metodo usa 2 parametros donde ponemos el evento que esperamos recibir y el segundo sera lo que ejecutara al recibir el evento, que en este caso es click... no se usan parebtesis en la funcion cuando se pone como argumento en el metodo

function conca(event) {
  event.preventDefault(); //podemos usar como parametro algo y a eso ponerle el metodo preventDefault para evitar que se le asigne el defecto por la pagina

  // o bien añadirle tipo button al html para evitar todo eso xd
  
  let concaResult; 
  concaResult = parseInt(input1.value) + parseInt(input2.value);

  pResult.innerText = `El Resultado es: ${concaResult}`
 
};
