import React from 'react'
import { Contact } from "../../models/contact.class";
import ContactCardComponent from '../pure/contact_card';

const ContactListComponent = () => {
    const defaultContact = new Contact("Nombre", "Apellido", "nombre.apellido@email.com",false);

    return(
        <div>
            <div>
            Contacts:
        </div>
        <ContactCardComponent contact={ defaultContact }/>
        </div>
        
    )
}

export default ContactListComponent