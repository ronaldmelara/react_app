import React from "react"
import PropTypes from 'prop-types'
import { Contact } from "../../models/contact.class"

function ContactCardComponent({contact}){
    return (
        <div>
            <h2>Nombre: { contact.name } </h2>
            <h3>Apellido: { contact.apellido }</h3>
            <h4>Email: { contact.email }</h4>
            <h5>Estado: { contact.conectado ? 'Contacto En Línea' : 'Contacto No Disponible' }</h5>
        </div>
    )
}

ContactCardComponent.prototype = {
    contact : PropTypes.instanceOf(Contact)
}

export default ContactCardComponent