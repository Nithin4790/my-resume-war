import { ThemeProvider } from '@material-ui/core'
import React from 'react'
import Header from '../components/Header'
import { theme } from './theme'

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  )
}

export default App
