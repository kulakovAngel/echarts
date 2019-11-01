import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const component = 'persons-list';

class PersonsList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch({
            type: "PERSONS_FETCH"
        });
    }
    
    render() {
        const { persons } = this.props;
        
        return (
            <ol className={component}>
                {
                    persons && persons.map((item) => (
                        <li key={item.id} className={`${component}__item`}>{`${item.name} ${item.surname}, ${item.age}`} years old</li>
                    ))
                }
            </ol>
        );
    }
}

const mapStateToProps = state => (
    { persons: state.persons }
);

export default connect(mapStateToProps)(PersonsList);