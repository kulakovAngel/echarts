import React from 'react';
import { Field, reduxForm } from 'redux-form';

import './style.css';

const component = 'adding-form';

class AddingForm extends React.Component {
    
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {};
    }
    
    onSubmit(values) {
        if (values.name && values.surname && values.age && !isNaN(values.age)) {
            this.setState({valid: true, message: 'Data is being sent...'});
            this.props.dispatch({
                type: 'POST_PERSON',
                payload: values
            });
        } else {
            this.setState({valid: false, message: 'All fields must be required!'});
        }
    }
    
    render() {
        const { handleSubmit, pristine, reset, submitting } = this.props;
        const { valid, message } = this.state;
        return (
            <form onSubmit={handleSubmit(this.onSubmit)} className={component}>
                <Field
                    name='name'
                    component='input'
                    type='text'
                    placeholder='Name*'
                />
                <Field
                    name='surname'
                    component='input'
                    type='text'
                    placeholder='Surname*'
                />
                <Field
                    name='age'
                    component='input'
                    type='number'
                    placeholder='Age*'
                />
                <button type='submit' disabled={pristine || submitting}>Add</button>
                <button type='button' disabled={pristine || submitting} onClick={reset}>Clear form</button>
                {!valid && <div className={`${component}__message`}>{message}</div>}
            </form>
        );
    }
}

export default reduxForm ({
    form: 'adding_person'
}) (AddingForm);