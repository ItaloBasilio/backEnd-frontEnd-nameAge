import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Users from './containers/Users';


function Routes() {

    return (
        <Router>
            <Switch>{/* Aumentar a performace */}
                <Route exact path="/" component={Home} />
                <Route exact path="/usuarios" component={Users} />
            </Switch>
        </Router>
    );

}

export default Routes;