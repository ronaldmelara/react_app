console.log('Hola Mundo');
const nombre = 'Ronald';
const apellido = 'Melara';

//Forma antigua
//const nombreCompleto = nombre + ' ' + apellido;

//nueva forma
const nombreCompleto = `${ nombre} ${apellido} ${1+1}`;
console.log(nombreCompleto);

function getSaludo(nombre){
    return "Hola Mundo " + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombreCompleto)}` );
