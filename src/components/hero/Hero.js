/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import {
  HeroContainer, 
  Content, 
  ImgContainer, 
  TextContent,  
  Header, 
  Text, 
  Actions,
  LinkBtn 
} from './hero.css'
import headShotImg from '../../assets/images/headshot.png'
import { Eye, Download } from 'react-feather'

export const Hero = props => {
  const lightTheme = useTheme()

  const color = {
    header: lightTheme.text.colorDarkest,
    text: lightTheme.text.colorDark,
    eyeIcon: 'white',
    downloadIcon: lightTheme.project.color,
    downloadLinkBtn: lightTheme.project.linkColor,
  }

  return (
    <HeroContainer>
      <Content>
        <ImgContainer>
          <img src={headShotImg} alt="Vanessa Coles" />
        </ImgContainer>
        <TextContent>
          <Header css={css`color: ${color.header}`}>
            Hello!  I'm Vanessa.  Together, Let's Make Something Great.
          </Header>
          <Text css={css`color: ${color.text}`}>
            My name is Vanessa Coles, and I will be your guide for today.
            I strive to create beautiful, engaging, and user-friendly interfaces
            for the web. <span>View past and present works below or contact me 
            to get started on your next big venture.</span>  Also currently 
            seeking full-time employment.
          </Text>
          <Actions>
            <LinkBtn 
              href="/" 
              gradient
            >
              <Eye css={css`color: ${color.eyeIcon}`} />
              View My Work
            </LinkBtn>
            <LinkBtn 
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              css={css`color: ${color.downloadLinkBtn}`}
              transparent
            >
              <Download css={css`color: ${color.downloadIcon}`} />
              Download Resume
            </LinkBtn>
          </Actions>
        </TextContent>
      </Content>
    </HeroContainer>
  )
}