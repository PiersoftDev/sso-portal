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
      <div className="projects-container">
        <Header search={search} setSearch={setSearch} />
        <List search={search} />
      </div>

      <Route
        path={`${match.path}/features`}
        render={() => <div> Features </div>}
      />
      <Route
        path={`${match.path}/pricing`}
        render={() => <div> pricing </div>}
      />
      <Route
        path={`${match.path}/setting`}
        render={() => <div> setting </div>}
      />
      <Route path={`${match.path}/`} render={() => <div> Projects </div>} />
    </div>
  )
}
export default Dashboard
