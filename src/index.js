import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'; 
import { CartContextProvider } from './context/CartContext';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBLAqOtUEB-Er17O4pErtQEdso8TyaoC5k",
  authDomain: "mi-camiseta-catrini.firebaseapp.com",
  projectId: "mi-camiseta-catrini",
  storageBucket: "mi-camiseta-catrini.appspot.com",
  messagingSenderId: "672500934341",
  appId: "1:672500934341:web:b443cf000419fcf3d132ac"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
