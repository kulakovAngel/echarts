import React from 'react';

import NavLinks from './../NavLinks';
import { DEVELOPER, CONTACTS } from './../../../consts';

import './style.css';

const component = 'document-footer';

function Footer() {
    return (
        <footer className={component}>
            <section className={`${component}__section`}>
                <h4 className={`${component}__heading`}>The Echarts example</h4>
                <p>&copy;{DEVELOPER}, {new Date().getFullYear()}</p>
                <p>All rights reserved</p>
            </section>
            <section className={`${component}__section`}>
                <h4 className={`${component}__heading`}>Quick links:</h4>
                <NavLinks />
            </section>
            <section className={`${component}__section`}>
                <h4 className={`${component}__heading`}>Contacts:</h4>
                <p>{CONTACTS}</p>
            </section>
        </footer>
    );
}

export default Footer;