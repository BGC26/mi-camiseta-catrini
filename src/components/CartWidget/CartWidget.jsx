import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import LogoCarrito from '../../assets/shopping-cart.png';
import './CartWidget.css';

const CartWidget = () => {

    const { totalItems } = useCartContext();

    return (
        <Link to="/cart">
            <img src={ LogoCarrito } className="navbar-cart-widget" alt="" />
            <span className='navbar-cart-products'>{totalItems()}</span>
        </Link>
    );
}; 

export default CartWidget;