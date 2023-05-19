import logo from './logo.svg';
import './App.css';
import Greating from './components/pure/greating';
import FGreating from './components/pure/fGreating';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <Greating name={"Ronald"}/>
        <FGreating name={"Ronald"}/>
      </header>
    </div>
  );
}

export default App;
