import { createStyles, makeStyles } from '@material-ui/core/styles'

const WorkExperienceStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px',
    },
    checkboxWrapper: {
      margin: '20px 0 0px 0',
    },
    dateFieldWrapper: {
      display: 'flex',
      margin: '5px 0 0px 0',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    dateFieldItem: { flex: '1 1 auto' },
    addButtonWrapper: {
      margin: '20px 0 10px 0',
    },
    removeButtonWrapper: {
      margin: '20px 0 10px 0',
      textAlign: 'right',
    },
  })
)

export default WorkExperienceStyles
