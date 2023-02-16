

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

h1.innerHTML = 'patito <br> cuackcuack'; 
//esta propiedad nos permite modificar el html sobreescribiendolo e incluso añadiendo etiquetas html

h1.innerText = 'patito <br> cuackcuack'
// con esta propiedad solo escribimos texto simple que no lee etiquetas html

//console.log(h1.getAttribute('class'));

//el "get" atributte nos da la clase o clases que tenga el elemento seleccionado

//h1.setAttribute('class', 'Mira, me cambiaron');
//con esta propiedad nos cambia el atributo con esa sintaxis.

h1.classList.add('rojo','verde');

h1.classList.remove('rojo');

//con estos metodos añadimos o quitamos clases del elemento que mmanipulemos del DOM


input.value = 456;
//para los input no necesitan un metodo, directo pomemos modificar lo que se requiere


// document.createElement nos sirve para crear elementos en el html por etiqueta
const createImg = document.createElement('img');
createImg.setAttribute('src', 'https://static.platzi.com/media/platzi-isotipo@2x.png');

//Aqui hacemos una variable con la propiedad de que cree una imagen, luego le damos los atributos de imagen

console.log(createImg);

pid.appendChild(createImg);
//con este metodo añadimos lo creado con createdocument a un elemento existente


document.querySelector('h1').append(createImg);
