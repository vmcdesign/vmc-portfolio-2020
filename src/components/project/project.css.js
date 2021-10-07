import styled from '@emotion/styled'

export const Link = styled.a`
  position: relative;
  display: block;
  background-color: transparent;
  border-radius: 4px;
  transform: translateX(0);
  transition: all .3s ease-in-out;

  &:hover {
    background-color: white;
    transform: translateX(10px);
  }
`

export const Container = styled.article`
  padding: 28px 34px;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 6px;
  
  @media screen and (min-width: 600px) {
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
  }
`

export const Title =  styled.h3`
  display: inline-block;
  margin: 0;
  font-size: 22px;
  font-weight: 800;
  text-decoration: underline;

  @media screen and (min-width: 600px) {
    margin: 0 20px 0 0;
    font-size: 20px;
    text-decoration: none;
  }
`

export const Tags = styled.div`
  display: inline-block;
  margin-bottom: 14px;

  @media screen and (min-width: 600px) {
    margin-bottom: 0;
  }
  
`

export const Tag = styled.span`
  display: inline-block;
  margin-right: 10px;
  padding: 4px 14px;
  color: white;
  font-size:  10px;
  font-weight: 800;
  border-radius: 4px;
  
  &:last-of-type {
    margin-right: 0;
  }
`

export const Description = styled.p`
  margin: 0;
`
