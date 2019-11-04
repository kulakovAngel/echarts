import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PageHome from './pages/PageHome';
import PageViewList from './pages/PageViewList';
import PageViewSingleHuman from './pages/PageViewSingleHuman';
import PageViewEcharts from './pages/PageViewEcharts';
import PageAbout from './pages/PageAbout';
import PageNotFound from './pages/PageNotFound';

import Header from './components/layouts/Header';
import NavBar from './components/layouts/NavBar';
import Footer from './components/layouts/Footer';
import Message from './components/Message';

import './App.css';

function App() {
    return (
        <Router>
            <NavBar />
            <div className='main-content'>
                <Header />
                <main className='document-main'>
                    <Switch>
                        <Route exact path='/' component={PageHome} />
                        <Route exact path='/list' component={PageViewList} />
                        <Route path='/list/:id' component={PageViewSingleHuman} />
                        <Route path='/echarts' component={PageViewEcharts} />
                        <Route path='/about' component={PageAbout} />
                        <Route path='*' component={PageNotFound} />
                    </Switch>
                </main>
                <Footer />
            </div>
            <Message />
        </Router>
    );
}

export default App;