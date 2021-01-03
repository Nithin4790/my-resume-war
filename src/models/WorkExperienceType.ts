export interface WorkExperienceType {
  jobTitle: string | null
  currentlyWorkingInd: boolean
  startDate: string | null
  endDate: string | null
  companyName: string | null
  location: string | null
  description: string | null
}

export const initWorkExperienceValues: WorkExperienceType = {
  jobTitle: '',
  currentlyWorkingInd: false,
  startDate: '',
  endDate: '',
  companyName: '',
  location: '',
  description: '',
}
