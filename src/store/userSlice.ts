import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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

export const getProfile = createAsyncThunk(
  "user/profile",
  async (username: any, { getState }) => {
    const state = getState() as any;

    console.log("effect");
    try {
      const res = await axios.get(
        `https://api.binj.ir/api/users/profile/${username}`,
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
    builder.addCase(getProfile.fulfilled, (state, action) => action.payload);
  },
});

export const { } = userSlice.actions;
export default userSlice.reducer;
