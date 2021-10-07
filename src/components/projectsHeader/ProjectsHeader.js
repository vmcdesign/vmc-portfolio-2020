/** @jsx jsx */
import React from 'react'
import './projectsHeader.css'
import { jsx } from '@emotion/core'
import { Container, Content, Icon, Title, Text } from './projectsHeader.css'


export const ProjectsHeader = ({ content }) => {
  const containerBg = { 
    backgroundImage: `url(${content.imgSrc})` 
  }

  return (
    <Container style={containerBg}>
      <Content>
        <Icon src={content.iconSrc}></Icon>
        <Title>{content.title}</Title>
        <Text>{content.text}</Text>
      </Content>
    </Container>
  )
}