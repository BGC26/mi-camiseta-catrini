import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className='loader'>
            <div className='spiner'></div>
            <div className='loading'><p>Cargando...</p></div>
        </div>
    );
};

export default Loader;