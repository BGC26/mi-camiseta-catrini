import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem/CartItem';
import ButtonReturn from '../../components/ButtonReturn/ButtonReturn';
import './Cart.css';

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
            <div className='cart-checkout-button'>
                <Link to='/checkout'><button>Finalizar compra</button></Link>
            </div>
            </> ) : (
            <>
            <h1 className='cart-no-products-title'>No hay productos seleccionados</h1>
            <ButtonReturn />
            </>
            )
            }
        </div>
    );
};

export default Cart;