export interface PersonalInfoType {
  name: string | null
  address: string | null
  phone: string | null
  email: string | null
  summary: string | null
}

export const initPersonalInfoValues: PersonalInfoType = {
  name: '',
  address: '',
  phone: '',
  email: '',
  summary: '',
}
