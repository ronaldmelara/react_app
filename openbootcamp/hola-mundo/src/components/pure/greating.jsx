import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
 * Un componente de tipo clase es la forma de trabajar en React
 * se caracteriza porque tiene constructor y estados,
 * metodos y funciones privados
 */
class Greating extends Component {

    constructor(props) {
        super(props);
        this.state = {
            age:29
        }
    }
    render() {
        return (
            <div>
                <h1>Greating { this.props.name }!</h1>
                <h2>Tu edad es: { this.state.age  }</h2>
                <div className="">
                    <button onClick={this.birthday}>
                        Cumplir años
                    </button>
                </div>
            </div>
        );
    }

    birthday=()=>{
        this.setState((prevState)=>(
            {
            age : prevState.age +1
            }
        ));
    }
}

Greating.propTypes = {
    name: PropTypes.string
};

export default Greating;