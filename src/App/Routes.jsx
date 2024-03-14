import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import history from '../browserHistory'
import Projects from '../Projects'
import Authenticate from '../Auth/Authenticate'
import PageError from '../shared/components/PageError'

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Redirect exact from="/" to="/projects" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/projects" component={Projects} />
      <Route component={PageError} />
    </Switch>
  </Router>
)

export default Routes
