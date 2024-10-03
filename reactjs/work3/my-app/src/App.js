import React from 'react'
import { useState } from 'react';

function App() {
  const [inputarr,setInputarr] = useState([])
  const [inputdata,setInputdata] = useState({
    name: '',
    age: '',
    email: '',
    phone: ''
  })
  function changehandle(e) {
    setInputdata({...inputdata, [e.target.name]: e.target.value})

  }
  let {name,age,email,phone} =inputdata;

  function changehandle(){
    setInputarr([...inputarr, {name,age,email,phone}])
    console.log(inputdata,"input what we enter")
    setInputdata({name: '', age: '', email: '', phone: ''})

  }
  function changehandler2(){
    console.log("object store in array",inputarr)
  }
  

  return (
    <div className='App'>
      <input type = "text " name="name" placeholder='name' value={inputdata.name} onChange={changehandle}/><br></br>
        <input type = "text " name="age"placeholder='age' value={inputdata.age} onChange={changehandle}/><br></br>
        <input type = "text " name="email" placeholder='email' value={inputdata.email} onChange={changehandle}/><br></br>
        <input type = "text " name="phone" placeholder='phone' value={inputdata.phone} onChange={changehandle}/><br></br>
        <button onClick={changehandle}>Submit</button>
    </div>
  );
}

export default App
