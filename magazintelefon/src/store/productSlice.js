import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productsApi from '../api/products'

const initialState = {
  items: [],
  meta:{},
  loading: "idle"
}
export const fetchAll = createAsyncThunk(
    'product/fetchAll',
    async () => {
      const response = await productsApi.getProducts()
      console.log(response);
      return response.data
    }
  )
  

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
     
  },
  extraReducers: (builder) => {
   
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      
      state.items.push(...action.payload.data.items)
      state.meta = action.payload.meta
      
      
    })
  },
})


// export const {  } = productSlice.actions
export const infoCount = (state) => state.product.items;

export default productSlice.reducer