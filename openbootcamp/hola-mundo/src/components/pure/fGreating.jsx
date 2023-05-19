import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * Componente Funcional: es mas facil de usar e integrar, usa Hook como useState para manejar estados
 */
const FGreating = (props) => {
    const [age,setAge] = useState(29);

    const birthday = ()=>{
        //actualizamos el State
        setAge(age+1);
    }

    return (
        <div>
            <h1>Greating { props.name } desde componente funcional!</h1>
            <h2>Tu edad es: { age }</h2>
            <div className="">
                <button onClick={birthday}>
                    Cumplir años
                </button>
            </div>
        </div>
    );
};


FGreating.propTypes = {
    name: PropTypes.string
};


export default FGreating;
