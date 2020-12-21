import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginRight: 2,
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      position: 'fixed',
      zIndex: theme.zIndex.drawer + 1,
    },
  })
)

export default HeaderStyles
