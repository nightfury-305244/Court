import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IAuthState {
  refreshToken: string;
  token: string;
  username: string;
  password: string;
  id: string;
}

const initialState: IAuthState = {
  refreshToken:"",
  token: sessionStorage.getItem("access_token") as string,
  username: sessionStorage.getItem('access_username') as string,
  password: "",
  id: sessionStorage.getItem("access_id") as string
}

export const logoutUser = createAsyncThunk('auth/logout', async (_, {dispatch}) => {
  sessionStorage.removeItem('access_token')
  sessionStorage.removeItem('access_id')
  sessionStorage.removeItem('access_username')

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
    },
    setUserID: (state, action: PayloadAction<{id: string}>) => {
      state.id = action.payload.id
      sessionStorage.setItem('access_id', state.id)
    },
  },
  extraReducers:() => {}
})

export const {userLoggedOut, setToken, setRegister, setUserID} = authSlice.actions
export default authSlice.reducer