import React from 'react'

export default function CompanyName({text,address}) {
  return (
   <h1 className='font-bold text-2xl'>CompanyName:{text}<br/>
address:{address}
   </h1>
  )
}
