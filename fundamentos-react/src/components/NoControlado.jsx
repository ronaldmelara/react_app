import { useRef } from "react";

const NoControlado = () => {

    const form = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(form.current);
        const {title, description, state} = Object.fromEntries([...data.entries()]);

        console.log(title, description, state);
    };

    return (

        <form onSubmit={handleSubmit} ref={form}>

            <input type="text" placeholder="ingrese Todo"
            className="form-control mb-2"
            name="title"
            defaultValue="todo #01"/>

            <textarea
            className="form-control mb-2"
            placeholder="Ingrese Descripción"
            name="description"
            defaultValue="descripción #01"></textarea>


            <select className="form-select mb-2" name="state" defaultValue="completado">
                <option value="pediente">Pendiente</option>
                <option value="completado">Completado</option>
            </select>

            <button type="submit" class="btn btn-primary">Procesar</button>
        </form>
    )
};

export default NoControlado;

