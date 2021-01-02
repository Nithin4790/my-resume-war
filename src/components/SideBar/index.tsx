import { CssBaseline, Drawer } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import SideBarStyles from './styles/SideBar'
import SideBarListItems from 'components/SideBarListItems'
import CreateResumePage from 'pages/CreateResume'

interface Props {
  drawerState: boolean
  content?: React.ReactNode
}

const SideBar: React.FC<Props> = (props: Props) => {
  const classes = SideBarStyles()
  const [selectedSideBarItem, setSelectedSideBarItem] = React.useState('null')
  const selectContent = () => {
    switch (selectedSideBarItem) {
      case 'dashboard':
        return <p>Dashboard</p>
      case 'create':
        return <CreateResumePage />
      case 'saved':
        return <p>Saved</p>
      case 'logout':
        return <p>logout</p>
      default:
        return <p>Default</p>
    }
  }
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(
            classes.drawerPaper,
            !props.drawerState && classes.drawerPaperClose
          ),
        }}
        open={props.drawerState}
      >
        <SideBarListItems setSelectedSideBarItem={setSelectedSideBarItem} />
      </Drawer>
      <main className={classes.content}>
        <div>{selectContent()}</div>
      </main>
    </div>
  )
}
export default SideBar
