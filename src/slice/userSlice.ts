import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface UserAddress {
  zipcode: number
  detail: string
  county: string
  city: string
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
  birthday: string
  id: string
  address: UserAddress
}

export const defaultUser = {
  address: {
    zipcode: 0,
    detail: '',
    county: '',
    city: '',
  },
  _id: '',
  name: '',
  email: '',
  phone: '',
  birthday: '',
  createdAt: '',
  updatedAt: '',
  id: '',
}

export interface UserState {
  currentUser: User | null
  isLoggedIn: boolean
}

const initialState: UserState = {
  currentUser: null,
  isLoggedIn: false,
}

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
      state.isLoggedIn = true
    },
    logoutUser: (state) => {
      state.currentUser = null
      state.isLoggedIn = false
    },
    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.currentUser) {
        state.currentUser = { ...state.currentUser, ...action.payload }
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, updateUser } = counterSlice.actions

export default counterSlice.reducer
