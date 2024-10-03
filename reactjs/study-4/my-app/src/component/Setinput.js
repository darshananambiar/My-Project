import React from 'react'
import { useState } from 'react'

const Setinput = () => {
    const [name, setName]=useState('world')
    const [input, setInput] = useState('')
  return (
    <div>
      <input type='text' placeholder='name' value={input} onChange={(e)=>setInput(e.target.value)}></input>
      <h1>Hello, {name}</h1>
      <button onClick={()=>setName(input)}>Change Name</button>
    </div>
  )
}

export default Setinput
