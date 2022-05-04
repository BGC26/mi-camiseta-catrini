import React from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import LogoApp from '../../assets/mi-camiseta-logo.png'

function NavBar() {
    return (
        <div className='navbar'>
            <div className='logo-content'>
            <Link to="/"><img src={ LogoApp } className="logo-navbar" alt="imgLogo" /></Link>
            </div>
            <ul className='categories-navbar'>
                <li><NavLink to={'/'} className={nav => nav.isActive ? 'section-active' : 'section-one'}>Inicio</NavLink></li>
                <li><NavLink to={'/category/club'} className={nav => nav.isActive ? 'section-active' : 'section-one'}>Club</NavLink></li>
                <li><NavLink to={'/category/seleccion'} className={nav => nav.isActive ? 'section-active' : 'section-one'}>Seleccion</NavLink></li>
            </ul>
            <ul className='login-register-navbar'>
                <li><NavLink to={'/login'} className={nav => nav.isActive ? 'section-active' : 'section-two'}>Login</NavLink></li>
                <li><NavLink to={'/register'} className={nav => nav.isActive ? 'section-active' : 'section-two'}>Register</NavLink></li>
            </ul>
            <CartWidget />
        </div>
    );
}

export default NavBar;