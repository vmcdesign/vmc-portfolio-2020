import styled from '@emotion/styled'

export const Container = styled.div`
  display: flex;
  flex-basis: 100%;
  position: relative;
  align-items: center;
  align-content: center;
  justify-content: center;
  margin: 0 auto 40px auto;
  max-width: 960px;
  width: 100%;
  min-height: 200px;
  height: 100%;
  overflow: hidden;
  border-radius: 6px;

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(65,56,56,.67);
  }

  @media screen and (min-width: 600px) {
    min-height: 284px;
  }

  @media screen and (min-width: 1024px) {
    min-height: 384px;
  }
`

export const Content = styled.div`
  position: relative;
  padding: 20px;
  color: white;
  text-align: center;
  z-index: 5;
`

export const Icon = styled.img`
  display: inline-block;
  margin-bottom: 8px;
  max-width: 68px;
  width: 100%;
`

export const Title = styled.h3`
  margin-bottom: 0;
  font-size: 28px;

  @media screen and (min-width: 600px) {
    margin-bottom: 6px;
    font-size: 32px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`

export const Text = styled.p`
  display: none;
  margin-top: 0;
  max-width: 480px;
  width: 100%;
  font-size: 20px;
  font-weight: 300;

  @media screen and (min-width: 600px) {
    display: block;
  }
`