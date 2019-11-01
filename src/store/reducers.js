import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';

const personsReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PERSONS':
            return action.payload;
        case 'ADD_SINGLE_PERSON':
            const [...newState] = state;
            newState.push(action.payload)
            return newState;
        default:
            return state;
    }
}

const failedReducer = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_PERSONS_FAILED':
            return (action.message) ? {[action.type]: action.message } : {};
        case 'ADD_SINGLE_PERSON_FAILED':
            return (action.message) ? {[action.type]: action.message } : {};
        default:
            return state;
    }
}


const reducers = combineReducers({
    persons: personsReducer,
    errors: failedReducer,
    form: formReducer
});

export default reducers;

