import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'

export const fetchUsers=createAsyncThunk("fetchUsers",async ()=>{
    let response=await axios.get("https://jsonplaceholder.typicode.com/users")
    if (response.status===200){
        return response.data
    }
})
const userSlice=createSlice({
    name:"user",
    initialState:{
        list:[],
        selectedUser:null
        
    },
    reducers:{
        deleteUser:(state,action)=>{
            console.log(action)
            let index=state.list.findIndex((user)=>user.id==action.payload)
            state.list.splice(index,1)
            state.selectedUser=null
            return state
        },
        selectUser:(state,action)=>{
            state={...state,selectedUser:action.payload}
          return state
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state={...state,list:action.payload}
            // state=action.payload
            return state
        })
        builder.addCase(fetchUsers.pending, (state,action)=>{
            console.log("fetching data")
        })
    }
})
export const{deleteUser,selectUser}=userSlice.actions
export default userSlice.reducer