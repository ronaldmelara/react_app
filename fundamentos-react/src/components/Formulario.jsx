import {  useState } from "react";
import Swal from 'sweetalert2'

const Formulario = () => {
    const [todo, setTodo] = useState({
        title: "Todo Default",
        description: "Description default",
        state: "pendiente",
        priority: true,
    });
   
    const  { title, description, state, priority } = todo;

    //console.log(title, description, state, priority);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(title.trim() === "" || description.trim() === ""){
            console.log('entro');
            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Titulo y descripcion es obligatorio'
            });
        
        }

        console.log(title, description, state);
       
    };

    const handleChange = (e) => {
        const {name, type, checked, value} = e.target;
        
        setTodo({ ...todo, 
            [name]: type === 'checkbox' ? checked : value,
        });
    };


    return (

        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="ingrese Todo"
            className="form-control mb-2"
            name="title"
            value={title}
            onChange={handleChange}
            />

            <textarea
            className="form-control mb-2"
            placeholder="Ingrese Descripción"
            name="description"
            value={description}
            onChange={handleChange}
            ></textarea>

            <div className="form-check">
                <input type="checkbox"
                name="priority"
                className="form-check-input"
                id="inputCheck"
                checked={priority}
                onChange={handleChange}/>
                <label htmlFor="inputCheck">Dar prioridad</label>
            </div>

            <select className="form-select mb-2" name="state" 
            value={state}
            onChange={handleChange}>
                <option value="pediente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" class="btn btn-primary">Procesar</button>
        </form>
    )
}

export default Formulario