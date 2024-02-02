import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export interface UserAddress {
  zipcode: number
  detail: string
}
export interface User {
  // status?: boolean
  // token?: string
  // result?: {
    _id?: string
    name?: string
    email?: string
    phone?: string
    birthday?: string
    id?: string
    address?: UserAddress
  // }
}

export interface UserState {
  currentUser: User | null
  isLoggedIn: boolean
}

const initialState: UserState = {
  currentUser: null,
  isLoggedIn: false
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
    }
  }
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser, updateUser } = counterSlice.actions

export default counterSlice.reducer
