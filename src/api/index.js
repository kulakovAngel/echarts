import axios from 'axios';
import { API_URL } from './../consts.js';

export const fetchPersons = () => (
    axios.get(`${API_URL}/persons`)
    .then(res => (res.data))
);

export const fetchSinglePerson = (person) => (
    axios.get(`${API_URL}/persons/${person}`)
    .then(res => (res.data))
);

//receiving data piecemeal
//export const fetchPersons = ({offset=1, amount=10}) => (
//    axios.get(`${API_URL}/persons/?offset=${offset}&amount=${amount}`)
//    .then(res => (res.data))
//);

export const postPerson = (person) => (
    axios.post(`${API_URL}/persons`, person)
    .then(res => (res.data) )
);