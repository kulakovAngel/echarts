import React from 'react';
import { connect } from 'react-redux';

import './index.css';

function Error (props) {
    const { errors } = props;
    const errorExist = (Object.keys(errors).length) ? true : false;
    return (
        <>
            {errorExist && (
                <div className='error'>
                    <h4 className='error__heading'>Error:</h4>
                    <p className='error__message'>{errors[Object.keys(errors)[0]]}</p>
                </div>
            )}
        </>
    );
}

const mapStateToProps = state => (
    { errors: state.errors }
);

export default connect(mapStateToProps)(Error);