import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ({ item }) => {

    const [quantityProducts, setQuantityProducts] = useState(null);
    const { addItem } = useCartContext();

    const addCart = (quantityToCart) => {
        setQuantityProducts(quantityToCart);
        addItem(item, quantityToCart);
    }

    return (
        <div className='item-detail'>
            <img className="item-detail-img" src={ item?.image } alt="imgProducto" />
            <div className='item-detail-information'>
                <div className='item-detail-description'>{ item?.title }</div>
                <div className='item-detail-price'>${ item?.price }</div>
                <div className='item-detail-stock'>Stock: { item?.stock }</div>
                { quantityProducts ? 
                <Link to='/cart'><button className='finishing-button'>Agregar al carrito (Unidades: { quantityProducts })</button></Link> : 
                <ItemCount stock={ item?.stock } initial={1} onAdd={ addCart } /> 
                }
            </div>
        </div>
    );
};

export default ItemDetail;