import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './style.css';

const component = 'persons-list';

class PersonsList extends React.Component {
    
    componentDidMount() {
        this.props.dispatch({
            type: "GET_ALL_PERSONS"
        });
    }
    
    render() {
        const { persons } = this.props;
        return (
            <ol className={component}>
                {persons.map((item) => (
                    <li key={item.id} className={`${component}__item`}>
                        <Link to={`/list/` + item.id}>
                            {`${item.name} ${item.surname}, ${item.age}`} years old
                        </Link>
                    </li>
                ))}
            </ol>
        );
    }
}

const mapStateToProps = state => (
    { persons: state.persons }
);

export default connect(mapStateToProps)(PersonsList);