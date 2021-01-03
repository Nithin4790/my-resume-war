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
        <Field
          fullWidth
          name="personalInfo.name"
          component={FormTextField}
          label="Name"
        />
        <Field
          fullWidth
          name="personalInfo.address"
          component={FormTextField}
          label="Address"
        />
        <Field
          fullWidth
          name="personalInfo.phone"
          component={FormTextField}
          label="Phone"
        />
        <Field
          fullWidth
          name="personalInfo.email"
          component={FormTextField}
          label="Email"
        />
        <Field
          fullWidth
          name="personalInfo.summary"
          component={FormTextField}
          label="Summary"
        />
      </ResumeFormStep>
    </div>
  )
}

export default PersonalInfoForm
