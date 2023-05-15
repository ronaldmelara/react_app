import { useState } from "react"
import Formulario from "./components/Formulario"
import Todos from "./components/Todos"

const initialStatesTodos = [
  {
    title: "Todo #01",
    description: "Description #01",
    state: true,
    priority: true,
  },
  {
    title: "Todo #02",
    description: "Description #02",
    state: false,
    priority: false,
  },
  {
    title: "Todo #03",
    description: "Description #03",
    state: false,
    priority: true,
  }
]

const App = ()=> {
  const [todos, setTodos] = useState(initialStatesTodos);

  return (
    <div className="container mb-2">
      <h1 className="my-5">Formularios</h1>
      <Formulario/>
      <Todos todos={todos}/>

    </div>
  )
}
export default App
