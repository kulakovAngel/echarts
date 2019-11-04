import React from 'react';
import { connect } from 'react-redux';

import Container from './../../components/layouts/Container';
import PersonsList from './../../components/PersonsList';
import AddingForm from './../../components/AddingForm';
import { setTitle } from './../../helpers';

function PageViewList(props) {
    
    setTitle('Persons List', props.pageTitle.title, props.dispatch);
    
    return (
        <Container>
            <PersonsList />
            <AddingForm />
        </Container>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);

export default connect(mapStateToProps)(PageViewList);