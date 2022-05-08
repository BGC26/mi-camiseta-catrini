import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ item }) => {

    const [quantityProducts, setQuantityProducts] = useState(null);

    function addCart(quantityToCart) {
        setQuantityProducts(quantityToCart)
    }

    return (
        <div className='item-detail'>
            <img className="item-detail-img" src={ item?.image } alt="imgProducto" />
            <div className='item-detail-information'>
                <div className='item-detail-description'>{ item?.title }</div>
                <div className='item-detail-price'>{ item?.price }</div>
                <div className='item-detail-stock'>Stock: { item?.stock }</div>
                { quantityProducts ? 
                <Link to='/cart'><button className='finishing-button'>Finalizar compra (Unidades: { quantityProducts })</button></Link> : 
                <ItemCount stock={ item?.stock } initial={1} onAdd={ addCart } /> 
                }
            </div>
        </div>
    );
};

export default ItemDetail;