import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './index.css';
import logo from './logo64.png';

const component = 'document-nav';

function Nav() {
    return (
        <nav className={component}>
            <Link to='/' className={`${component}__logo-container`}>
                <img src={logo} alt='logo' />
            </Link>
            <ul className={`${component}__nav-list`}>
                <li className={`${component}__nav-item`}>
                    <NavLink exact to='/'>Home</NavLink>
                </li>
                <li className={`${component}__nav-item`}>
                    <NavLink to='/list'>List</NavLink>
                </li>
                <li className={`${component}__nav-item`}>
                    <NavLink to='/echarts'>Echarts</NavLink>
                </li>
                <li className={`${component}__nav-item`}>
                    <NavLink to='/about'>About</NavLink>
                </li>
            </ul>
            <Link to='/' className={`${component}__link-title`}>
                <h2>The Echarts example</h2>
            </Link>
        </nav>
    )
}

export default Nav;