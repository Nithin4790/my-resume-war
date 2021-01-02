import React, { useEffect, useState } from 'react'
import Header from 'components/Header'
import { CssBaseline, useMediaQuery } from '@material-ui/core'
import DashboardPageStyles from 'pages/Dashboard/styles/DashboardPage'
import GlobalErrorHandler from 'util/GlobalErrorHandler'
import SideBar from 'components/SideBar'
import CreateResumePage from 'pages/CreateResume'

const DashboardPage: React.FC = () => {
  const classes = DashboardPageStyles()
  const initDrawerState = useMediaQuery('(min-width:600px)')
  const [drawerState, setDrawerState] = useState<boolean>(!initDrawerState)

  useEffect(() => {
    setDrawerState(initDrawerState)
  }, [initDrawerState])

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
          <SideBar drawerState={drawerState} content={<CreateResumePage />} />
        </GlobalErrorHandler>
      </div>
    </div>
  )
}

export default DashboardPage
