import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import ItemList from '../../components/ItemList/ItemList';
import Loader from '../../components/Loader/Loader';
import './ItemListContainer.css';


const ItemListContainer = () => {
    
    function getProducts(category) {
        const db = getFirestore();
        const itemCollection = collection(db, 'items');
        const q = category && query(itemCollection, where('category', '==', category));
        return getDocs(q || itemCollection);
    }

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)
        getProducts(categoryId)
        .then(snapshot => {
            setProducts(snapshot.docs.map(doc => { 
                return { ...doc.data(), id: doc.id } 
            }));
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
        })
        .finally(() => {
            setLoading(false)
        })
    }, [categoryId]);

    return (
        <div className='item-list-container'>
            { loading && <Loader/> }
            <ItemList items={ products } />
       </div>
    );
};

export default ItemListContainer;



