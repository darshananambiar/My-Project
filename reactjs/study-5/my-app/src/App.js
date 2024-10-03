import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';

const App = () => {
  const [formData, setFormData] = useState([]);
  
  const handleAddData = (newData) => {
    setFormData([...formData, newData]);
  };

  return (
    <div>
      <Fetch onAddData={handleAddData} />
      <MyTable data={formData} />
    </div>
  );
};

const Fetch = ({ onAddData }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = () => {
    const newData = { name, email, pin };
    onAddData(newData); // Pass data to the parent
    // Reset the form
    setName('');
    setEmail('');
    setPassword('');
    setPin('');
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
      <br />
      <input 
        type="email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email" 
      />
      <br />
      <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password" 
      />
      <br />
      <input 
        type="text" 
        value={pin}
        onChange={(e) => setPin(e.target.value)}
        placeholder="Enter your PIN" 
      />
      <br />
      <input 
        type="button" 
        onClick={handleSubmit} 
        value="Submit" 
      />
    </>
  );
};

const MyTable = ({ data }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>PIN</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.pin}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default App;
