import {
  Button,
  CircularProgress,
  Grid,
  Step,
  StepContent,
  StepLabel,
  Stepper,
} from '@material-ui/core'
import { Form, Formik, FormikConfig, FormikProps, FormikValues } from 'formik'
import React, { useState } from 'react'

export interface ResumeStepProps
  extends Pick<FormikConfig<FormikValues>, 'children' | 'validationSchema'> {
  label: string
}

const ResumeFormStepper: React.FC<FormikConfig<FormikValues>> = ({
  children,
  ...props
}: FormikConfig<FormikValues>) => {
  const childrenArray = React.Children.toArray(
    children
  ) as React.ReactElement<ResumeStepProps>[]
  const [step, setStep] = useState(0)
  const currentChild = childrenArray[step]
  const [completed, setCompleted] = useState(false)

  function isLastStep() {
    return step === childrenArray.length - 1
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={async (values, helpers) => {
        if (isLastStep()) {
          await props.onSubmit(values, helpers)
          setCompleted(true)
          console.log(values)
        } else {
          setStep((s) => s + 1)
          helpers.setTouched({})
        }
      }}
    >
      {(props: FormikProps<any>) => (
        <Form noValidate autoComplete="off">
          <Stepper activeStep={step} orientation="vertical">
            {childrenArray.map((child, index) => (
              <Step key={child.props.label} completed={step > index || completed}>
                <StepLabel onClick={() => setStep(index)}>
                  {childrenArray[index].props.label}
                </StepLabel>
                <StepContent>
                  {child}
                  <Grid container spacing={2} justify="center">
                    {step > 0 ? (
                      <Grid item>
                        <Button
                          disabled={step === 0}
                          variant="contained"
                          color="primary"
                          onClick={() => setStep((s) => s - 1)}
                        >
                          Back
                        </Button>
                      </Grid>
                    ) : null}
                    <Grid item>
                      <Button
                        startIcon={
                          props.isSubmitting ? <CircularProgress size="1rem" /> : null
                        }
                        disabled={props.isSubmitting}
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        {props.isSubmitting
                          ? 'Submitting'
                          : isLastStep()
                          ? 'Submit'
                          : 'Next'}
                      </Button>
                    </Grid>
                  </Grid>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </Form>
      )}
    </Formik>
  )
}

export default ResumeFormStepper
