import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export interface UserState {
  _id?: string,
  firstName?: string,
  lastName?: string,
  city?: string,
  gender?: number,
  username?: string,
  ntrp?: number,
  handside?: string,
  password?: string,
}

const initialState: UserState = {
  _id: "",
  firstName: "",
  lastName: "",
  city: "",
  gender: 0,
  username: "",
  ntrp: 0,
  handside: "",
  password: "",
}

export const getProfile = createAsyncThunk('user/profile', async (id, {}) => {
  try {
    const res = await axios.get(`https://api.binj.irusers/profile/${id}`)
    return res.data
  } catch (error) {
    console.log("error: ", error)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.fulfilled, (state, action)=>{
        state = action.payload.data
        return state
      })
  }
})

export default userSlice.reducer