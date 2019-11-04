import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

const personsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PERSONS':
            return action.payload;
        case 'ADD_PERSON_TO_ARRAY':
            const [...newState] = state;
            newState.push(action.payload)
            return newState;
        default:
            return state;
    }
}

const singlePersonReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_SINGLE_PERSON':
            return action.payload;
        default:
            return state;
    }
}

const errorsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_PERSONS_FAILED':
        case 'ADD_PERSON_TO_ARRAY_FAILED':
        case 'ADD_SINGLE_PERSON':
            return {[action.type]: action.message };
        case 'REMOVE_ERRORS':
            return {};
        default:
            return state;
    }
}

const setPageTitleReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SET_PAGE_TITLE':
            return {title: action.payload};
        default:
            return state;
    }
}

const reducers = combineReducers({
    persons: personsReducer,
    person: singlePersonReducer,
    errors: errorsReducer,
    pageTitle: setPageTitleReducer,
    form: formReducer,
});

export default reducers;

