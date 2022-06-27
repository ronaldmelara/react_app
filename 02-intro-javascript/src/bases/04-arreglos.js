//arreglos en JS
//const arreglo = new Array(); // usar solo para crear arreglo con tamaño fijo


const arreglo = [1,2,3,4]; //esto es lo recomendado para arreglos donde no sabemos su largo y son dinamicos
//arreglo.push(1); // no usar el push porque modifica el objecto principal para insertar se usa el spread
//arreglo.push(2);

//Practica correcta
let arreglo2 = [...arreglo,5];
//arreglo2.push(5);

const arreglo3 = arreglo2.map(function(number){
    return number*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);