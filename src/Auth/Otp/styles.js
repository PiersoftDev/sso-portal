import styled from 'styled-components'

const OtpWrapper = styled.div`
  .back-btn {
    font-size: 1.5rem;
    cursor: pointer;
  }
  .card-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
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
    word-wrap: break-word;
    line-height: 1rem;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
  }

  .login-btn {
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
`
export default OtpWrapper
