import {createSlice} from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        dark: false,
    },
    reducers:{
     setChangeMode:(state) =>{
        state.dark = !state.dark
     }
    }
})

export const {setChangeMode} = counterSlice.actions
export default counterSlice.reducer