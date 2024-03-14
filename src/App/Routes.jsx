import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import history from '../browserHistory'
import Authenticate from '../Auth/Authenticate'
import PageError from '../shared/components/PageError'
import Dashboard from '../Dashboard'
import Navbar from '../Dashboard/Navbar'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/projects" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/" component={Dashboard} />
      <Route component={PageError} />
    </Switch>
  </Router>
)

export default Routes
