import { createAsyncThunk, createSlice,  } from '@reduxjs/toolkit';

import { fetchCount } from './counterAPI';



export const userInfo = createAsyncThunk(// весь масив user
  'user/fetchUsers',
  async (id) => {
    const response = await fetch(`https://dummyjson.com/users/${id}`);
    const json = await response.json()
    return json;
  }
);


// const initialState = {
//   value: [],
//   status: "idle"
// };
 
export const infoSlice = createSlice({
  name: 'info',// название в store
  
  initialState: {
    data: [],
    status: "idle"
  },
 
  reducers: {    
        
  },

  
  extraReducers: (builder) => {
    builder
      .addCase(userInfo.pending, (state) => {
        state.status = 'loading';
      })//идет загрузка 
      .addCase(userInfo.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const {  } = infoSlice.actions;


export const infoCount = (state) => state.info.data;

// state - аргумент функции. user название в store 
// reducer: {
//   user: counterReducer,
  // },
//value - это значение которое мы инициализировали в const initialState и меняли  extraReducers
// value может быть любое слово только тогда надо везде использовать новое слов
export default infoSlice.reducer;