import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  display: block;
  position: absolute;
  top: 7px;
  width: 100%;
  padding: 0 20px;
  background-color: transparent;
  border-top: 7px solid linear-gradient(90deg, rgba(241,95,95,1) 0%, rgba(235,155,82,1) 100%);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  flex-direction: column;
  max-width: 1800px;
  margin: auto;
  padding: 30px 0;
  width: 100%;

  @media screen and (min-width: 380px) {
    flex-direction: row;
    align-items: left;
    justify-content: space-between;
  }
`

export const Logo = styled.h1`
  margin-bottom: 12px;  
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 400;

  @media screen and (min-width: 380px) {
    margin-bottom: 0;
  }
`