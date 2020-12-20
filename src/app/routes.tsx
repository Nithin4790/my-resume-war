import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import DashboardPage from 'pages/Dashboard'

const NoMatch = () => <div>Page not found.</div>

export const Routes: React.FunctionComponent = () => {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/dashboard" />

        <Route path="/dashboard" component={DashboardPage} />

        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  )
}
