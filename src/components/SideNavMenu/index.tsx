import React from 'react'
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import SideNavMenuStyles from 'components/SideNavMenu/styles/SideNavMenu'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

interface Props {
  drawerState: boolean
}

const SideNavMenu: React.FC<Props> = (props: Props) => {
  const classes = SideNavMenuStyles()
  return (
    <div className={classes.root}>
      <Drawer
        variant="persistent"
        anchor="left"
        className={classes.drawer}
        open={props.drawerState}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerContainer}>
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
    </div>
  )
}

export default SideNavMenu
