import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./rootReducer";

export const store = configureStore({
  reducer: createReducer()
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch