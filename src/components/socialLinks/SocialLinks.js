/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { SocialMedia } from './socialLinks.css'
import { Twitter, GitHub, Dribbble, Linkedin } from 'react-feather'


export const SocialLinks = props => {
  const lightTheme = useTheme()

  const twitterURL = 'https://twitter.com/vcolesdesign'
  const githubURL = 'https://github.com/vcolesdesign'
  const dribbbleURL = 'https://dribbble.com/vcolesdesign'
  const linkedInURL = 'https://www.linkedin.com/in/vanessa-coles-a473b7130/'  

  const socialMediaStyles = `
    color: ${props.header ? lightTheme.text.colorDarker 
      : lightTheme.project.sectionBgColor};

    &:hover {
      color: ${props.header ? lightTheme.project.color : 'white'}
    }
  `
  
  return (
    <SocialMedia css={
      css`li > a { 
        ${socialMediaStyles}
      }`}
    >
      <li>
        <a 
          href={twitterURL} 
          target="blank" 
          rel="noferrer noopener"
        >
          <Twitter className="icon icon--animated" />
        </a>
      </li>
      <li>
        <a 
          href={githubURL} 
          target="blank" 
          rel="noferrer noopener"
        >
          <GitHub className="icon icon--animated" />
        </a>
      </li>
      <li>
        <a 
          href={dribbbleURL} 
          target="blank" 
          rel="noferrer noopener"
        >
          <Dribbble className="icon icon--animated" />
        </a>
      </li>
      <li>
        <a 
          href={linkedInURL} 
          target="blank" 
          rel="noferrer noopener"
        >
          <Linkedin className="icon icon--animated" />
        </a>
      </li>
    </SocialMedia>
  )
}