import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemCount.css';

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);
    
    function increaseButton() {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    function decreaseButton() {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    function sendingCart() {
        if (count <= stock){
            onAdd(count)
        }
    }

    return (
        <div className='item-count-container'>
            <div className='item-count'>
                <h4>Cantidad: </h4>
                <input value={count} />
                <button onClick={increaseButton}>+</button>
                <button onClick={decreaseButton}>-</button>
            </div>
            <div className='item-cart-button'>
                <Link to="/cart"><button onClick={sendingCart}>Agregar al carrito</button></Link>
            </div>
        </div>
    );
};

export default ItemCount;