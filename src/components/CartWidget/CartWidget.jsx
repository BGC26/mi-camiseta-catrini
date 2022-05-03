import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import LogoCarrito from '../../assets/shopping-cart.png';

const CartWidget = () => {
    return (
        <Link to="/cart"><img src={ LogoCarrito } className="cart-widget" alt="" /></Link>
    );
}; 

export default CartWidget;