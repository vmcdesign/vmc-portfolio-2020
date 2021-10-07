/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { 
  Link, 
  Container, 
  Header, 
  Title, 
  Tags, 
  Tag, 
  Description 
} from './project.css'


export const Project = props => {
  const lightTheme = useTheme()
  
  const linkStyles = css`
    box-shadow: none;
    overflow: hidden;
    &:hover {
      box-shadow: 
        ${props.defaulStyle ? lightTheme.project.boxShadowHover 
        : lightTheme.projectAlt.boxShadowHover};
    }

    & article > div > div {
      /* Tags */
      & > span {
        color: ${props.defaultStyle ? lightTheme.project.color 
          : lightTheme.projectAlt.color};
        background-color: ${props.defaultStyle ? lightTheme.project.tagBgColor 
          : lightTheme.projectAlt.tagBgColor};
        transition: all .3s ease-in-out;
      }
    }

    &:hover article > div > div {
      /* Tags - Hover */
      & > span {
        color: white;
        background-color: ${props.defaultStyle ? lightTheme.project.color 
          : lightTheme.projectAlt.color};
      }
    }

    & h3 {
      color: ${props.defaultStyle ? lightTheme.project.titleColor
      : lightTheme.projectAlt.titleColor}
    }

    &:hover h3 {
      color: ${props.defaultStyle ? lightTheme.project.linkColor
      : lightTheme.projectAlt.linkColor};
    transition: all .3s ease-in-out;
    }

    & p {
      color: ${props.defaultStyle ? lightTheme.project.textColor
      : lightTheme.projectAlt.textColor};
    transition: all .3s ease-in-out;
    }

    &:active,
    &:focus {
      background-color: white;
      outline: 1px dotted blue;
    }
  `

  return (
    <Link href={props.url} css={linkStyles}>
      <Container>
        <Header>
          <Title>
            {props.title}
          </Title>
          <Tags>
            {props.tags.map((tag, i) =>
              <Tag key={i}>
                {tag}
              </Tag>
            )}
          </Tags>
        </Header>
        <Description>
          {props.description}
        </Description>
      </Container>
    </Link>
  )
}