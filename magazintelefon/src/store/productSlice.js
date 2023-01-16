import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import productsApi from '../api/products'


const initialState = {
  items: [],
  meta:{},
  currentPage: 1,
  perPage: 3,
  totalCount: 0,
  loading: "idle"
}
// асинхронной функцие вызываем наш сервер из product
export const fetchAll = createAsyncThunk(
    'product/fetchAll',
    async () => {
      const response = await productsApi.getProducts() // productsApi ипомртировали из products - это axios запрос 
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
      
      state.items.push(...action.payload.data)
      state.meta = action.payload.meta
      state.totalCount = action.payload.total
      
    })
  },
})


// export const {  } = productSlice.actions
export const infoCount = (state) => state.product.items;

export default productSlice.reducer