import React from 'react';
import './ItemListContainer.css';
import ItemCount from '../ItemCount/ItemCount';

/*
<h2>{greeting}</h2>
*/

const ItemListContainer = ({greeting}) => {
    return (
        <div className='item-list-container'>
       <ItemCount stock={3} initial={1} />
       </div>
    );
};

export default ItemListContainer;