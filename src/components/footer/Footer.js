import React from 'react'
import { useTheme } from 'emotion-theming'
import { SocialLinks } from '../socialLinks'
import { FooterContainer, Content, Copyright } from './footer.css'

export const Footer = () => {
  const lightTheme = useTheme()

  const licenseURL = 'https://en.wikipedia.org/wiki/MIT_License'

  const footerContainerBg = {
    background: lightTheme.gradientLight
  }

  return (
    <FooterContainer style={footerContainerBg}>
      <Content>
        <Copyright>
          &copy; <a href="/">Vanessa Coles</a> 2020 | 
          License: 
          <a href={licenseURL} target="_blank" rel="noopener noreferrer"> MIT</a>
        </Copyright>
        <SocialLinks footer />
      </Content>
    </FooterContainer>
  )
}

export default Footer