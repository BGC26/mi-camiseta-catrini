import React from 'react';
import { useCartContext } from '../../context/CartContext';
import './CartItem.css';

const CartItem = ({ item }) => {

    const { removeItem } = useCartContext();

    return (
        <div className='cart-item-container'>
            <div className='cart-item-quantity'>{item?.quantity}</div>
            <img src={ item?.image } className='cart-item-img' alt="imgProducto" />
            <div className='cart-item-title'>{item?.title}</div>
            <div className='cart-item-price'>${item?.price}</div>
            <button onClick={() => removeItem(item.id)} className='cart-item-button'>Eliminar</button>
        </div>
    );
};

export default CartItem;