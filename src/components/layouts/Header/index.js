import React, { useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import './index.css';
import logo from './logo64.png';

const component = 'document-header';

function Header(props) {
    const path = props.location.pathname;
    
    const pagesTitles = {
        '/': 'Home Page',
        '/list': 'List Page',
        '/echarts': 'Echarts Page',
        '/about': 'About Page'
    }
    
    const title = (path in pagesTitles) ? pagesTitles[path] : 'Not Found 404';
    
    useEffect(() => {
        document.title = 'Echarts example – ' + title;
    });
    
    return (
        <header className={component}>
            <nav className={`${component}__nav`}>
                <Link to='/' className='logo'>
                    <img src={logo} alt='logo' className='logo__img' />
                </Link>
                <ul className='nav'>
                    <li className='nav__item'><Link to='/'>Home</Link></li>
                    <li className='nav__item'><Link to='/list'>List</Link></li>
                    <li className='nav__item'><Link to='/echarts'>Echarts</Link></li>
                    <li className='nav__item'><Link to='/about'>About</Link></li>
                </ul>
            </nav>
            <h1 className={`${component}__page-title`}>{title}</h1>
        </header>
    );
}

export default withRouter(Header);