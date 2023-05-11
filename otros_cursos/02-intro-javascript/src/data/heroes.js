//para hacer uso de una exportaciòn por defecto no se usa const ni nombre

//export defualt  = [
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//OPCION 1

//exportaciòn adicional
//export const casa = ['DC','Marvel'];

//para exportación por defecto
//export default heroes;


//OPCION 2
const casa = ['DC','Marvel'];
export{
    heroes as default,
    casa
}