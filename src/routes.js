import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Tasks from './containers/Tasks';
import Add from './containers/Add';
import Details from './containers/Details';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Tasks}/>
            <Route path='/add' component={Add}/>
            <Route path='/details/:id' component={Details}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;