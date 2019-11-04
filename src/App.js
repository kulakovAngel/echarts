import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './pages/PageHome';
import PageViewList from './pages/PageViewList';
import PageViewEcharts from './pages/PageViewEcharts';
import PageAbout from './pages/PageAbout';
import PageNotFound from './pages/PageNotFound';

import Header from './components/layouts/Header';
import Nav from './components/layouts/Nav';
import Footer from './components/layouts/Footer';
import ErrorContainer from './components/ErrorContainer';

import './App.css';

function App() {
    return (
        <Router>
            <ErrorContainer />
            <Nav />
            <div className='main-content'>
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
            </div>
        </Router>
    );
}

export default App;