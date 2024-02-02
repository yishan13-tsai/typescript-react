
import { FormUserInfoDataType } from './form.model';
import { RoomType } from './room.model';

export type orderDetailType = {
  roomId?: string
  name: string
  checkInDate: string
  checkOutDate: string
  peopleNum: number
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