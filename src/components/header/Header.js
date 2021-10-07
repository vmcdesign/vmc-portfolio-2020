/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { HeaderContainer, Content, Logo } from './header.css'
import { SocialLinks } from '../socialLinks'

export const Header = () => {
  const lightTheme = useTheme()

  const logoStyles = css`
    color: ${lightTheme.text.colorDarker};
    transition: all .3s ease-in-out;

    &:hover {
      color: ${lightTheme.project.color}
    }
  `

  return (
    <HeaderContainer>
      <Content>
        <Logo>
          <a href="/" css={logoStyles}>Vanessa Coles</a>
        </Logo>
        <SocialLinks header />
      </Content>
    </HeaderContainer>
  )
}

export default Header