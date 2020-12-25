import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const HeaderStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: 2,
    },
    title: {
      flexGrow: 1,
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
)

export default HeaderStyles
