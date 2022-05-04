import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';

/* import logo from './logo.svg'; */
/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header> */
 
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
        <Route path='/item/:id' element={ <ItemDetailContainer /> } />
      </Routes>
    </div>
  );
}

export default App;
