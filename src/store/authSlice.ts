import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  refreshToken: string;
  token: string;
  username: string;
  password: string;
}

const initialState: IAuthState = {
  refreshToken:"",
  token: sessionStorage.getItem("access_token") as string,
  username: sessionStorage.getItem("access_username") as string,
  password: sessionStorage.getItem("access_password") as string,
}

export const logoutUser = createAsyncThunk('auth/logout', async (_, {dispatch}) => {
  sessionStorage.removeItem('access_token')
  sessionStorage.removeItem('access_username')
  sessionStorage.removeItem('access_password')

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
    },
    setRegister: (
      state,
      action: PayloadAction<{ systemuser: string; password: string }>
    ) => {
      state.username = action.payload.systemuser;
      state.password = action.payload.password;
      sessionStorage.setItem("access_username", state.username)
      sessionStorage.setItem("access_password", state.password)
    },
  },
  extraReducers:() => {}
})

export const {userLoggedOut, setToken, setRegister} = authSlice.actions
export default authSlice.reducer