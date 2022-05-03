import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

function NavBar(props) {
    return (
        <div className='navbar'>
            <h1 className='title-navbar'>Mi Camiseta</h1>
            <ul className='categories-navbar'>
                <li><Link to={'/'} className='section'>Inicio</Link></li>
                <li><Link to={'/category/club'} className='section'>Club</Link></li>
                <li><Link to={'/category/seleccion'} className='section'>Seleccion</Link></li>
            </ul>
            <ul className='login-register-navbar'>
                <li><Link to={'/login'} className='section'>Login</Link></li>
                <li><Link to={'/register'} className='section'>Register</Link></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;