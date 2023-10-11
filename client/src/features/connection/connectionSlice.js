import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { onConnectService } from "./connectionService";

const initialState = {
  message: {},
  isLoading: false,
};

export const onConnect = createAsyncThunk(
  "connection/onConnect",
  async (_, thunkAPI) => {
    try {
      return await onConnectService();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const connectionSlice = createSlice({
  name: "connection",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders
      .addCase(onConnect.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(onConnect.fulfilled, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      })
      .addCase(onConnect.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload;
      });
  },
});

export default connectionSlice.reducer;
