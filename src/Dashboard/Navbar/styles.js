import styled from 'styled-components'

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 5rem;
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;

  .company-logo-container {
    display: grid;
    place-items: center;
    padding: 1rem 0;
  }

  .company-logo {
    display: block;
    width: 3rem;
    cursor: pointer;
  }

  .links-container {
    display: flex;
    align-items: center;
    gap: 3rem;
    height: 5rem;
  }

  .nav-link {
    color: var(--grey-500);
    letter-spacing: 1px;
    position: relative;
    padding: 1 0.5rem;
  }

  .profile-container {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .notification-icon {
    display: grid;
    place-items: center;
    font-size: 1.1rem;
    color: var(--grey-900);
  }

  .user-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .avatar-container {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-left: 1rem;
  }

  .avatar-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`

export default NavbarContainer
