/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loading:false,
  }

export const appSlice = createSlice({
    name:"appSlice",
    initialState,
    reducers:{

    },
    extraReducers(builder){
        
    }
})

export const { increment} = appSlice.actions

export default appSlice.reducer