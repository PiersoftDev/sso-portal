import React from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'

import history from '../browserHistory'
import Authenticate from '../Auth/Authenticate'
import PageError from '../shared/components/PageError'
import Dashboard from '../Dashboard'
import Navbar from '../Dashboard/Navbar'

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Redirect exact from="/" to="/projects" />
      <Route path="/authenticate" component={Authenticate} />
      <Route path="/projects" component={Dashboard} />
      <Route
        path={`/features`}
        render={() => (
          <div className="not-implemented"> Features Not Implemented </div>
        )}
      />
      <Route
        path={`/pricing`}
        render={() => (
          <div className="not-implemented"> pricing Not Implemented </div>
        )}
      />
      <Route
        path={`/settings`}
        render={() => (
          <div className="not-implemented"> setting Not Implemented </div>
        )}
      />
      {/* <Route path={`${match.path}/`} render={() => <div> Projects </div>} /> */}
      <Route component={PageError} />
    </Switch>
  </Router>
)

export default Routes
