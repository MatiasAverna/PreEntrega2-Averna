import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import ItemListContainer from './components/ItemListContainer';


function AppCurso() {
  return (
    <Navbar />

  )
}

function App() {
  return (
    <div className="App">
      < Navbar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola mundo!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        < ItemListContainer/>
   
      </header>
    </div>
  );
}

export default App;
