// прописать логику не используем асиинхронные функции

import { createSlice } from "@reduxjs/toolkit";

export const cardSlise = createSlice({
  name: "card",

  initialState: {
    value: 0,
  },

  reducers: {
    // добавление в карзину

    add: (state) => {
      state.value +=1;
    },

    del: (state) =>{
        if (state.value === 0){
            state.value = 0
        }
        else (state.value -=1)        
    }
    
  },
});


export const { add, del } = cardSlise.actions;
export const selectCount = (state) => state.card.value

export default cardSlise.reducer

