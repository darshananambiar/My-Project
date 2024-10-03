import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count,setcount]=useState(0)
  return (
    <div>
    <div><button onClick={()=>setcount(count-1)}>Decrement</button></div>
    <div>{count}</div>
    <div><button onClick={()=>setcount(count+1)}>Increment</button></div>
    </div>
  )
}

export default Counter