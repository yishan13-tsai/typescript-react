import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface SignupState {
  name: string
  email: string
  password: string
  phone: string
  birthday: BitrhDayType
  address: AddressType
}

export type AddressType = {
  city: number
  detail: string
  district: string
}

export type BitrhDayType = {
  year: number
  month: number
  day: number
}

const initialState: SignupState = {
  name: 'joyce',
  email: 'hsuchiashih@gmail.com',
  password: 'hsu1234567',
  phone: '0978800885',
  birthday: {
    year: 1990,
    month: 1,
    day: 1,
  },
  address: {
    city: 1,
    detail: '文山區82號',
    district: '802',
  },
}

export const signupSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload
    },
    setBirthday: (state, action: PayloadAction<BitrhDayType>) => {
      state.birthday = action.payload
    },
    setAddress: (state, action: PayloadAction<AddressType>) => {
      state.address = action.payload
    },
  },
})

export const {
  setName,
  setEmail,
  setPassword,
  setPhone,
  setBirthday,
  setAddress,
} = signupSlice.actions
export default signupSlice.reducer
