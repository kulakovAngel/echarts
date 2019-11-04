import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchPersons, postPerson } from './../api';

function* fetchPersonsSaga(action) {
    try {
        const persons = yield call(fetchPersons, action.payload);
        yield put({type: "ADD_PERSONS", payload: persons});
        yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "ADD_PERSONS_FAILED", message: e.message});
    }
}

function* postPersonSaga(action) {
    try {
        const person = yield call(postPerson, action.payload);
        yield put({type: "ADD_SINGLE_PERSON", payload: person});
        yield put({type: "REMOVE_ERRORS"});
    } catch (e) {
        yield put({type: "ADD_SINGLE_PERSON_FAILED", message: e.message});
    }
}

function* mySaga() {
    yield takeEvery("PERSONS_FETCH", fetchPersonsSaga);
    yield takeEvery("PERSONS_POST", postPersonSaga);
}

export default mySaga;