import React from 'react'
import { setLanguage} from './counterSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
const Counter = () => {



    const [text, setText] = useState({
        employees : [
            { name: "Bill Gates", placement: "Microsoft" },
            { name: "Sergey Brin", placement: "Google" },
            { name: "Steve Jobs", placement: "Apple" }
       
        ]
    })
    const count = useSelector((state) => state.counter.lang)
    const dispatch = useDispatch()
    const [change, setChange] = useState([]);
    useEffect(()=>{
        fetch('https://libretranslate.de/languages')
        .then(res =>res.json())
        .then(data =>{
           
                setChange(data)

           
      
        })
    },[])
  return (
    <div>
       language - {count }
        <br/>
        <br/>
        <p>Next, we need to import the reducer function from the counter slice and add it to our store.</p>
        <br/>
        <br/>
        {/* <button onClick={() => dispatch(setLanguage())}>Change Mode</button> */}
     
    </div>
  )
}

export default Counter