import React from 'react';
import { connect } from 'react-redux';

import Container from './../../components/layouts/Container';
import Echart from './../../components/Echart';
import AddingForm from './../../components/AddingForm';
import { setTitle } from './../../helpers';

function PageViewEcharts(props) {
    
    setTitle('Echarts', props.pageTitle.title, props.dispatch);
    
    return (
        <Container>
            <Echart />
            <AddingForm />
        </Container>
    );
}

const mapStateToProps = state => (
    { pageTitle: state.pageTitle }
);

export default connect(mapStateToProps)(PageViewEcharts);