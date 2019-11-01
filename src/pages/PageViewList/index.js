import React from 'react';

import PersonsList from './../../components/PersonsList';
import AddingForm from './../../components/AddingForm';

function PageViewList(props) {
    return (
        <>
            <PersonsList />
            <AddingForm />
        </>
    );
}

export default PageViewList;