export type FormUserInfoDataType = {
  address: {
    zipcode: number
    detail: string
  }
  name: string
  phone: string
  email: string
}

export type FormDataType = {
  roomId: string
  checkInDate: string
  checkOutDate: string
  peopleNum: number
  userInfo: FormUserInfoDataType
}

export interface FormPassword {
  userId: string
  oldPassword: string
  newPassword: string
}

export interface ProfileData {
  userId: string
  address: {
    zipcode: string
    city: string
    county: string
    detail: string
  }
  name: string
  phone: string
  birthday: string
}

export interface UserProfileForm extends FormUserInfoDataType {
  userId: string
  birthday: string
  address: {
    zipcode: number
    detail: string
    city: string
    county: string
  }
}
