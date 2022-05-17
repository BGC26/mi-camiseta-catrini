import React from 'react';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import LogoCarrito from '../../assets/shopping-cart.png';
import { useCartContext } from '../../context/CartContext';

const CartWidget = () => {

    const { totalItems } = useCartContext();

    return (
        <Link to="/cart">
            <img src={ LogoCarrito } className="cart-widget" alt="" />
            <span className='products-cart'>{totalItems()}</span>
        </Link>
    );
}; 

export default CartWidget;