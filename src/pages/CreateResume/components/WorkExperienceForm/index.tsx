import FormDatePicker from 'components/FormDatePicker'
import { FormTextField } from 'components/FormTextField'
import { Field, FieldArray, useFormikContext } from 'formik'
import { ResumeFormType } from 'models/ResumeFormType'
import React from 'react'
import ResumeFormStep from 'pages/CreateResume/components/ResumeFormStep'
import { ResumeStepProps } from 'pages/CreateResume/components/ResumeFormStepper'
import WorkExperienceFormStyles from 'pages/CreateResume/components/WorkExperienceForm/styles/WorkExperienceForm'
import { Button, Grid } from '@material-ui/core'
import { initWorkExperienceValues } from 'models/WorkExperienceType'
import DeleteIcon from '@material-ui/icons/Delete'

const WorkExperienceForm: React.FC<ResumeStepProps> = (props: ResumeStepProps) => {
  const classes = WorkExperienceFormStyles()
  const {
    values: { workExperience },
  } = useFormikContext<ResumeFormType>()

  return (
    <div className={classes.root}>
      <ResumeFormStep label={props.label} validationSchema={props.validationSchema}>
        <FieldArray name="workExperience">
          {({ remove, push }) => (
            <div>
              {workExperience.length > 0 &&
                workExperience.map((workExpObj, index) => (
                  <div key={index}>
                    <Field
                      fullWidth
                      name={`workExperience.${index}.jobTitle`}
                      component={FormTextField}
                      label="Job Title"
                    />
                    <div className={classes.checkboxWrapper}>
                      <label>
                        <Field
                          type="checkbox"
                          name={`workExperience.${index}.currentlyWorkingInd`}
                        />
                        &nbsp;&nbsp;Currently Working
                      </label>
                    </div>
                    <div className={classes.dateFieldWrapper}>
                      <div className={classes.dateFieldItem}>
                        <Field
                          component={FormDatePicker}
                          name={`workExperience.${index}.startDate`}
                          label="Start Date"
                          views={['year', 'month']}
                          format="MM/yy"
                          maxDate={new Date()}
                        />
                      </div>
                      {!workExpObj.currentlyWorkingInd && (
                        <div className={classes.dateFieldItem}>
                          <Field
                            component={FormDatePicker}
                            name={`workExperience.${index}.endDate`}
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
                      name={`workExperience.${index}.companyName`}
                      component={FormTextField}
                      label="Company Name"
                    />
                    <Field
                      fullWidth
                      name={`workExperience.${index}.location`}
                      component={FormTextField}
                      label="Location"
                    />
                    <Field
                      fullWidth
                      name={`workExperience.${index}.description`}
                      component={FormTextField}
                      label="Description"
                    />
                    <div className={classes.removeButtonWrapper}>
                      <DeleteIcon
                        style={{ color: '#CA0B00' }}
                        onClick={() => {
                          remove(index)
                        }}
                      ></DeleteIcon>
                    </div>
                  </div>
                ))}
              <div className={classes.addButtonWrapper}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => {
                        push(initWorkExperienceValues)
                      }}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
        </FieldArray>
      </ResumeFormStep>
    </div>
  )
}

export default WorkExperienceForm
