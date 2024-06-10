import { configureStore } from '@reduxjs/toolkit'
import fetchReducer from '../slices/fetchSlice'

export const store = configureStore({
  reducer: {
    fetch: fetchReducer
  },
})