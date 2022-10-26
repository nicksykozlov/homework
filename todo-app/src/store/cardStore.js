// прописать логику не используем асиинхронные функции

import { createSlice } from "@reduxjs/toolkit";

export const cardSlise = createSlice({
  name: "card",

  initialState: {
    items: [],
  },

  reducers: {
    // добавление в карзину

    add: (state, action) => {
      const productId=action.payload;
      if(state.items.some(item=> item.id===productId)){
        const item = state.items.find(i=> i.id===productId);
        item.count = item.count+1
      }else{
        state.items.push({
          id:productId,
          count: 1
        })
      }
     
    },

    del: (state, action) =>{
       const id = action.payload;
       const count = state.items.find(i=> i.id === id).count;
       if(count>1){
        state.items = state.items.map(i=> {
          if(i.id===id){
            i.count = i.count-1
          }
          return i;
        })
       } else{
        state.items = state.items.filter(i=>i.id !==id)
       }
    }
    
  },
});


export const { add, del } = cardSlise.actions;
export const selectCount = (state) => state.card.items

export default cardSlise.reducer

