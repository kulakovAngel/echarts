import React from 'react';
import { connect } from 'react-redux';

import { DEVELOPER, CONTACTS } from './../../consts';
import { setTitle } from './../../helpers';

function PageAbout(props) {
    
    setTitle('About', props.pageTitle.title, props.dispatch);

    return (
        <>
            <section>
                <h2>The Echarts example</h2>
                <p>The service provides simple persons data entry and plotting the <a href='https://echarts.apache.org/examples/en/index.html'>Echart</a>.</p>
            </section>
            <section>
                <h2>Development</h2>
                <p>The Service developed by {DEVELOPER}.</p>
                <p>Contacts: {CONTACTS}</p>
                <p>All rights reserved.</p>
            </section>
        </>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);


export default connect(mapStateToProps)(PageAbout);