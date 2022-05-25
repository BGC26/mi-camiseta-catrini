import React from 'react';
import './NavBar.css';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import LogoApp from '../../assets/mi-camiseta-logo.png';
import { useCartContext } from '../../context/CartContext';

function NavBar() {

    const { totalItems } = useCartContext();

    return (
        <div className='navbar'>
            <div className='logo-content'>
            <Link to="/"><img src={ LogoApp } className="logo-navbar" alt="imgLogo" /></Link>
            </div>
            <div className='categories-navbar-content'>
                <ul className='categories-navbar'>
                    <li><NavLink to={'/'} className={nav => nav.isActive ? 'section-active' : 'section-one'}>Inicio</NavLink></li>
                    <li><NavLink to={'/category/club'} className={nav => nav.isActive ? 'section-active' : 'section-one'}>Club</NavLink></li>
                    <li><NavLink to={'/category/seleccion'} className={nav => nav.isActive ? 'section-active' : 'section-one'}>Seleccion</NavLink></li>
                </ul>
            </div>
            <div className='cartwidget-content'>
                { totalItems() > 0 && <CartWidget /> }
            </div>
        </div>
    );
}

export default NavBar;