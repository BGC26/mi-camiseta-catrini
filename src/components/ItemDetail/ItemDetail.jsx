import React from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className='item-detail'>
            <img className="item-detail-img" src={ item?.image } alt="imgProducto" />
            <div className='item-detail-information'>
                <div className='item-detail-description'>{ item?.title }</div>
                <div className='item-detail-price'>{ item?.price }</div>
                <div className='item-detail-stock'>Stock: { item?.stock }</div>
                <ItemCount stock={ item?.stock } initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;