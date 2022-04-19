import React from 'react';
import './CartWidget.css';
import logoCarrito from '../../assets/shopping-cart.png'

const CartWidget = () => {
    return (
        <a href="#"><img src={logoCarrito} className="cart-widget" alt="" /></a>
    );
}; 

export default CartWidget;