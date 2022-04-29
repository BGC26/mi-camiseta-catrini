import React, { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import camJuv from '../../assets/camiseta-clu-1.jpg';
import camEsp10 from '../../assets/camiseta-sel-1.jpg';
import camBra86 from '../../assets/camiseta-sel-2.jpg';
import camArg14 from '../../assets/camiseta-sel-3.jpg';


const ItemDetailContainer = () => {

    function getItem() {
        const promise = new Promise((resolve, reject) => {
            const productsList = [
                {
                    id: 1,
                    title: "Camiseta Nike Titular Juventus 2015",
                    price: "$10.450",
                    stock: "2",
                    image: camJuv
                },
                {
                    id: 2,
                    title: "Camiseta Adidas Titular España 2010",
                    price: "$11.300",
                    stock: "2",
                    image: camEsp10
                },
                {
                    id: 3,
                    title: "Camiseta Topper Titular Brasil 1986",
                    price: "$14.600",
                    stock: "1",
                    image: camBra86
                },
                {
                    id: 4,
                    title: "Camiseta Adidas Titular Argentina 2014",
                    price: "$12.150",
                    stock: "3",
                    image: camArg14
                }
            ];
            setTimeout(() => {
                resolve(productsList.find(product => product.id));
            }, 2000);
        });
        return promise;
    }

    const [myItem, setItem] = useState({});

    useEffect(() => {
        getItem()
        .then(res => {
            setItem(res);
        })
        .catch(err => {
            console.log(err)
        })
    }, {});

    return (
        <div className='item-detail-container'>
            <ItemDetail item={ myItem } />
       </div>
    );
};

export default ItemDetailContainer;