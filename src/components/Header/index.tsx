import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HeaderStyles from 'components/Header/styles/Header'

interface Props {
  drawerState: boolean
  onDrawerStateUpdate: (drawerState: boolean) => void
}

const Header: React.FC<Props> = (props: Props) => {
  const classes = HeaderStyles()
  const toggleDrawerState = () => {
    props.onDrawerStateUpdate(!props.drawerState)
  }
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolBar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawerState}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          MyResume
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
