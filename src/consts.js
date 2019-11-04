const BASE_URL = process.env.NODE_ENV === 'development' ? 'http://echarts' : 'http://echarts.000webhostapp.com';

export const API_URL = BASE_URL + '/api';

export const DEVELOPER = 'Kulakov Valery';

export const CONTACTS = 'Hrodno, Belarus';

export const PAGES_TITLES = {
    '/': 'Home Page',
    '/list': 'List',
    '/echarts': 'Echarts',
    '/about': 'About This Project'
}