import styled from 'styled-components'

export const ProfileContainer = styled.div`
  border-radius: 10px;
  padding: 2rem 2rem 2rem 3rem;
  position: absolute;
  bottom: -9.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${(props) => props.theme['blue-600']};

  display: flex;
  gap: 2rem;
  width: calc(100% - 3rem);
  z-index: 10;
  max-width: 54rem;
  align-items: center;
  justify-content: center;

  img {
    border-radius: 8px;
    max-width: 148px;
  }

  .info {
    width: 100%;
    display: flex;
    flex-direction: column;

    > div:first-of-type {
      display: flex;
      position: relative;
      justify-content: space-between;

      h1 {
        font-size: 1.5rem;
        line-height: 130%;
        padding-bottom: 0.5rem;
      }
    }

    p {
      font-size: 16px;
      line-height: 160%;
      padding-bottom: 1.5rem;
      color: ${(props) => props.theme['blue-50']};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      max-height: 80px;
      line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }

  @media (max-width: 662px) {
    bottom: -11.5rem;
    flex-direction: column;
    padding: 1.5rem;

    .info p {
      margin-bottom: 1rem;
    }

    img {
      display: none;
    }
  }
`

export const ProfileAdditionalInfo = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
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
      line-height: 16px;
    }
  }
`

export const ProfileLink = styled.a`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  font-weight: bold;
  position: absolute;
  right: 0;
  top: -0.5rem;
  cursor: pointer;
  color: ${(props) => props.theme['blue-100']};

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 536px) {
    top: 0;
    position: relative;
  }
`
