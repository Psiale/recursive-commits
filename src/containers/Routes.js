import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom';
import env from 'react-dotenv'
import Fun from './Fun'
import Home from './Home'
import History from './History'
import { setHeader } from '../api/helpers';
const Routes = () => {
    setHeader(env.API_KEY)
    return (
        <>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/commit-history" component={History} />
            <Route path="/fun" component={Fun} />
          </Switch>
        </HashRouter>
        </>
    )
}

export default Routes;



