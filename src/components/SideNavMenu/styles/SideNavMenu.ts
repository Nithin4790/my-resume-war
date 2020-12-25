import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const drawerWidth = 200

const SideNavMenuStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      marginTop: 60,
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    drawerWrapper: {
      width: drawerWidth,
    },
    contentWrapper: {
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      marginTop: 60,
    },
  })
)

export default SideNavMenuStyles
