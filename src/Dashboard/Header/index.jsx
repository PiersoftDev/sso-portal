import { IoSearchOutline } from 'react-icons/io5'
import HeaderContainer from './styles'

const Header = ({ search, setSearch }) => {
  return (
    <HeaderContainer>
      <div className="header-left-container">
        <div className="header-title">How do you want to sell ?</div>
        <div className="header-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. dicta.
        </div>
      </div>

      <div className="search-filter">
        <span className="search-icon">
          <IoSearchOutline />
        </span>
        <input
          type="text"
          placeholder="Search Project"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </HeaderContainer>
  )
}
export default Header
