import React from 'react';
import { Link } from 'react-router-dom';
import './ButtonReturn.css';

const ButtonReturn = () => {
    return (
        <div>
            <Link to='/'><button className='cart-return-button'>Volver al inicio</button></Link>
        </div>
    );
};

export default ButtonReturn;