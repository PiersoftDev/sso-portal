import { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import List from './List'
import Navbar from './Navbar'

const Projects = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <Navbar />
      <div className="projects-container">
        <Header search={search} setSearch={setSearch} />
        <List search={search} />
      </div>
    </div>
  )
}
export default Projects
