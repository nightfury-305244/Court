import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface IAuthState {
  refreshToken:string;
  token:string;
}

const initialState: IAuthState= {
  refreshToken:"",
  token: sessionStorage.getItem("access_token") as string,
}

export const loginUser = createAsyncThunk("user/setUser", async (user: any, {}) => {
  try {
    const res = await axios.post('https://api.binj.ir/api/users/auth/login', user);
    return res.data
  } catch (error) {
    console.log('err=',error)
  }
})

export const logoutUser = createAsyncThunk('user/logout', async (_, {dispatch}) => {
  sessionStorage.removeItem('access_token')

  dispatch(userLoggedOut())
  window.location.reload()
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    userLoggedOut: (_state, _action: PayloadAction<void>) => initialState,
  },
  extraReducers:(builder) => {
    builder.addCase(loginUser.fulfilled,(state,action) => {
      state.refreshToken = action.payload.body.refreshToken;
      state.token = action.payload.body.token;
      sessionStorage.setItem('access_token', state.token);
    })
  }
})

export const {userLoggedOut} = userSlice.actions
export default userSlice.reducer