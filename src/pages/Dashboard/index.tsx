import React, { useState } from 'react'
import SideNavMenu from 'components/SideNavMenu'
import Header from 'components/Header'
import { Container, CssBaseline } from '@material-ui/core'
import DashboardPageStyles from './styles/DashboardPage'
import GlobalErrorHandler from 'util/GlobalErrorHandler'

const DashboardPage: React.FC = () => {
  const classes = DashboardPageStyles()
  const [drawerState, setDrawerState] = useState<boolean>(true)

  const updateDrawerState = (val: boolean) => {
    setDrawerState(val)
  }
  return (
    <div className="Dashboard">
      <div className={classes.root}>
        <CssBaseline />
        <Container>
          <Header drawerState={drawerState} onDrawerStateUpdate={updateDrawerState} />
          <GlobalErrorHandler>
            <SideNavMenu drawerState={drawerState} />
          </GlobalErrorHandler>
        </Container>
      </div>
    </div>
  )
}

export default DashboardPage
