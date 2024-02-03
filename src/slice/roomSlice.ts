import { DateSelected, RoomType } from "@/types/room.model";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";



export interface RoomState {
    detail: RoomType | null,
    dateStart: string,
    dateEnd: string,
    people: number,
    price: number,
    days: number
}


const initialState: RoomState = {
    detail: null,
    dateStart: '',
    dateEnd: '',
    days: 0,
    people: 0,
    price: 1000,
}

export const roomSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        quantityPeople: (state, action: PayloadAction<number>) => {
            state.people = action.payload
        },
        dateDayStartEnd: (state, action: PayloadAction<DateSelected>) => {
            state.dateStart = action.payload.startDate
            state.dateEnd = action.payload.timeEnd
            state.days = action.payload.days
        },
        getRoom: (state, action: PayloadAction<RoomType>) => {
            state.detail = action.payload
        },
    }
})

export const { quantityPeople, dateDayStartEnd, getRoom } = roomSlice.actions;
export default roomSlice.reducer;

