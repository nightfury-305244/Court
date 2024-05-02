import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setUserID } from "../../store/authSlice";

export interface UserState {
  bio: string;
  city: string;
  followerCount: number;
  followingCount: number;
  handSide: string;
  height: number;
  image: string;
  name: string;
  ntrp: number;
  username: string;
  birth: string;
  lastname: string;
  about: string;
}

const initialState: UserState = {
  bio: "",
  city: "",
  followerCount: 0,
  followingCount: 0,
  handSide: "",
  height: 0,
  image: "",
  name: "",
  ntrp: 0,
  username: "",
  birth: "",
  lastname: "",
  about: ""
};

interface UserId {
  _id: string;
  image: string;
  username: string;
  name: string;
}

export const getId = createAsyncThunk(
  "user/id",
  async (username: any, {dispatch}) => {
    try {
      const res = await axios.get("https://api.binj.ir/api/users/search")
      const data: UserId[] = res.data.message
      const user:UserId | undefined = data.find(item=>item.username === username && item.username !== "")

      console.log(user)
      if(user) dispatch(setUserID({id: user._id}))
      else dispatch(setUserID({id: "new_member"}))

    } catch (error) {
      console.log("error: ", error)
    }
  }
)

export const getProfile = createAsyncThunk(
  "user/profile",
  async (_, { getState }) => {
    const state = getState() as any;

    try {
      const res = await axios.get(
        `https://api.binj.ir/api/users/profile/${state.auth.id}`,
        {
          headers: {
            Authorization: `${state.auth.token}`,
          },
        }
      );
      return res.data;
    } catch (error) {
      console.log("error: ", error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action: PayloadAction<any>) => {
      state.name = action.payload.name
      state.lastname = action.payload.lastname
      state.city = action.payload.city
      state.ntrp = action.payload.ntrp
      state.birth = action.payload.age
      state.height = action.payload.height
      state.handSide = action.payload.handSide
      state.about = action.payload.about
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (_state, action) => action.payload);
  },
});

export const { updateUser } = userSlice.actions;
export default userSlice.reducer;
