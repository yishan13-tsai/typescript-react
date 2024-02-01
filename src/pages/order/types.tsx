export type orderDetailType = {
  roomId?: string
  name: string
  checkInDate: string
  checkOutDate: string
  peopleNum: number
}

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