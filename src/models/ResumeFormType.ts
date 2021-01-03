import { initPersonalInfoValues, PersonalInfoType } from './PersonalInfoType'
import { initWorkExperienceValues, WorkExperienceType } from './WorkExperienceType'

export interface ResumeFormType {
  personalInfo: PersonalInfoType
  workExperience: WorkExperienceType
}

export const initialResumeFormValues = {
  personalInfo: initPersonalInfoValues,
  workExperience: initWorkExperienceValues,
}
