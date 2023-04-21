console.log('Hola Mundo');
const nombre = 'Ronald';
const apellido = 'Melara';

let valorDado = 5;
valorDado =4;

console.log(nombre, apellido, valorDado);

//var No se debe de seguir usando
if(true){
    let valorDado = 6; //esta variable existe solo dentro del scope
    const nombre = 'Peter'; // esta constante existe solo dentro de est scope
    console.log(valorDado, nombre);
}

console.log(valorDado);