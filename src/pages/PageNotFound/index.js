import React from 'react';
import { connect } from 'react-redux';

import { setTitle } from './../../helpers';

function PageNotFound(props) {
    
    setTitle('Page Not Found', props.pageTitle.title, props.dispatch);
    
    return (
        <h2>404 Error!</h2>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);

export default connect(mapStateToProps)(PageNotFound);