import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface SignupState {
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    address: {
        zipcode: string,
        detail: string
    }
}

export interface SignupUpdate {
    name: string,
    email: string,
    password: string,
    phone: string,
    birthday: string,
    address: {
        zipcode: string,
        detail: string
    },
}

const initialState: SignupState = {
    name: "joyce",
    email: "hsuchiashih@gmail.com",
    password: "hsu1234567",
    phone: "0978800885",
    birthday: "1982/2/4",
    address: {
        zipcode: "802",
        detail: "文山路23號"
    },
}

export const signupSlice = createSlice({
    name: 'room',
    initialState,
    reducers: {
        getName: (state, action: PayloadAction<string>) => {
            state.name = action.payload
        },
        getEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        getPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        getPhone: (state, action: PayloadAction<string>) => {
            state.phone = action.payload
        },
        getBirthday: (state, action: PayloadAction<string>) => {
            state.birthday = action.payload
        },
        getAddress: (state, action: PayloadAction<SignupState['address']>) => {
            state.address = action.payload
        },
    }
})

export const { getName, getEmail, getPassword, getPhone, getBirthday, getAddress } = signupSlice.actions;
export default signupSlice.reducer;

