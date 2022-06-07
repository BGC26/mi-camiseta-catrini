import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import Footer from './components/Footer/Footer';
import './App.css';
 
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path='/' element={ <ItemListContainer /> } />
        <Route path='/category/:categoryId' element={ <ItemListContainer /> } />
        <Route path='/item/:id' element={ <ItemDetailContainer /> } />
        <Route path='/cart' element={ <Cart /> } />
        <Route path='/checkout' element={ <Checkout /> } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
