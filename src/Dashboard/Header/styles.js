import styled from 'styled-components'

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 0;
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;

  .header-left-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .header-title {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
  }

  .header-subtitle {
    letter-spacing: 1px;
    color: var(--grey-500);
  }

  .search-icon {
    display: grid;
    place-items: center;
    color: var(--grey-600);
  }

  .search-filter {
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: var(--white);
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    box-shadow: var(--shadow-2);
  }

  .search-filter input {
    border: none;
    color: var(--grey-500);
    letter-spacing: 1px;
  }

  .search-filter input:focus {
    border: none;
    outline: none;
  }
`

export default HeaderContainer
