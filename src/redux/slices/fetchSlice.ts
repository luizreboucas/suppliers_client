import { createSlice } from '@reduxjs/toolkit'

const fetchSlice = createSlice({
  name: 'fetch',
  initialState: true,
  reducers: {
    fetchTrue(state) {
      return true
    },
    fetchFalse(state) {
        return false
      },
  },
})

export const { fetchTrue, fetchFalse } = fetchSlice.actions
export default fetchSlice.reducer