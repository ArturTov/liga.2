import { createSlice } from "@reduxjs/toolkit";
import { getExecutorsData } from "../actions/ExecutorsDataAction";

const executorsDataSlice = createSlice({
  name: "executorsDatarders",
  initialState: {
    error: false,
    load: false,
    message: "",
    data: null,
    responseStatus: "",
  },
  reducers: {},
  extraReducers: {
    [getExecutorsData.pending]: (state) => {
      state.load = true;
    },
    [getExecutorsData.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.load = false;
    },
    [getExecutorsData.rejected]: (state, { payload }) => {
      console.log("error during filter tasks");
      state.load = false;
    },
  },
});

export default executorsDataSlice.reducer;
