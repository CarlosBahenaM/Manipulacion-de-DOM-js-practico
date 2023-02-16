

const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');


// la funcuon "document" se utiliza para hacer referencia al html
// el queryselector nos permite seleccionar clases, etiquetas o id haciendo como argumento el elemento sobre e que se quiere referir la variable
//el queryselector selecciona solo el primer elemento que encuentre de su argumento, el queryselectorall crea un array de todos los elementos que contengan el argumento, si solo es uno, se genera un array con un elemento

console.log(input.value);


console.log( {
  h1,
  p,
  parrafito,
  pid,
  input
});