import React from 'react'

import logoImg from '../../assets/logo.svg'
import { HeaderContainer } from './useStyles'

interface HeaderProps {
  children: React.ReactNode
}

export const Header = ({ children }: HeaderProps) => (
  <>
    <HeaderContainer>
      <img src={logoImg} alt="Logo do site" />

      {/* <div className="effect"></div> */}
      {children}
    </HeaderContainer>
  </>
)
