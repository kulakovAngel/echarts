import axios from 'axios';
import { API_URL } from './../consts.js';

export const getAllPersons = () => (
    axios.get(`${API_URL}/persons`)
    .then(res => res.data)
);

export const getSinglePerson = (personId) => (
    axios.get(`${API_URL}/persons/${personId}`)
    .then(res => res.data)
);

//receiving data piecemeal
//export const fetchPersons = ({offset=1, amount=10}) => (
//    axios.get(`${API_URL}/persons/?offset=${offset}&amount=${amount}`)
//    .then(res => (res.data))
//);

export const postPerson = (person) => (
    axios.post(`${API_URL}/persons`, person)
    .then( res => res.status)
);

//export const postPerson = (person) => (
//    fetch(`${API_URL}/persons`, {
//        //mode: 'no-cors',
//        method: 'POST',
//        //headers: { 'Content-Type': 'application/json;charset=utf-8' },
//        body: JSON.stringify(person)
//    })
//    .then(res => res.json() )
//);