import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface MatchState {
  _id: string,
  subject: string,
  name: string,
  ntrp: number,
  date: string,
  duration: number,
  type: number,
  cost: number,
  city: string,
  place: string,
  descriptions: string,
  players: [],
  creators: {
      _id: string,
      username: string,
      name: string,
      image: string
  },
  commentCounter: number
}

const initialState: MatchState = {
  _id: "",
  subject: "",
  name: "",
  ntrp: 0,
  date: "",
  duration: 0,
  type: 0,
  cost: 0,
  city: "",
  place: "",
  descriptions: "",
  players: [],
  creators: {
      _id: "",
      username: "",
      name: "",
      image: ""
  },
  commentCounter: 0
};

export const getMatch = createAsyncThunk(
  "match/getmatch",
  async (_, { getState }) => {
    const state = getState() as any;
    const userId = state.auth.id

    try {
      const res = await axios.get(
        `https://api.binj.ir/api/matches/${userId}`,
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
  name: "match",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMatch.fulfilled, (_state, action) => action.payload.message);
  },
});

export const { } = userSlice.actions;
export default userSlice.reducer;
