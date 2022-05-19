import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import './ItemDetailContainer.css';


const ItemDetailContainer = () => {

    function getItem(id) {
        const db = getFirestore();

        const itemReference = doc(db, 'items', id);

        return getDoc(itemReference);
    }

    const [loading, setLoading] = useState(false);
    const [myItem, setItem] = useState({});
    const { id } = useParams();
    
    useEffect(() => {
        setLoading(true)
        getItem(id)
        .then(snapshot => {
            setItem({ ...snapshot.data(), id: snapshot.id });
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