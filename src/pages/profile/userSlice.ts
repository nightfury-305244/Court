import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
      if(user !== undefined) dispatch(setUserID({id: user._id}))

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

// export const updateUser = createAsyncThunk("user/update", async (data, {})=> {
//   try {
//     const res = await axios.put("https://api.binj.irusers/api/update", data);

//   } catch (error) {

//   }
// })

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (_state, action) => action.payload);
  },
});

export const { } = userSlice.actions;
export default userSlice.reducer;
