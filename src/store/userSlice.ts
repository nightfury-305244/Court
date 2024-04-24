import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name: string,
  lastname: string,
  phone: string,
  city: string,
  gender: number,
  username: string,
  ntrp: number
}

export interface IAuthState {
  user: UserState
  access_token?: string | null
  states: object
}

const initialState: IAuthState= {
  user: {
    name: "",
    lastname: "",
    phone: "string",
    city: "string",
    gender: 0,
    username: "string",
    ntrp: 0
  },
  access_token: sessionStorage.getItem('access_token'),
  states: {},
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{}
})

export const {} = userSlice.actions

export default userSlice.reducer