import { Issue } from '../..'
import { PostContainer } from './styles'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface PostProps {
  data: Issue
}

export const Post = ({
  data: { number, title, body, created_at },
}: PostProps) => (
  <PostContainer to={`/post/${number}`}>
    <div>
      <h4>{title}</h4>
      <span>
        {formatDistanceToNow(new Date(created_at), {
          locale: ptBR,
          addSuffix: true,
        })}
      </span>
    </div>
    <p>{body}</p>
  </PostContainer>
)
