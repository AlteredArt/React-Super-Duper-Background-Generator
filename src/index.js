import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './Components/Home'

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Router path='/home' component={Home} />
        </Switch>
    </Router>,
    document.getElementById('root'));


