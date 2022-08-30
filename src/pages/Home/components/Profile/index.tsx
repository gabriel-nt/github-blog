import { FaGithub, FaBuilding, FaUsers, FaLink } from 'react-icons/fa'
import { ProfileData } from '../..'

import { ProfileContainer, ProfileAdditionalInfo, ProfileLink } from './styles'

interface ProfileProps {
  profileData: ProfileData
}

export const Profile = ({
  profileData: { avatar_url, bio, company, followers, html_url, login, name },
}: ProfileProps) => (
  <ProfileContainer>
    <img src={avatar_url} alt="" />
    <div className="info">
      <div>
        <h1>{name}</h1>
        <ProfileLink href={html_url}>
          <span>Github</span>
          <FaLink />
        </ProfileLink>
      </div>
      <p>{bio}</p>

      <ProfileAdditionalInfo>
        <div>
          <FaGithub />
          <span>{login}</span>
        </div>
        <div>
          <FaBuilding />
          <span>{company}</span>
        </div>
        <div>
          <FaUsers />
          <span>{followers} seguidores</span>
        </div>
      </ProfileAdditionalInfo>
    </div>
  </ProfileContainer>
)
