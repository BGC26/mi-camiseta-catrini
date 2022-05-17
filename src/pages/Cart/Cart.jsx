import React from 'react';
import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { productList, totalPrice } = useCartContext();

    return (
        <div className='cart-container'>
            { productList.map((item) => (<CartItem key={item.id} item={item} />))}
            { productList.length > 0 ? (
            <>
            <h2 className='cart-total-products'>Total: {totalPrice()}</h2>
            </> ) : (
            <>
            <h1 className='cart-no-products-title'>No hay productos seleccionados</h1>
            <Link to='/'><button className='cart-return-button'>Volver al inicio</button></Link>
            </>
            )
            }
        </div>
    );
};

export default Cart;