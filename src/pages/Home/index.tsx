import React, { useCallback, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { api } from '../../services/api'
import { Post } from './components/Post'
import { Profile } from './components/Profile'
import { HomeContainer, HomeContent } from './styles'

export interface ProfileData {
  name: string
  login: string
  followers: number
  company: string
  avatar_url: string
  html_url: string
  bio: string
}

export interface Issue {
  number: number
  title: string
  body: string
  created_at: string
}

interface SearchIssuesResponse {
  items: Issue[]
}

export const Home = () => {
  const [searchValue, setSearchValue] = useState('')

  const [issues, setIssues] = useState<Issue[]>([])
  const [profileData, setProfileData] = useState<ProfileData>({} as ProfileData)

  const loadProfileInfo = useCallback(async (query?: string) => {
    const response = await api.get<SearchIssuesResponse>(
      `/search/issues?q=${
        query ? query + '%20' : ''
      }repo:gabriel-nt/github-blog`,
    )

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    const loadUserData = async () => {
      const { data } = await api.get<ProfileData>('/users/gabriel-nt')

      setProfileData(data)
    }

    loadUserData()
    loadProfileInfo()
  }, [loadProfileInfo])

  const handleChangeValue = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(value)
  }

  const handleOnKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      loadProfileInfo(searchValue)
    }
  }

  return (
    <HomeContainer>
      <Header>
        <Profile profileData={profileData} />
      </Header>
      <HomeContent>
        <header>
          <h3>Publicações</h3>
          <span>{issues.length} publicações</span>
        </header>

        <input
          placeholder="Buscar conteúdo"
          value={searchValue}
          onKeyUp={handleOnKeyUp}
          onChange={handleChangeValue}
        />

        <div className="publications">
          {issues.length > 0 &&
            issues.map((issue) => <Post data={issue} key={issue.title} />)}
        </div>
      </HomeContent>
    </HomeContainer>
  )
}
