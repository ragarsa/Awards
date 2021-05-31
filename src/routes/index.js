import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';

import MovieDetail from '../views/MovieDetail/MovieDetail';


function Routes() {
    return (
        
        <Switch>
            <Route exact path='/home' component={Home} />
            <Route exact path='/home/:id' component={MovieDetail} />
            <Route path='/' render = {() => <Redirect to='/home'/>}/>
        </Switch>

    )
};

export default Routes;