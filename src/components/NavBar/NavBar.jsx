import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='navbar'>
            <h1 className='title-navbar'>Mi Camiseta</h1>
            <ul className='categories-navbar'>
                <a href='#'>Inicio</a>
                <a href='#'>Club</a>
                <a href='#'>Selección</a>
            </ul>
            <ul className='login-register-navbar'>
                <a href='#'>Login</a>
                <a href='#'>Register</a>
            </ul>
        </div>
    );
}

export default NavBar;