import { createStyles, makeStyles } from '@material-ui/styles'

const CreateResumePageStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
    },
    resumeFormSections: {
      width: '240px',
      justifyContent: 'center',
    },
    resumeFormFields: {
      display: 'flex',
      flexDirection: 'column',
    },
  })
)

export default CreateResumePageStyles
