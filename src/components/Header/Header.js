import React from 'react';
import logo from '../../assets/movie-logo.png'
import './Header.scss'

const CN = 'header';

export const Header = (props) => {
    return (
        <div className={`${CN}`}>
            {logo && <img src={logo} alt="Movie Logo"/>}
        </div>
    );
};