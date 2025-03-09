import { createSlice } from "@reduxjs/toolkit";
var students=[]
const StudentSlice=createSlice({
    name:"student",
    initialState:students,
    reducers:{
        insertStudent:(state,action)=>{
            state=[...state,action.payload]
            return state
        },
        deleteStudent:(state,action)=>{
            state.splice(action.payload,1)
            return state
        },
        filter:(state,action)=>{
            state=state.filter((e)=>e.name.toLowerCase()
        .startsWith(action.payload.toLowerCase()))
        return state
        }
       
    }
})
export const {insertStudent,deleteStudent,filter}=StudentSlice.actions
export default StudentSlice.reducer