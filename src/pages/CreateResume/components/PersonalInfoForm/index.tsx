import { Field } from 'formik'
import React from 'react'
import ResumeFormStep from '../ResumeFormStep'
import { ResumeStepProps } from '../ResumeFormStepper'
import PersonalInfoFormStyles from './styles/PersonalInfoForm'
import { FormTextField } from 'components/FormTextField'

const PersonalInfoForm: React.FC<ResumeStepProps> = (props: ResumeStepProps) => {
  const classes = PersonalInfoFormStyles()

  return (
    <div className={classes.root}>
      <ResumeFormStep label={props.label}>
        <Field fullWidth name="name" component={FormTextField} label="Name" />
        <Field fullWidth name="address" component={FormTextField} label="Address" />
        <Field fullWidth name="phone" component={FormTextField} label="Phone" />
        <Field fullWidth name="email" component={FormTextField} label="Email" />
        <Field fullWidth name="summary" component={FormTextField} label="Summary" />
      </ResumeFormStep>
    </div>
  )
}

export default PersonalInfoForm
