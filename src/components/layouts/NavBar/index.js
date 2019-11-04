import React from 'react';
import { Link } from 'react-router-dom';

import NavLinks from './../NavLinks';

import './style.css';
import logo from './logo64.png';

const component = 'document-nav';

function NavBar(props) {
    return (
        <nav className={component}>
            <Link to='/' className={`${component}__logo-container`}>
                <img src={logo} alt='logo' />
            </Link>
            <NavLinks className={component} />
            <Link to='/' className={`${component}__link-title`}>
                <h2>The Echarts example</h2>
            </Link>
        </nav>
    )
}

export default NavBar;