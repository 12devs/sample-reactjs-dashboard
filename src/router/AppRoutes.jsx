import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';

const AppRoutes = () => (
    <Switch>
        <Route exact path='/screens/:screen' component={App}/>
    </Switch>
)

export default AppRoutes;
