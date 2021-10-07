import { css } from '@emotion/core'
import styled from '@emotion/styled'

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  min-height: 100vh;
  height: 100%;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 680px;
  width: 100%;
  padding: 0 20px;

  @media screen and (min-width: 760px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    max-width: 960px;
  }
`

export const ImgContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 28px;

  img {
    max-width: 150px;
    margin: auto;
  }

  @media screen and (min-width: 300px) {
    img { max-width: 130px; }
  }

  @media screen and (min-width: 600px) {
    margin-bottom: 52px;
    img { max-width: 190px; }
  }

  @media screen and (min-width: 760px) {
    margin-top: 0;
    img { margin: 0; }
  }

  @media screen and (min-width: 1024px) {
    img { max-width: 224px }
  }
`

export const TextContent = styled.div`
  text-align: center;

  @media screen and (min-width: 760px) {
    flex-basis: 80%;
    text-align: left;
    padding-left: 40px;
  }

  @media screen and (min-width: 1024px) {
    flex-basis: 70%;
    padding-left: 60px;
  }
`

export const Header = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 800;
  line-height: 28px;

  @media screen and (min-width: 530px) {
    font-size: 24px;
    font-weight: 34px;
    line-height: 32px;  
  }
  
  @media screen and (min-width: 600px) {
    font-size: 30px;
    line-height: 40px;
  }

  @media screen and (min-width: 760px) {
    margin-bottom: 24px;
  }
`

export const Text = styled.p`
  margin-bottom: 46px;
  font-size: 16px;
  line-height: 28px;
  
  span { display: none; }

  @media screen and (min-width: 600px) {
    font-size: 18px;
    line-height: 32px;

    span { display: inline; }
  }

  @media screen and (min-width: 760px) {
    text-align: left;
  }
`

export const Actions = styled.div`
  margin-bottom: 46px;
`

export const LinkBtn = styled.a`
  display: block;
  position: relative;
  margin-bottom: 16px;
  height: 62px;
  font-weight: 500;
  line-height: 62px;
  border-radius: 4px;
  z-index: 5;
  transition: all .3s ease-in-out;

  svg {
    display: inline-block;
    position: relative;
    top: -2px;
    margin-right: 16px;
    vertical-align: middle;
  }

  ${props => props.gradient && css`
    color: white;
    background: linear-gradient(90deg, 
      rgba(241,95,95,1) 0%, 
      rgba(235,155,82,1) 100%);
    box-shadow: 0 15px 35px rgba(241,95,95,.4);

    &::before {
      display: block;
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      border-radius: inherit;
      background: linear-gradient(90deg, 
        rgba(241,95,95,1) 0%, 
        rgba(241,95,95,1) 100%);
      transition: all .3s ease-in-out;
      z-index: -5;
    }
  `};

  ${props => props.transparent && css`
    color: #f15F5f;
  `};

  &:hover,
  &:active,
  &:focus {
    ${props => props.gradient && css`
      &::before { opacity: 1; }
    `};
    ${props => props.transparent && css`
      background: rgba(241,95,95,.07);
    `};
  }

  @media screen and (min-width: 600px) {
    display: inline-block;
    margin: 0 10px;
    padding: 0 40px;
  }

  @media screen and (min-width: 760px) {
    margin-right: 14px;
    
    &:first-of-type { margin-left: 0; }
  }
`