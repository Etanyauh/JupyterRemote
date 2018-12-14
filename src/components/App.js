import { Route, Switch } from 'react-router-dom'
import React from 'react'

// APP Components
import Main from './Main/Index'
import NotFound from './Main/NotFound'
import Home from './Home/Index'
import Auth from './Auth/Auth'

const Routes = () => (
    <Main>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/auth' component={ Auth } />
            <Route component={ NotFound } />
        </Switch>
    </Main>
)

export default Routes