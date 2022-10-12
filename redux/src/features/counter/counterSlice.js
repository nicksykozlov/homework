import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';



export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async () => {
    const response = await fetchCount();
    const json = await response.json()
    return json.users;
  }
);

const initialState = {
  value: [],
  status: "idle"
};

export const counterSlice = createSlice({
  name: 'state',
  initialState,
 
  reducers: { },
  
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const { increment, decrement, incrementByAmount, add } = counterSlice.actions;


export const selectCount = (state) => state.counter.value;


export default counterSlice.reducer;
