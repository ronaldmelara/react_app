//Desestructuración de Arreglos

const letras = ['A','B', 'C'];
const [,,p3] = letras;

console.log(p3);

const retornaArreglo= ()=>{
    return ['ABC', 123];
}

const [letra, nums] = retornaArreglo();

console.log(letra, nums);

//Tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const getState = (valor) =>{
    return [valor, ()=> { console.log('Hola mundo') } ];
}

const [nombre, setNombre] = getState('Goku');
console.log(nombre);
setNombre();
//arr[1]();