import React from 'react';
import './CartWidget.css';
import LogoCarrito from '../../assets/shopping-cart.png';

const CartWidget = () => {
    return (
        <a href="#"><img src={ LogoCarrito } className="cart-widget" alt="" /></a>
    );
}; 

export default CartWidget;