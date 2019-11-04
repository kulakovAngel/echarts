import React from 'react';
import { connect } from 'react-redux';

import './style.css';

const component = 'document-header';

function Header(props) {
    const { pageTitle } = props;
    document.title = 'Echarts example – ' + pageTitle.title;
    
    return (
        <header className={component}>
            <h1 className={`${component}__page-title`}>{pageTitle.title}</h1>
        </header>
    );
}

const mapStateToProps = state => ({
    pageTitle: state.pageTitle
});

export default connect(mapStateToProps)(Header);