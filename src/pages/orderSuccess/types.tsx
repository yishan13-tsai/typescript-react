import { FormUserInfoDataType } from '@/pages/order/types'

type RoomSubItemInfo = {
  title: string;
  isProvide: boolean
}

type RoomType = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
  imageUrlList: string[]
  areaInfo: string
  bedInfo: string,
  maxPeople: number,
  price: number,
  status: number,
  facilityInfo: RoomSubItemInfo[],
  amenityInfo: RoomSubItemInfo[],
  createdAt: string,
  updatedAt: string
}

export type OrderDataType = {
  userInfo: FormUserInfoDataType;
  _id: string;
  roomId: RoomType;
  checkInDate: string,
  checkOutDate: string,
  peopleNum: number,
  orderUserId: string,
  status: number,
  createdAt: string,
  updatedAt: string
}