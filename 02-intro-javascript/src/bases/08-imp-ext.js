//Metodo 1 de importación
//import {heroes} from './data/heroes.js';

//metodo 2:: escribir imp + tab
//import heroes from './data/heroes'

//para usar las exportaciòn por defecto y la adicional entonces 
import heroes, {casa} from '../data/heroes'

//se colocal la importacion adicional en llaves y se podria usar inmediatamente
console.log(casa);


//importante: recordar que en el archivo a importar debe existir la declaración "Export" para que pueda ser usado aca
console.log(heroes);

const getHeroeById = (id) => {
    return heroes.find( h => h.id === id);

}

console.log(getHeroeById(3));


// No se puede usar el 'find' porque solo devuelve 1 registro, el filter devuelve de 1 a N
const getHeroesByOwner = owner => heroes.filter( heroe => heroe.owner === owner)

console.log(getHeroesByOwner('DC'));