import React, { useReducer, useEffect } from 'react'
import { fetchRequest, fetchSuccess, fetchFailure } from '../../state/actions'
import { initialState, reducer } from '../../state/reducer'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { useTheme } from 'emotion-theming'
import { ProjectsHeader } from '../projectsHeader'
import { Container, ListItems } from './main.css'
import { Project } from '../project'
import appsImgBg from '../../assets/images/apps-header-bg.jpg'
import designsImgBg from '../../assets/images/designs-header-bg.jpg'
import miscImgBg from '../../assets/images/misc-header-bg.jpg'
import iconApps from '../../assets/svg/icon-apps.svg'
import iconDesigns from '../../assets/svg/icon-designs.svg'
import iconMisc from '../../assets/svg/icon-misc.svg'
import patternArches from '../../assets/images/pattern-arches.png'


const ProjectSection = styled.section`
  position: relative;
  padding: 80px 0;
  ${props => props.bgColor && css`
    background-color: #fef8f8;
  `};

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    ${props => props.bgColor && css`
      background-image: url(${patternArches})
      background-repeat: repeat;
    `};
  }

  @media screen and (min-width: 600px) {
    padding: 100px;
  }
  
  @media screen and (min-width: 1024px) {
    padding: 120px 0;
  }
`

export const SectionHeader = styled(ProjectsHeader)`
  display: block;
`


export const Main = () => { 
  const lightTheme = useTheme()

  const [ {projectData, error }, dispatch] = useReducer(reducer, initialState)

  const fetchData = () => {
    dispatch(fetchRequest())
    fetch('./projects.json')
      .then(res => res.json())
      .then(data => dispatch(fetchSuccess(data)))
      .catch(err => {
        console.log(err)
        dispatch(fetchFailure(err))
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(projectData)

  return (
    <main>  
      {/* Projects - Apps */}    
      <ProjectSection bgColor>
        <Container>
          <SectionHeader 
            content={{
              imgSrc: appsImgBg,
              iconSrc: iconApps,
              title: 'Apps',
              text: `Various apps developed using Vanilla 
              JavaScript, REST APIs and React JS`
            }}
          />
          <ListItems>
            { projectData && projectData.projects.apps ? (
              projectData.projects.apps.map((app, i) => {
                return (
                  <Project
                    defaultStyle
                    key={i}
                    title={app.title}
                    tags={app.tags}
                    url={app.url}
                    description={app.description}
                  />
                )})
              ) : 
              error ? error : null }
          </ListItems>
        </Container>
      </ProjectSection>

      {/* Projects - Designs */}
      <ProjectSection>
        <Container>
          <SectionHeader 
            content={{
              imgSrc: designsImgBg,
              iconSrc: iconDesigns,
              title: 'Designs',
              text: `Designs carefully crafted using 
              Adobe XD and Figma`
            }}
          />
          <ListItems>
            { projectData && projectData.projects.designs ? (
              projectData.projects.designs.map((design, i) => {
                return (
                  <Project
                    altStyle
                    key={i}
                    title={design.title}
                    tags={design.tags}
                    url={design.url}
                    description={design.description}
                  />
                )})
              ) :
              error ? error : null }
          </ListItems>
        </Container>
      </ProjectSection>

      {/* Projects - Misc */}
      <ProjectSection bgColor>
        <Container>
          <SectionHeader 
            content={{
              imgSrc: miscImgBg,
              iconSrc: iconMisc,
              title: 'Misc',
              text: `Projects here do not fit in either 
              of the two categories above`
            }}
          />
          <ListItems>
            { projectData && projectData.projects.misc ? (
              projectData.projects.misc.map((misc, i) => {
                return (
                  <Project
                    defaultStyle
                    key={i}
                    title={misc.title}
                    tags={misc.tags}
                    url={misc.url}
                    description={misc.description}
                  />
                )})
              ) : error ? error : null }
          </ListItems>
        </Container>
      </ProjectSection>
    </main>
  )
}