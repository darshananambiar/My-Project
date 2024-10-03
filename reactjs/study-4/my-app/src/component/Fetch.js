import { useState } from 'react';



// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Table } from 'react-bootstrap';

// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
  

// export default App;
import React from 'react'

const Fetch = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');
  

  

  const handleSubmit = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('PIN:', pin);
  };

  return (
    
    <>
      <h1>Input Form</h1>
      
      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name" 
      />
      <br></br>
      
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email" 
      />
      <br></br>
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password" 
      />
      <br></br>
      <input 
        type="text" 
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter your PIN" 
      />
      <br></br>
      <input 
        type="button" 
        onClick={handleSubmit} 
        value="Submit" 
      />
    </>
    
    
  );
}
  

export default Fetch

