import styled from 'styled-components'

const LogInWrapper = styled.div`
  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .globe-icon {
    display: grid;
    place-items: center;
    border: 1px solid var(--grey-100);
    padding: 0.5rem;
    border-radius: 0.5rem;
    color: var(--primary-500);
    box-shadow: var(--shadow-1);
  }

  .title-container {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .header-title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .header-subtitle {
    font-size: 0.8rem;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }
  .field-container {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }

  .input-label {
    font-size: 0.8rem;
    font-weight: 500;
  }

  .input-container {
    border: 1px solid var(--grey-100);
    padding: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .input-container input {
    width: 100%;
    border: none;
    outline: none;
    letter-spacing: 1px;
  }

  .sign-in-btn {
    background-color: var(--primary-500);
    padding: 1rem;
    border: none;
    border-radius: 0.5rem;
    color: var(--white);
    cursor: pointer;
    display: block;
    width: 100%;
  }

  .card-footer {
    text-align: center;
    font-size: 0.9rem;
    padding-bottom: 1rem;
  }

  .card-footer span {
    color: var(--primary-500);
    font-weight: 500;
  }

  .error-message {
    font-size: 0.8rem;
    color: red;
  }
`
export default LogInWrapper
