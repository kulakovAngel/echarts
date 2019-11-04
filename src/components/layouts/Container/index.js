import React from 'react';

import './style.css';

function Container(props) {
    return (
        <div className='flex-container'>
            {props.children}
        </div>
    );
}

export default Container;