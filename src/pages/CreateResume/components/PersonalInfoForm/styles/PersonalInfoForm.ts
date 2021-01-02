import { createStyles, makeStyles } from '@material-ui/core/styles'

const PersonalInfoFormStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px',
    },
  })
)

export default PersonalInfoFormStyles
