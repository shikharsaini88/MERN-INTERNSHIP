import React from 'react'
import { useReducer } from 'react'
 

export default function Usereducer() {
const[value,dispatch]=useReducer(plusminusreduces,0)
    function plusminusreduces(state,action){
        switch(action.type){
            case"+":
            return[state+1]
            case"-":
            return[state-1]
            case"+5":
            return[state+5]
            case"-5":
            return[state-5]
            default:
                return state
        }
    }
    
  return (
    <>
    <div className=' flex justify-around text-2xl my-20'>
        <div className='items-center justify-center'>
    <h1 className='text-3xl font-bold'>count:{value}</h1>
    <button onClick={()=>dispatch({type:"+"})} className='bg-black text-red-400 rounded-2xl p-2'>+1</button>
    <button onClick={()=>dispatch({type:"-"})}  className='bg-black text-yellow-400 rounded-2xl p-2 ml-2'>-1</button>
    <button onClick={()=>dispatch({type:"+5"})} className='bg-black text-green-400 rounded-2xl p-2 ml-2'>+5</button>
    <button onClick={()=>dispatch({type:"-5"})}  className='bg-black text-blue-400 rounded-2xl p-2 ml-2'>-5</button>
</div>
   </div>
    </>
  )
}
