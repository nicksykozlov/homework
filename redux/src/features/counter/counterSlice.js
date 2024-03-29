import { createAsyncThunk, createSlice,  } from '@reduxjs/toolkit';

import { fetchCount } from './counterAPI';
import { infoCount } from './userSlice';



export const userAsync = createAsyncThunk(// весь масив user
  'users/fetchUsers',
  async () => {
    const response = await fetchCount();
    const json = await response.json()
    return json.users;
  }
);


// const initialState = {
//   value: [],
//   status: "idle"
// };
 
export const userSlice = createSlice({
  name: 'user',// название в store
  
  initialState: {
    value: [],
    status: "idle"
  }
  ,
 
  reducers: {    
    del: (state, action) => {
      state.value = state.value.filter(item =>item.id !== action.payload)
      
    },

         },


  
  extraReducers: (builder) => {
    builder
      .addCase(userAsync.pending, (state) => {
        state.status = 'loading';
      })//идет загрузка 
      .addCase(userAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value = action.payload;
      });
  },
});

export const { del, info } = userSlice.actions;


export const selectCount = (state) => state.user.value;

// state - аргумент функции. user название в store 
// reducer: {
//   user: counterReducer,
  // },
//value - это значение которое мы инициализировали в const initialState и меняли  extraReducers
// value может быть любое слово только тогда надо везде использовать новое слов
export default userSlice.reducer;
