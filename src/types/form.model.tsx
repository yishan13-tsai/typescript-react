
export type FormUserInfoDataType = {
  address: {
    zipcode: string
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