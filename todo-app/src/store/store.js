import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./productStore"
import cardReducer from './cardStore'


export default configureStore({
  reducer: {
    products: productReducer,
    card:cardReducer,
    
  },
});
