import { RoomType } from "@/types/room.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";



export interface RoomState {
    detail: RoomType | null,
    dateStart: string,
    dateEnd: string,
    people: number,
    price: number,

}


const initialState: RoomState = {
    // name: '',
    // description: '',
    detail: null,
    dateStart: '',
    dateEnd: '',
    people: 0,
    price: 1000,
    // areaInfo: '',
    // bedInfo: '',
    // maxPeople: 0,
    // amenityInfo: [],
    // facilityInfo: []
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        quantityPeople: (state, action: PayloadAction<number>) => {
            state.people = action.payload
        },
        dateStart: (state, action: PayloadAction<string>) => {
            state.dateStart = action.payload
        },
        dateEnd: (state, action: PayloadAction<string>) => {
            state.dateEnd = action.payload
        },
        getRoom: (state, action: PayloadAction<RoomType>) => {
            state.detail = action.payload
        },
    }
})

export const { quantityPeople, dateStart, dateEnd, getRoom } = roomSlice.actions;
export default roomSlice.reducer;

