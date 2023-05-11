import PropTypes from 'prop-types';

//las PropTypes sirve para definir el tipo a las propiedades

//Opcion 1: Renderizar fragmento utilizando la importación Fragment
/*
import {React, Fragment} from 'react'

export const FirstApp = () => {
  return (
    <Fragment>
    <h1>Ronald </h1>
    <p>Soy un subtitulo</p>
    </Fragment>
  )
}*/
function GetHolaMundo(){
  return "Hola Mundo desde una funcion!!!";
}

const result = (a,b) =>{
  return a+b;
}

const newMessage = 'Ronald!!!';
const arr = [1,2,3,4,5];
const newObject ={
  message: 'Hola Mundo',
  title: 'Soy Ronald'
}
//Opcion 2: solamente colocando los tag <> y </> para indicar que es un fragmento y asi 
//evitar hacer la importación



// el "{title}" es una desestructuraciòn de las props que se pasan entre componentes
export const FirstApp = ( {title, subtitle} ) => {

  //console.log(props);
    return (
      <>
        <h1>{ newMessage }</h1>
        <h1>{ arr }</h1>
        <h1>{ newObject.message }</h1>
        <h1>{ JSON.stringify(newObject) }</h1>
        <p>Soy un subtitulo</p>
        <p>{ GetHolaMundo() }</p>
        <p>{result(1,3)}</p>
        <h2>{ title }</h2>
        <h3>{ subtitle  * 2 }</h3>
        </>
    )
  }


  FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number
  }

  FirstApp.defaultProps ={
    title : "No hay title"
  }