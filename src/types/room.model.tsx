
export type RoomSubItemInfo = {
    title: string;
    isProvide: boolean
}
export type RoomType = {
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

export type RoomResponse = {
    result: RoomType[],
}

export type DateSelected = {
    days: number,
    startDate: string,
    timeEnd: string
}