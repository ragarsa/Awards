import {Switch, Route, Redirect}  from 'react-router-dom'
import Home from '../components/Home/Home'
// import Home from '../views/Home'
import MovieDetail from '../views/MovieDetail/MovieDetail'
// import MovieForm from '../views/MovieForm'
// import CharacterForm from '../views/CharacterForm'

function Routes() {
    return (
        <Switch>
            <Route exact path = '/' component={Home} />
            <Route exact path = '/:id' component={MovieDetail}/>
        </Switch>
    )
};

export default Routes;