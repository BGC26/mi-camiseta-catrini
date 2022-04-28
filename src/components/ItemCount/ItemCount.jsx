import React, { useState } from 'react';
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
                <input value={count} />
                <button onClick={increaseButton}>+</button>
                <button onClick={decreaseButton}>-</button>
            </div>
            <div className='item-cart-button'>
                <button onClick={sendingCart}>Agregar al carrito</button>
            </div>
        </div>
    );
};

export default ItemCount;