import React from 'react'
import Home from './components/Home'
import Event from './components/Event'  // Assuming Event.js is in the components folder. Replace this with the actual path.
import About from './components/About'
import Family from './components/Family'


const App = () => {
  return (
    <div style={{textAlign:"center"}}>

     <h1>This is my app</h1> 
     
     <Home/>
     <Event/>
     <About/>
     <Family/>
    </div>
  )
}

export default App
