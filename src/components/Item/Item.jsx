import React from 'react';
import './Item.css';

const Item = ({ item }) => {
    return (
        <div className='item-contenedor'>
            <img className="item-img" src={ item?.image } alt="imgProducto" />
            <div className='item-title'>{ item?.title }</div>
            <div className='item-price-stock'>
                <div className='item-price'>{ item?.price }</div>
                <div className='item-stock'>Stock: { item?.stock }</div>
            </div>
            <a href="#"><button class="item-button">Ver detalle</button></a>
        </div>
    );
};

export default Item;