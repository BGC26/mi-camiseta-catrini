import React from 'react';
import './NavBar.css';

function NavBar(props) {
    return (
        <div className='navbar'>
            <h1 className='title-navbar'>MI CAMISETA</h1>
            <ul className='categories-navbar'>
                <a href='#'>Nacional</a>
                <a href='#'>Internacional</a>
                <a href='#'>Selección</a>
-           </ul>
            <button className='login-navbar'>Login</button>
        </div>
    );
}

export default NavBar;