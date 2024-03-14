import { useState } from 'react'
import { Route, useRouteMatch } from 'react-router-dom'
import styled from 'styled-components'
import Header from './Header'
import List from './List'
import Navbar from './Navbar'

const Dashboard = () => {
  const match = useRouteMatch()
  const [search, setSearch] = useState('')

  console.log(match)

  return (
    <div>
      <Navbar />

      <Route
        path={`/projects`}
        render={() => (
          <div className="projects-container">
            <Header search={search} setSearch={setSearch} />
            <List search={search} />
          </div>
        )}
      />
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
    </div>
  )
}
export default Dashboard
