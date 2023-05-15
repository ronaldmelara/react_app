import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const initialStatesTodos = [
  {
    id: Date.now()+1,
    title: "Todo #01",
    description: "Description #01",
    state: true,
    priority: true,
  },
  {
    id: Date.now()+2,
    title: "Todo #02",
    description: "Description #02",
    state: false,
    priority: false,
  },
  {
    id: Date.now()+3,
    title: "Todo #03",
    description: "Description #03",
    state: false,
    priority: true,
  }
]

const App = ()=> {
  const [todos, setTodos] = useState(initialStatesTodos);

  const addTodo = todo=> {
    setTodos([...todos, todo]);
  }
  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario addTodo={addTodo}/>
      <Todos todos={todos}/>

    </div>
  )
}
export default App
