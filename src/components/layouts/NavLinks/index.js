import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.css';

const component = 'nav';

function NavLinks() {
    return (
        <ul className={`${component}`}>
            <li className={`${component}__item`}>
                <NavLink exact to='/'>Home</NavLink>
            </li>
            <li className={`${component}__item`}>
                <NavLink to='/list'>List</NavLink>
            </li>
            <li className={`${component}__item`}>
                <NavLink to='/echarts'>Echarts</NavLink>
            </li>
            <li className={`${component}__item`}>
                <NavLink to='/about'>About</NavLink>
            </li>
        </ul>
    )
}

export default NavLinks;