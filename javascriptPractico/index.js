const h1 = document.querySelector('h1');
const input1 =document.querySelector('#calculo1');
const input2 =document.querySelector('#calculo2');
const btn =document.querySelector('#btnCalcular');
// creamos una constante que llame al elemento parrafo que mostrara el resultado de la suma
const pResult =document.querySelector('#pResult-btnCalcular');


//creamos una funcion donde tomaremos el valor de el input 1 y dos llamandolos desde la variable creada para sumar o concatenar el resultado
function conca() {
  let concaResult; //creamos una variable que guardara el resultado
  concaResult = parseInt(input1.value) + parseInt(input2.value);
  // les cambiamos el tipo de dato con parse int ya que el input siempre devuelve un valor de tipo string
  pResult.innerText = `El Resultado es: ${concaResult}`
  // añadimos al elemento con id pResult con el metodo innertext una frase y el resultado de la suma
};
