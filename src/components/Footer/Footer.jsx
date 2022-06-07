import React from 'react';
import { Link } from 'react-router-dom';
import LogoApp from '../../assets/micamiseta.png';
import FaceIcon from '../../assets/facebook.png';
import IgIcon from '../../assets/instagram.png';
import WhatIcon from '../../assets/whatsapp.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
            <Link to="/"><img src={ LogoApp } className='footer-logo' alt='imgLogo' /></Link>
            </div>
            <h3>Seguinos en redes</h3>
            <div className='social-media'>
                <img src={FaceIcon} className='media-icon' alt='imgIcon'/>
                <img src={IgIcon} className='media-icon' alt='imgIcon'/>
                <img src={WhatIcon} className='media-icon' alt='imgIcon'/>
            </div>
            <p>Copyright © 2022 MiCamiseta S.R.L</p>
        </div>
    );
};

export default Footer;