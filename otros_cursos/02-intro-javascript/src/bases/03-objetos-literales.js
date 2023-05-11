const persona ={
    nombre: "Tony",
    apellido: 'Stark',
    edad : 45,
    direccion: {
        ciudad: 'NY',
        zip: 123123,
        lat: 12.22,
        lng: 34.45454
    }
};

//console.log(persona);
//se puede imprimir como table para leer mejor los datos de un propiedad
//console.table(persona);

/***********************/
//MALA PRACTICA
//esto lo que hace es una copia apuntando al espacio de memoria utilizado por el primero objecto y generarà un falso positivo de sobreescritura de datos
const persona2 = persona;
console.log(persona2);

//si lo que deseamos es clonar el objecto entonces hacemos:
const persona3 = {...persona}
persona3.nombre = 'Peter';

console.log(persona);
console.log(persona3);


