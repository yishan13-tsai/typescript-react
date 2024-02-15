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

export interface UserProfileForm extends FormUserInfoDataType {
  userId: string
  birthday: string
  oldPassword: string
  newPassword: string
}
