import styled from 'styled-components'
import amazonLogo from './amazon-logo.png'
import ListContainer from './styles'

const List = ({ search }) => {
  const filteredProjects = projects.filter(({ projectName }) =>
    projectName.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <ListContainer>
      {filteredProjects.map((project, index) => {
        const { id, logo, projectName, projectLink } = project
        return (
          <div className="project-card" key={id}>
            <img src={logo} alt="projectName" className="project-card-img" />

            <div className="project-name">{projectName}</div>
          </div>
        )
      })}
    </ListContainer>
  )
}

const projects = [
  {
    id: 1,
    logo: amazonLogo,
    projectName: 'Amazon',
    projectLink: 'some link',
  },
  {
    id: 2,
    logo: amazonLogo,
    projectName: 'Paypal',
    projectLink: 'some link',
  },
  {
    id: 3,
    logo: amazonLogo,
    projectName: 'Star bucks',
    projectLink: 'Starbucks',
  },
  {
    id: 4,
    logo: amazonLogo,
    projectName: 'Kmv',
    projectLink: 'Kmv',
  },
  {
    id: 5,
    logo: amazonLogo,
    projectName: 'Piersoft',
    projectLink: 'Piersoft',
  },
  {
    id: 6,
    logo: amazonLogo,
    projectName: 'Doordash',
    projectLink: 'Doordash',
  },
  {
    id: 7,
    logo: amazonLogo,
    projectName: 'zomato',
    projectLink: 'Zomato',
  },
  {
    id: 8,
    logo: amazonLogo,
    projectName: 'Paytm',
    projectLink: 'Paytm',
  },
  {
    id: 9,
    logo: amazonLogo,
    projectName: 'Zerodha',
    projectLink: 'Zerodha',
  },
]
export default List
