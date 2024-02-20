export type Step1DataType = {
  email: string
  password: string
}

export type AddressType = {
  city: number
  detail: string
  district: string
}

export type BitrhDayType = {
  year: number
  month: number
  day: number
}

export type Step2DataType = {
  name: string
  phone: string
  birthday: BitrhDayType
  address: AddressType
}

export type FormAddressType = {
  zipcode: string
  detail: string
}

export type FormDataType = {
  name: string
  email: string
  password: string
  phone: string
  birthday: string
  address: FormAddressType
}
