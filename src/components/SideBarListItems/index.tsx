import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import DashboardIcon from '@material-ui/icons/Dashboard'
import NoteAddIcon from '@material-ui/icons/NoteAdd'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FileCopyIcon from '@material-ui/icons/FileCopy'

interface Props {
  setSelectedSideBarItem: (selectedListItem: string) => void
}

const SideBarListItems: React.FC<Props> = (props: Props) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0)

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
    listItemText: string
  ) => {
    setSelectedIndex(index)
    props.setSelectedSideBarItem(listItemText)
  }
  return (
    <div>
      <ListItem
        button
        selected={selectedIndex === 0}
        onClick={(event) => handleListItemClick(event, 0, 'dashboard')}
      >
        <ListItemIcon>
          <DashboardIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 1}
        onClick={(event) => handleListItemClick(event, 1, 'create')}
      >
        <ListItemIcon>
          <NoteAddIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Create" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 2}
        onClick={(event) => handleListItemClick(event, 2, 'saved')}
      >
        <ListItemIcon>
          <FileCopyIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Saved" />
      </ListItem>
      <ListItem
        button
        selected={selectedIndex === 3}
        onClick={(event) => handleListItemClick(event, 3, 'logout')}
      >
        <ListItemIcon>
          <ExitToAppIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  )
}
export default SideBarListItems
