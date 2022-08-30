import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const PostContainer = styled(Link)`
  padding: 2rem;
  cursor: pointer;
  text-decoration: none;
  border-radius: 10px;
  border: 2px solid transparent;
  background-color: ${(props) => props.theme['blue-500']};

  div {
    display: grid;
    align-items: flex-start;
    padding-bottom: 1.5rem;
    justify-items: end;
    grid-template-columns: 2fr 1fr;

    h4 {
      font-size: 20px;
      line-height: 160%;
      justify-self: flex-start;
      color: ${(props) => props.theme.white};
    }

    span {
      font-size: 14px;
      line-height: 160%;
      color: ${(props) => props.theme['blue-200']};
    }
  }

  p {
    font-size: 16px;
    line-height: 25.6px;
    padding-bottom: 1.5rem;
    color: ${(props) => props.theme['blue-50']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    max-height: 104px;
    max-width: 352px;
    line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  &:hover {
    border: 2px solid ${(props) => props.theme['blue-300']};
  }
`
