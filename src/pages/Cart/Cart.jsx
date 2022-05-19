import React from 'react';
import './Cart.css';
import CartItem from '../../components/CartItem/CartItem';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { productList, totalPrice } = useCartContext();

    return (
        <div className='cart-container'>
            <div className='cart-products'>
            { productList.map((item) => (<CartItem key={item.id} item={item} />))}
            </div>
            { productList.length > 0 ? (
            <>
            <div className='cart-total-products'>
            <h2>Total: ${totalPrice()}</h2>
            </div>
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