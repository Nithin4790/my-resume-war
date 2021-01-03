import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import { theme } from 'app/theme'
import { Routes } from 'app/routes'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}

export default App
