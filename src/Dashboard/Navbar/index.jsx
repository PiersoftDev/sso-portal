import { NavLink } from 'react-router-dom'

import companyLogo from './assets/logo.png'
import { IoMdNotificationsOutline } from 'react-icons/io'
import { IoIosArrowDown } from 'react-icons/io'
import profilePic from './assets/pic.jpg'
import NavbarContainer from './styles'

const Navbar = () => {
  return (
    <NavbarContainer>
      <div className="company-logo-container">
        <img src={companyLogo} alt="Kmv" className="company-logo" />
      </div>

      <ul className="links-container">
        {navLinks.map((link, index) => {
          const { id, path, text, icon } = link
          return (
            <NavLink
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              key={index}
              to={path}
            >
              <p>{text}</p>
            </NavLink>
          )
        })}
      </ul>

      <div className="profile-container">
        <span className="notification-icon">
          <IoMdNotificationsOutline />
        </span>
        <div className="user-container">
          <span>Leroy Sane</span>
          <span>
            <IoIosArrowDown />
          </span>
          <div className="avatar-container">
            <img src={profilePic} alt="Leroy sane" />
          </div>
        </div>
      </div>
    </NavbarContainer>
  )
}

const navLinks = [
  {
    id: 1,
    path: '/',
    text: 'Home',
  },
  {
    id: 2,
    path: '/features',
    text: 'Features',
  },

  {
    id: 3,
    path: '/pricing',
    text: 'Pricing',
  },
  {
    id: 4,
    path: '/settings',
    text: 'Settings',
  },
]

export default Navbar
