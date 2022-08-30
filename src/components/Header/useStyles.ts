import styled from 'styled-components'

import effectAfterImg from '../../assets/effect-after.svg'
import effectBeforeImg from '../../assets/effect-before.svg'

export const HeaderContainer = styled.header`
  display: flex;
  min-height: 296px;
  position: relative;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: ${(props) => props.theme['blue-600']};

  &::before {
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    max-width: 409px;
    max-height: 264px;
    position: absolute;
    background-image: url(${effectBeforeImg});
  }

  &::after {
    right: 0;
    top: 0;
    content: '';
    width: 100%;
    height: 100%;
    max-width: 371px;
    max-height: 236px;
    position: absolute;
    background-image: url(${effectAfterImg});
  }

  .effect {
    background: #14589c;
    filter: blur(212px);
    bottom: 0;
    width: 891px;
    height: 52px;
    position: absolute;
  }

  @media (max-width: 662px) {
    min-height: 100%;
    padding: 3rem 0 4rem 0;

    > img {
      max-width: 110px;
    }
  }
`
