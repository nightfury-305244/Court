import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  refreshToken: string;
  token: string;
}

const initialState: IAuthState = {
  refreshToken:"",
  token: sessionStorage.getItem("access_token") as string,
}

export const logoutUser = createAsyncThunk('auth/logout', async (_, {dispatch}) => {
  sessionStorage.removeItem('access_token')

  dispatch(userLoggedOut())
  window.location.reload()
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers:{
    userLoggedOut: (_state, _action: PayloadAction<void>) => initialState,
    setToken: (state, action: PayloadAction<IAuthState>) => {
      state.refreshToken = action.payload.refreshToken
      state.token = action.payload.token
      sessionStorage.setItem('access_token', state.token)
    }
  },
  extraReducers:() => {}
})

export const {userLoggedOut, setToken} = authSlice.actions
export default authSlice.reducer