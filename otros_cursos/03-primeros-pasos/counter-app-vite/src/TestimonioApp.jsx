import React from 'react';
import './Testimonio.css';

export const TestimonioApp = (props) => {
  return (
    <>
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio' src={`../src/imagenes/${props.imagen}.png`} alt='Foto de Emma'/>
      <div className='contenedor-text-testimonio'>
        <p className='nobre-testimonio'>{props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
    </>
  )
}
