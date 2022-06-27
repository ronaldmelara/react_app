//funciones en JS


//MALA PRACTICA
/*
function saludar(nombre){
    return `Hola, ${nombre}`;
}
saludar = 30;
console.log(saludar);
*/

//de esta manera evitamos sobreescribir la salida de una funcion
const saludar = function saludar(nombre){
    return `Hola, ${nombre}`;
}

//funcion de flecha
const saludar2 = (nombre)=>{
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre)=> `Hola, ${nombre}`;

const saludar4 = ()=> `Hola Mundo!!`;

console.log(saludar2('Vegeta'));

console.log(saludar3('Goku'));

console.log(saludar4());

//OPCION 1: retorno flecha tracidional
const getUser = ()=>{
    return {
        uid: 123,
        username: 'usertest'
    }
}
//OPCION 2 : retonorno implicito
const getUser2 = ()=>
    ({
        uid: 123,
        username: 'usertest'
    })


console.log(getUser());
console.log(getUser2());

//TAREA
//1. convertir a flecha
//2. que retorne objecto implicito
//3. pruebas
function getUsuarioActivo(nombre){
    return {
        uid: 'AB12345',
        username: nombre
    }
}

const getUsuarioActivo2 = (nombre)=>(
     {
        uid: 'AB12345',
        username: nombre
    })


const usuarioActivo = getUsuarioActivo2('Ronald');

console.log(usuarioActivo)