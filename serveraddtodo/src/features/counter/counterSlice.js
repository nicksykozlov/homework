import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: [],
  status: 'idle',
};


export const fetchTodo = createAsyncThunk(
  'todo/fetchTodo',
  async()=>{
      const response = await fetch(`https://dummyjson.com/todos`)
      const json = await response.json()
      return json.todos

  } 
  )
export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  
  reducers: {
    
  },
  
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const {  } = counterSlice.actions;


export const selectTodo = (state) => state.counter.value;



export default counterSlice.reducer;
