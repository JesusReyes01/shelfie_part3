import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Form from './Components/Form/Form';
import Dashboard from './Components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route component={Dashboard} exact path='/' />
        <Route component={Form} exact path='/add' />
        <Route component={Form} exact path='/edit/:id' />
    </Switch>
)