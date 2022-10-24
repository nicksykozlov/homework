import { configureStore } from '@reduxjs/toolkit';
import productReducer from "./productStore"

export default configureStore({
  reducer: {
    products: productReducer
    
  },
});
