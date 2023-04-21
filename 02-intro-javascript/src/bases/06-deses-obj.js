//Desestructuración
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad:45,
    clave: 'Ironman',
    rango: 'soldado'
}

console.log(persona.nombre);

const { nombre , edad, clave} = persona;

console.log(nombre);
console.log(clave);

const getContext = ({nombre, edad, clave, rango = 'Capitán'})=>{
    //const { nombre , edad, clave} = usuario;
    //console.log(nombre, edad, rango);

    return {
        nombreClave: nombre + ' ' + rango,
        anios: edad
    }
}

const {nombreClave, anios} = getContext(persona);
console.log(nombreClave, anios);