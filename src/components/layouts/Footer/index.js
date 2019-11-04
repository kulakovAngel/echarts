import React from 'react';

import { DEVELOPER, CONTACTS } from './../../../consts';

import './index.css';

const component = 'document-footer';

function Footer() {
    return (
        <footer className={component}>
            <section className={`${component}__section`}>
                <div>
                    <h4 className={`${component}__heading`}>All rights reserved</h4>
                    <p>&copy;{DEVELOPER}, {new Date().getFullYear()}</p>
                </div>
            </section>
            <section className={`${component}__section`}>
                <div>
                    <h4 className={`${component}__heading`}>Quick links:</h4>
                    <ul>
                        <li>Home</li>
                        <li>List</li>
                        <li>Echarts</li>
                        <li>About</li>
                    </ul>
                </div>
            </section>
            <section className={`${component}__section`}>
                <div>
                    <h4 className={`${component}__heading`}>Contacts:</h4>
                    <p>{CONTACTS}</p>
                </div>
            </section>
        </footer>
    );
}

export default Footer;