import { initPersonalInfoValues, PersonalInfoType } from 'models/PersonalInfoType'
import { initWorkExperienceValues, WorkExperienceType } from 'models/WorkExperienceType'

export interface ResumeFormType {
  personalInfo: PersonalInfoType
  workExperience: WorkExperienceType[]
}

export const initialResumeFormValues = {
  personalInfo: initPersonalInfoValues,
  workExperience: [initWorkExperienceValues],
}
