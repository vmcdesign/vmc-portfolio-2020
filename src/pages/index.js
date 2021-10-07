import React from "react"
import { ThemeProvider } from 'emotion-theming'
import { lightTheme } from '../theme'
import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Main } from '../components/main'
import { Footer } from '../components/footer'
import { Border } from './index.css'

export default () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <div id="App">
        <Border />
        <Header />
        <Hero />
        <Main />
        <Footer />
      </div>
    </ThemeProvider>
    
  )
}
