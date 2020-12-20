import { createStyles, makeStyles } from '@material-ui/styles'

const HeaderStyles = makeStyles(() =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 2,
    },
    title: {
      flexGrow: 1,
    },
  })
)

export default HeaderStyles
