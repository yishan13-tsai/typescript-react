import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface RoomState {
    name: string,
    description: string,
    dateStart: string,
    dateEnd: string,
    people: number,
    price: number,
    areaInfo: string,
    bedInfo: string,
    maxPeople: number,
    amenityInfo: Title[],
    facilityInfo: Title[]
}
interface Title {
    isProvide: boolean,
    title: string
}

const initialState: RoomState = {
    name: '',
    description: '',
    dateStart: '',
    dateEnd: '',
    people: 0,
    price: 1000,
    areaInfo: '',
    bedInfo: '',
    maxPeople: 0,
    amenityInfo: [],
    facilityInfo: []
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
        getRoom: (state, action: PayloadAction<RoomState>) => {
            state = action.payload
        },
    }
})

export const { quantityPeople, dateStart, dateEnd, getRoom } = roomSlice.actions;
export default roomSlice.reducer;
