import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import camJuv from '../../assets/camiseta-clu-1.jpg';
import camEsp10 from '../../assets/camiseta-sel-1.jpg';
import camBra86 from '../../assets/camiseta-sel-2.jpg';
import camArg14 from '../../assets/camiseta-sel-3.jpg';


const ItemDetailContainer = () => {

    function getItem(id) {
        const promise = new Promise((resolve, reject) => {
            const productsList = [
                {
                    id: 1,
                    title: "Camiseta Nike Titular Juventus 2015",
                    price: "$10.450",
                    stock: "2",
                    category: "club",
                    image: camJuv
                },
                {
                    id: 2,
                    title: "Camiseta Adidas Titular España 2010",
                    price: "$11.300",
                    stock: "2",
                    category: "seleccion",
                    image: camEsp10
                },
                {
                    id: 3,
                    title: "Camiseta Topper Titular Brasil 1986",
                    price: "$14.600",
                    stock: "1",
                    category: "seleccion",
                    image: camBra86
                },
                {
                    id: 4,
                    title: "Camiseta Adidas Titular Argentina 2014",
                    price: "$12.150",
                    stock: "3",
                    category: "seleccion",
                    image: camArg14
                }
            ];
            const item = productsList.filter(item => item.id === parseInt(id))
            setTimeout(() => {
                resolve(item[0]);
            }, 2000);
        });
        return promise;
    }

    const [loading, setLoading] = useState(false);
    const [myItem, setItem] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true)
        getItem(id)
        .then(res => {
            setItem(res);
            setLoading(false);
        })
        .catch(err => {
            console.log(err)
        })
        .finally(() => {
            setLoading(false)
        })
    }, [id]);

    return (
        <div className='item-detail-container'>
            { loading && <Loader/> }
            <ItemDetail item={ myItem } />
       </div>
    );
};

export default ItemDetailContainer;