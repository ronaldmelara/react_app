import {getHeroeById} from '../bases/08-imp-ext'



/*
const promesa = new Promise( (resolve, reject) =>  {

    setTimeout(() => {
        //console.log('2 segundos despues');
        const heroe = getHeroeById(2);
        resolve(heroe);

        //esto es para invocar el reject
        //reject('No se puedo encontrar el heroe');
    }, 2000);
});

promesa.then( (data) => {
    console.log('Then de la promesa');
    console.log(data);
})
.catch(err => console.warn(err));
*/

const getHeroeByIdAsync = (id)=>{
    const promesa = new Promise( (resolve, reject) =>  {

        setTimeout(() => {
            //console.log('2 segundos despues');
            const heroe = getHeroeById(id);
            if(heroe){
                resolve(heroe);
            }
            else{
                reject('No se puedo encontrar el heroe');
            }
    
            //esto es para invocar el reject
            
        }, 2000);
    });
    
    return promesa;
    
}

getHeroeByIdAsync(44).then( (data) => {
    console.log('Then de la promesa');
    console.log(data);
})
.catch(err => console.warn(err));