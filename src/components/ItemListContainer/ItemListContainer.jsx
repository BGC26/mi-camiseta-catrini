import React from 'react';
import './ItemListContainer.css'

const ItemListContainer = (prop) => {
    return (
        <div className='itemList'>
        <h1>{prop.greeting}</h1>
        </div>
    );
};

export default ItemListContainer;