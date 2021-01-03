import React from 'react'
import { ResumeStepProps } from 'pages/CreateResume/components/ResumeFormStepper'

const ResumeFormStep: React.FC<ResumeStepProps> = ({ children }: ResumeStepProps) => {
  return <>{children}</>
}

export default ResumeFormStep
