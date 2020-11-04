const { createSlice } = require("@reduxjs/toolkit")

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 2,
    decrement: (state) => state - 1,
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice
