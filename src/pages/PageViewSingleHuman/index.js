import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

class PageViewSingleHuman extends React.Component {
    
    componentDidMount() {
        const id = this.props.match && this.props.match.params.id;
        this.props.dispatch({
            type: "GET_SINGLE_PERSON",
            payload: id
        });
    }
    
    render() {
        const { id, name, surname, age } = this.props.person;

        this.props.dispatch({
            type: "SET_PAGE_TITLE",
            payload: `${name} ${surname}`
        });
        
        return (
            <section>
                <Link to='/list'>&#8592; to the list</Link>
                <h2>{`${name} ${surname}`}</h2>
                <p>{`${name} ${surname}, `}<b>{age}</b> years old</p>
                <small>{`DB key: ${id}`}</small>
            </section>
        )
    }
}

const mapStateToProps = state => (
    { person: state.person }
);

export default connect(mapStateToProps)(PageViewSingleHuman);