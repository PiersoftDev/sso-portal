import styled from 'styled-components'

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: auto;
  gap: 2rem;
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
  padding-bottom: 5rem;

  .project-card {
    background-color: var(--white);
    border-radius: 0.5rem;
    display: grid;
    place-items: center;
    padding: 2rem 3rem;
    text-transform: capitalize;
    box-shadow: var(--shadow-2);
    transition: var(--transition);
    border: 2px solid transparent;
    cursor: pointer;
  }

  .project-card:hover {
    transform: scale(1.05);
    border: 2px solid var(--primary-300);
  }

  .project-card-img {
    display: block;
    width: 9rem;
  }

  .project-name {
    padding: 1rem 0;
    font-weight: 500;
    letter-spacing: 1px;
    font-size: 1rem;
  }
`
export default ListContainer
