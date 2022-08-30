import styled from 'styled-components'

export const PostContainer = styled.main`
  margin-bottom: 2rem;

  .markdown {
    max-width: 56rem;
    padding: 2.5rem;
    margin: 0 auto;
    margin-top: 8rem;
    font-size: 1rem;
    line-height: 25.6px;

    p {
      margin-bottom: 1rem;
    }

    ul {
      li + li {
        margin-bottom: 1rem;
      }
    }

    img {
      width: 100%;
    }

    a {
      color: ${(props) => props.theme.white};
    }
  }
`

export const PostHeader = styled.div`
  border-radius: 10px;
  padding: 2rem;
  position: absolute;
  bottom: -7rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['blue-600']};

  display: flex;
  gap: 0.5rem;
  z-index: 10;
  width: calc(100% - 3rem);
  max-width: 54rem;
  align-items: flex-start;
  flex-direction: column;

  .content {
    width: 100%;
    display: flex;
    justify-content: space-between;

    a {
      text-transform: uppercase;
      display: flex;
      text-decoration: none;
      align-items: center;
      gap: 0.5rem;
      font-size: 0.75rem;
      font-weight: bold;
      cursor: pointer;
      color: ${(props) => props.theme['blue-100']};

      &:hover {
        text-decoration: underline;
      }
    }
  }

  h3 {
    font-size: 24px;
    line-height: 130%;
    margin-top: 1rem;
    color: ${(props) => props.theme.white};
  }
`

export const PostAdditionalInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  color: ${(props) => props.theme['blue-10']};

  div {
    display: flex;
    gap: 0.5rem;
    align-items: center;

    svg {
      width: 1rem;
      height: 1rem;
      color: ${(props) => props.theme['blue-300']};
    }

    span {
      font-size: 16px;
      line-height: 160%;
    }
  }
`
