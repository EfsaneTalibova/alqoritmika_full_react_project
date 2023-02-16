import React from 'react'
import { setChangeMode} from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    const count = useSelector((state) => state.counter.dark)
    const dispatch = useDispatch()
  return (
    <div>
        dark mode - {count ? "mode on" : "mode off"}
        <br/>
        <br/>
        <button onClick={() => dispatch(setChangeMode())}>Change Mode</button>
     
    </div>
  )
}

export default Counter