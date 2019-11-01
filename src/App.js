import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './pages/PageHome';
import PageViewList from './pages/PageViewList';
import PageViewEcharts from './pages/PageViewEcharts';
import PageAbout from './pages/PageAbout';
import PageNotFound from './pages/PageNotFound';

import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';
import Error from './components/Error';

import './App.css';

function App() {
    return (
        <Router>
            <Error />
            <Header />
            <main className='document-main'>
                <Switch>
                    <Route exact path='/' component={PageHome} />
                    <Route path='/list' component={PageViewList} />
                    <Route path='/echarts' component={PageViewEcharts} />
                    <Route path='/about' component={PageAbout} />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </main>
            <Footer />
        </Router>
    );
}

export default App;