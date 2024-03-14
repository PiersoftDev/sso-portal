import styled from 'styled-components'

const AuthenticationWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  position: relative;

  .authenticate-card {
    background-color: var(--white);
    padding: 1.5rem;
    border-radius: 1rem;
    width: 35vw;
    max-width: 376px;
    box-shadow: var(--shadow-3);
  }

  .kmv-logo {
    position: fixed;
    top: 5%;
    left: 5%;
    width: 5rem;
  }
`

export default AuthenticationWrapper
