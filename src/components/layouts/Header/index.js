import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

import { PAGES_TITLES } from './../../../consts';

import './index.css';

const component = 'document-header';

function Header(props) {
    const { pathname: path } = props.location;
    const title = (path in PAGES_TITLES) ? PAGES_TITLES[path] : 'Page Not Found';
    document.title = 'Echarts example – ' + title;
    
    return (
        <header className={component}>
            <h1 className={`${component}__page-title`}>{title}</h1>
        </header>
    );
}

export default withRouter(Header);