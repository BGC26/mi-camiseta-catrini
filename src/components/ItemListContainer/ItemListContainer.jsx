import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import camJuv from '../../assets/camiseta-clu-1.jpg';
import camEsp10 from '../../assets/camiseta-sel-1.jpg';
import camBra86 from '../../assets/camiseta-sel-2.jpg';
import camArg14 from '../../assets/camiseta-sel-3.jpg';
/* import ItemCount from '../ItemCount/ItemCount'; */

const ItemListContainer = ({/* greeting */}) => {
    
    function getProducts() {
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
                resolve(productsList);
            }, 2000);
        });
        return promise;
    }

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
        .then(res => {
            setProducts(res);
        })
    }, []);

    return (
        <div className='item-list-container'>
            {/* <h2>{greeting}</h2> */}
            {/* <ItemCount stock={3} initial={1} /> */}
            <ItemList items={ products } />
       </div>
    );
};

export default ItemListContainer;