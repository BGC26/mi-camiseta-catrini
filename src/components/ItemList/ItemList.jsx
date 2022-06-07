import React from 'react';
import Item from '../Item/Item';
import './ItemList.css';

const ItemList = ({ items }) => {
    return (
        <div className='item-list'>
            <div className='item-list-title'>
                <h1>Selecciona tu camiseta</h1>
            </div>
            { items.map(item => <Item item={item} key={item.id} />) }
        </div>
    );
};

export default ItemList;