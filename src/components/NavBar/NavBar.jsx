import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link, NavLink } from 'react-router-dom';
import LogoApp from '../../assets/micamiseta.png';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {

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