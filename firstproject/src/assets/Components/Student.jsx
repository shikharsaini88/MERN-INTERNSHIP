import React, { useReducer, useState } from 'react'
import student from './students-data'
import Studentsdetail from './Studentsdetail'
import{useDispatch, useSelector} from 'react-redux'
import SearchStudent from './SearchStudent'
import Usereducer from '../Axios/Usereducer'
var Studentss=[
 {name:"Raj",Surname:"sharma",Age:19 ,City:"Khandwa",Address:"vihar"},
 {name:"Raja",Surname:"saini",Age:17 ,City:"Khandwa",Address:"bengel"},
 {name:"Raju",Surname:"shita",Age:18 ,City:"Khandwa",Address:"Ganesh talai"},
 {name:"nandini",Surname:"gupta",Age:20 ,City:"Khandwa",Address:"matavihar"},

]
 export default function Student() {
  // const [listofstudentss,dispatch]=useReducer(studentreducer,student)
 const list=useSelector(state=>state.student)
  const dispatch=useDispatch()
  //  const [listofStudents,setListofStudent]=useState(Studentss)
  //  const deleteStudent=(index)=>{
  //    listofStudents.splice(index,1)
  //  setListofStudent([...listofStudents])
  //  }
     const [name,setname]=useState("")
   const [surname,setsurname]=useState("")
   const [age,setage]=useState("")
   const [city,setcity]=useState("")
   const [address,setaddress]=useState("")
  
  return (<>
  <SearchStudent/>
    <div className=''>
      <div className='flex'>
       <input type='text' placeholder='Name' onChange={(e)=> setname(e.target.value)} value={name} className='border-2 border-gray-400 rounded-2xl'/>
      {/* <h1>{name}</h1> */}
      <input type='text' placeholder='surname' onChange={(e)=> setsurname(e.target.value)} value={surname}/>
      {/* <h1>{surname}</h1> */}
      <input type='text' placeholder='age' onChange={(e)=> setage(e.target.value)} value={age}/>
      {/* <h1>{age}</h1> */}
      <input type='text' placeholder='city' onChange={(e)=> setcity(e.target.value)} value={city}/>
      {/* <h1>{city}</h1> */}
      <input type='text' placeholder='address' onChange={(e)=> setaddress(e.target.value)} value={address}/>
      {/* <h1>{address}</h1> */}
      <button onClick={()=>{
        dispatch({ type:"insertStudent",
          
          payload: {
          name:name,
          surname:surname,
          Age:age,
          City:city,
          Address:address,
        }
      })
      }} className='bg-black  text-white'>Submit</button> 
      <button onClick={()=>dispatch({type:"filter",payload:name})}>Search</button>
</div>
        { 
          list.map((data,index)=>
               
                  <div className='text-2xl font-black'><Studentsdetail name={data.name}
                   Surname={data.Surname}
                   age={data.Age}
                   City={data.City}
                   Address={data.Address}
                   index={index}
                  //  deleteEntry={deleteStudent}
                  />  
                   
                    </div>
          
                    
                   
               
            ) }
            
    
      </div>
      
       
   
</>
  )
}

