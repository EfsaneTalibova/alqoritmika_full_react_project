import React from 'react'
import { increment, decrement, incrementByAmount } from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        {count}
        <button onClick={() => dispatch(increment())}>artir</button>
        <button onClick={() => dispatch(decrement())}>azalt</button>
        <button onClick={() => dispatch(incrementByAmount(10))}>deyer qeder artirin</button>
    </div>
  )
}

export default Counter