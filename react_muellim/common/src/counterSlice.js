import {createSlice} from '@reduxjs/toolkit'
export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        lang: 'en',
    },
    reducers:{
     setLanguage:(state,action) =>{
        state.lang = action.payload
     }
    }
})

export const {setLanguage} = counterSlice.actions
export default counterSlice.reducer