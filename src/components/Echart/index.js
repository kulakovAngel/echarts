import React from 'react';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';

class Echart extends React.Component {
  
    componentDidMount() {
        this.props.dispatch({
            type: "PERSONS_FETCH"
        });
    }
    
    render() {
        const { persons } = this.props;
        return (
            <ReactEcharts
                option={{
                        xAxis: {
                            type: 'category',
                            data: persons.map((item) => (item.name + " " + item.surname))
                        },
                        yAxis: { type: 'value' },
                        series: [{
                            type: 'bar',
                            data: persons.map((item) => (+item.age))
                        }]
                }}
            />
        );
    }
}

const mapStateToProps = state => (
    { persons: state.persons }
);

export default connect(mapStateToProps)(Echart);