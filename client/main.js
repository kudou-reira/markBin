import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import { Bins } from '../imports/collections/bins';
import BinsList from './components/bins/binsList';
import BinsMain from './components/bins/binsMain';

//import { Router, IndexRoute, browserHistory } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//:binId sets up a parameter
//BinsMain gets a prop in the form of binId

const routes = (
    
    <Router>
        <App>
            <Switch>
                <Route path="/bins/:binId" component={BinsMain} />
                <Route exact path="/" component={BinsList} />
            </Switch>
        </App>
    </Router>

);

Meteor.startup(() => {
    ReactDOM.render(routes, document.querySelector('.render-target'));
});