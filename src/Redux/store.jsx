import { configureStore } from '@reduxjs/toolkit'
import appSlice from './Slices/appSlice'
import productSlice from './Slices/productSlice'
import basketSlice from './Slices/basketSlice'

export const store = configureStore({
  reducer: {
    app:appSlice,
    product:productSlice,
    basket:basketSlice,
  },
})