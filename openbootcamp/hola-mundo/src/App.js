import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greating';
import FGreating from './components/pure/fGreating';
import TaskListComponent from './components/container/task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        {/* Componente basado en Clases */}
        {/*<Greating name={"Ronald"}/>*/}
        {/* Componente funcional que es lo más común en React */}
        {/*<FGreating name={"Ronald"}/>*/}
        <TaskListComponent/>
      </header>
    </div>
  );
}

export default App;
