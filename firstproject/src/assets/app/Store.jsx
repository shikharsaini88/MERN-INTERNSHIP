import { configureStore } from "@reduxjs/toolkit";
import StudentSlice from "../Components/StudentSlice"
import usereducer from "../Axios/UserSlice";
const Store=  configureStore(
 {
   reducer:{
    student:StudentSlice
   }
    // reducer:{
    //   user:usereducer
    // }
 }   

)
export default Store