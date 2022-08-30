import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-bottom: 2rem;
`

export const HomeContent = styled.div`
  width: 100%;
  max-width: 57rem;
  margin: 0 auto;
  margin-top: 13rem;
  padding: 0 1.5rem;

  header {
    display: flex;
    align-items: center;
    padding-bottom: 0.75rem;
    justify-content: space-between;
  }

  input {
    border: 0;
    width: 100%;
    padding: 12px 16px;
    border-radius: 6px;
    margin-bottom: 3rem;
    color: ${(props) => props.theme['blue-300']};
    background: ${(props) => props.theme['blue-900']};
    border: 1px solid ${(props) => props.theme['blue-400']};

    &::placeholder {
      color: ${(props) => props.theme['blue-300']};
    }
  }

  .publications {
    gap: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 956px) {
    .publications {
      display: flex;
      flex-direction: column;

      p {
        max-width: 100%;
      }
    }
  }
`
