import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'
import SideBarStyles from './styles/SideBar'

interface Props {
  drawerState: boolean
}

const SideBar: React.FC<Props> = (props: Props) => {
  const classes = SideBarStyles()

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
        <div className={classes.drawerListWrapper}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <h1>Hello</h1>
      </main>
    </div>
  )
}
export default SideBar
