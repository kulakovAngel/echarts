import React from 'react';
import { connect } from 'react-redux';

import './style.css';

const component = 'error-message';

function ErrorContainer (props) {
    const { errors } = props;
    const errorExist = (Object.keys(errors).length) ? true : false;
    return (
        <>
            {errorExist && (
                <div className={`${component}`}>
                    <h4 className={`${component}__heading`}>Error:</h4>
                    <p className={`${component}__message`}>{errors[Object.keys(errors)[0]]}</p>
                </div>
            )}
        </>
    );
}

const mapStateToProps = state => (
    { errors: state.errors }
);

export default connect(mapStateToProps)(ErrorContainer);