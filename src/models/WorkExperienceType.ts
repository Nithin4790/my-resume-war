export interface WorkExperienceType {
  jobTitle: string | null
  currentlyWorkingInd: boolean
  startDate: Date | undefined
  endDate: Date | undefined
  companyName: string | null
  location: string | null
  description: string | null
}

export const initWorkExperienceValues: WorkExperienceType = {
  jobTitle: '',
  currentlyWorkingInd: false,
  startDate: new Date(),
  endDate: new Date(),
  companyName: '',
  location: '',
  description: '',
}
