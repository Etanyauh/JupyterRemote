import { Route, Switch } from 'react-router-dom'
import React from 'react'

// APP Components
import Main from './Main/Index'
import NotFound from './Main/NotFound'
import Home from './Home/Index'

const Routes = () => (
    <Main>
        <Switch>
            <Route exact path='/' component={ Home } />
            <Route component={ NotFound } />
        </Switch>
    </Main>
)

export default Routes