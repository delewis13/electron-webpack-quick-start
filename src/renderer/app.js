import React from "react"
import { decrement, increment } from "./reducer"
import { useSelector, useDispatch } from "react-redux"

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state) => state)
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>{count}</div>
    </div>
  )
}

export default App
