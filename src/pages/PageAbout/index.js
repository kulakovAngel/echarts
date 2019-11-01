import React from 'react';

import { DEVELOPER, CONTACTS } from './../../consts';

function PageAbout() {
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

export default PageAbout;