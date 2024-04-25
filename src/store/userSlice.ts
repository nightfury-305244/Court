import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IAuthState {
  refreshToken:string;
  token:string;
}

const initialState: IAuthState= {
  refreshToken:"",
  token:""
}

export const loginUser = createAsyncThunk("user/setUser", async (user: any, {}) => {
  try {
    const res = await axios.post('https://cors-anywhere.herokuapp.com/https://api.binj.ir/api/users/auth/login', user);
    return res.data
  } catch (error) {
    console.log('err=',error)
  }
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{},
  extraReducers:(builder) => {
    builder.addCase(loginUser.fulfilled,(state,action) => {
      state.refreshToken = action.payload.body.refreshToken;
      state.token = action.payload.body.token;
      sessionStorage.setItem('access_token', state.token);
      console.log(state.token)
    })
  }
})

export default userSlice.reducer