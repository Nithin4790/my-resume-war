import { Card, CardContent } from '@material-ui/core'
import React from 'react'
import PersonalInfoForm from 'pages/CreateResume/components/PersonalInfoForm'
import WorkExperienceForm from 'pages/CreateResume/components/WorkExperienceForm'
import ResumeFormStepper from 'pages/CreateResume/components/ResumeFormStepper'
import * as Yup from 'yup'
import { initialResumeFormValues } from 'models/ResumeFormType'

const CreateResumePage: React.FC = () => {
  const handleSubmit = () => {
    console.log('Submitting')
  }
  const PersonalInfoValidationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    phone: Yup.string().required('Phone is required'),
    email: Yup.string().required('Email is required'),
  })
  return (
    <>
      <Card>
        <CardContent>
          <ResumeFormStepper
            initialValues={initialResumeFormValues}
            onSubmit={() => {
              handleSubmit()
            }}
          >
            <PersonalInfoForm
              label="Personal Information"
              // validationSchema={PersonalInfoValidationSchema}
            />
            <WorkExperienceForm label="Work Experience" />
          </ResumeFormStepper>
        </CardContent>
      </Card>
    </>
  )
}

export default CreateResumePage
