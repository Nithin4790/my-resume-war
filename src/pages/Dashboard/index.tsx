import React, { useState } from 'react'
import Header from 'components/Header'
import { CssBaseline } from '@material-ui/core'
import DashboardPageStyles from './styles/DashboardPage'
import GlobalErrorHandler from 'util/GlobalErrorHandler'
import SideBar from 'components/SideBar'

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

        <Header drawerState={drawerState} onDrawerStateUpdate={updateDrawerState} />

        <GlobalErrorHandler>
          {/* <SideNavMenu drawerState={drawerState} /> */}
          <SideBar drawerState={drawerState} />
        </GlobalErrorHandler>
      </div>
    </div>
  )
}

export default DashboardPage
