import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  FaAngleLeft,
  FaCalendar,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { Header } from '../../components/Header'
import { PostContainer, PostHeader, PostAdditionalInfo } from './styles'
import { api } from '../../services/api'
import { Link, useParams } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface Issue {
  title: string
  html_url: string
  created_at: string
  comments: number
  body: string
  user: {
    login: string
  }
}

export const PostDetail = () => {
  const { id } = useParams<{
    id: string
  }>()

  const [issue, setIssue] = useState<Issue | null>(null)

  useEffect(() => {
    const loadIssueData = async () => {
      const { data } = await api.get<Issue>(
        `repos/gabriel-nt/github-blog/issues/${id}`,
      )

      setIssue(data)
    }

    loadIssueData()
  }, [id])

  return (
    <PostContainer>
      <Header>
        <PostHeader>
          <div className="content">
            <Link to="/">
              <FaAngleLeft size={16} />
              <span>Voltar</span>
            </Link>

            <a href={issue?.html_url}>
              <span>Ver no github</span>
              <FaExternalLinkAlt />
            </a>
          </div>

          <h3>{issue?.title}</h3>

          <PostAdditionalInfo>
            <div>
              <FaGithub />
              <span>{issue?.user.login}</span>
            </div>
            <div>
              <FaCalendar />
              <span>
                {issue?.created_at
                  ? formatDistanceToNow(new Date(issue.created_at), {
                      locale: ptBR,
                      addSuffix: true,
                    })
                  : '-'}
              </span>
            </div>
            <div>
              <FaComment />
              <span>{issue?.comments || 0} comentários</span>
            </div>
          </PostAdditionalInfo>
        </PostHeader>
      </Header>

      {issue?.body && (
        <ReactMarkdown className="markdown">{issue.body}</ReactMarkdown>
      )}
    </PostContainer>
  )
}
