import FormDatePicker from 'components/FormDatePicker'
import { FormTextField } from 'components/FormTextField'
import { Field } from 'formik'
import React from 'react'
import ResumeFormStep from '../ResumeFormStep'
import { ResumeStepProps } from '../ResumeFormStepper'
import WorkExperienceFormStyles from './styles/WorkExperienceForm'

const WorkExperienceForm: React.FC<ResumeStepProps> = (props: ResumeStepProps) => {
  const classes = WorkExperienceFormStyles()
  return (
    <div className={classes.root}>
      <ResumeFormStep label={props.label} validationSchema={props.validationSchema}>
        <Field fullWidth name="jobTitle" component={FormTextField} label="Job Title" />
        <div className={classes.checkboxWrapper}>
          <label>
            <Field type="checkbox" name="currentlyWorkingInd" />
            &nbsp;&nbsp;Currently Working
          </label>
        </div>
        <div className={classes.dateFieldWrapper}>
          <div className={classes.dateFieldItem}>
            <Field component={FormDatePicker} name="startDate" label="Start Date" />
          </div>
          {console.log(props)}
          <div className={classes.dateFieldItem}>
            <Field component={FormDatePicker} name="endDate" label="End Date" />
          </div>
        </div>

        <Field
          fullWidth
          name="companyName"
          component={FormTextField}
          label="Company Name"
        />
        <Field fullWidth name="location" component={FormTextField} label="Location" />
        <Field
          fullWidth
          name="description"
          component={FormTextField}
          label="Description"
        />
      </ResumeFormStep>
    </div>
  )
}

export default WorkExperienceForm
