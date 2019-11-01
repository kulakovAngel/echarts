import React from 'react';

import { DEVELOPER, CONTACTS } from './../../../consts';

import './index.css';

const component = 'document-footer';

function Footer() {
    return (
        <footer className={component}>
            <section className={`${component}__section`}>
                <div>
                    <h4>All rights reserved</h4>
                    <p>&copy;{DEVELOPER}, {new Date().getFullYear()}</p>
                </div>
            </section>
            <section className={`${component}__section`}>
                <div>
                    <h4>Contacts:</h4>
                    <p>{CONTACTS}</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;