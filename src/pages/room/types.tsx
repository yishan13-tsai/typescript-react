export type Room = {
    name: string,
    description: string,
    areaInfo: string,
    bedInfo: string,
    maxPeople: number,
    price: number
}

export type RoomResponse = {
    result: Room[],
}
