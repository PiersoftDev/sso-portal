import styled from 'styled-components'

const OtpInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;

  input {
    border: 1px solid var(--grey-200);
    display: grid;
    place-items: center;
    border-radius: 5px;
    padding: 0.5rem 0.6rem;
    width: 2rem;
    height: 2rem;
    outline: none;
  }

  /* input:hover {
    border: 2px solid var(--primary-500);
  } */
`

export default OtpInputWrapper
