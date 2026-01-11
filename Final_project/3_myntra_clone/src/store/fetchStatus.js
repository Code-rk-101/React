import { createSlice } from "@reduxjs/toolkit";

const FetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: 
  {
    fetchDone: false,
    currentFetcing: false,
  },
  reducers: 
  {
    markFetchDone: (State) => {
      State.fetchDone = true;
    },
    markFetchStarted: (State) => {
      State.currentFetcing = true;
    },
    markFetchEnded: (State) => {
      State.currentFetcing = false;
    },
  },
});

export const FetchStatusAction = FetchStatusSlice.actions;
export default FetchStatusSlice;
