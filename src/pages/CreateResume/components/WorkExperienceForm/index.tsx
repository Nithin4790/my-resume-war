import FormDatePicker from 'components/FormDatePicker'
import { FormTextField } from 'components/FormTextField'
import { Field, useFormikContext } from 'formik'
import { ResumeFormType } from 'models/ResumeFormType'
import React from 'react'
import ResumeFormStep from '../ResumeFormStep'
import { ResumeStepProps } from '../ResumeFormStepper'
import WorkExperienceFormStyles from './styles/WorkExperienceForm'

const WorkExperienceForm: React.FC<ResumeStepProps> = (props: ResumeStepProps) => {
  const classes = WorkExperienceFormStyles()
  const {
    values: {
      workExperience: { currentlyWorkingInd },
    },
  } = useFormikContext<ResumeFormType>()

  return (
    <div className={classes.root}>
      <ResumeFormStep label={props.label} validationSchema={props.validationSchema}>
        <Field
          fullWidth
          name="workExperience.jobTitle"
          component={FormTextField}
          label="Job Title"
        />
        <div className={classes.checkboxWrapper}>
          <label>
            <Field type="checkbox" name="workExperience.currentlyWorkingInd" />
            &nbsp;&nbsp;Currently Working
          </label>
        </div>
        <div className={classes.dateFieldWrapper}>
          <div className={classes.dateFieldItem}>
            <Field
              component={FormDatePicker}
              name="workExperience.startDate"
              label="Start Date"
              views={['year', 'month']}
              format="MM/yy"
              maxDate={new Date()}
            />
          </div>
          {!currentlyWorkingInd && (
            <div className={classes.dateFieldItem}>
              <Field
                component={FormDatePicker}
                name="workExperience.endDate"
                label="End Date"
                views={['year', 'month']}
                format="MM/yy"
                maxDate={new Date()}
              />
            </div>
          )}
        </div>

        <Field
          fullWidth
          name="workExperience.companyName"
          component={FormTextField}
          label="Company Name"
        />
        <Field
          fullWidth
          name="workExperience.location"
          component={FormTextField}
          label="Location"
        />
        <Field
          fullWidth
          name="workExperience.description"
          component={FormTextField}
          label="Description"
        />
      </ResumeFormStep>
    </div>
  )
}

export default WorkExperienceForm
