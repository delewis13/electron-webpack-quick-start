const { configureStore } = require("@reduxjs/toolkit")
import counterSlice from "./reducer"

const store = configureStore({
  reducer: counterSlice.reducer,
})

if (process.env.NODE_ENV === "development" && module.hot) {
  console.log("Adding store to hot-reload...")
  module.hot.accept("./reducer", () => {
    console.log("Reloading reducer...")
    const newRootReducer = require("./reducer").default
    store.replaceReducer(newRootReducer)
  })
}

export default store
