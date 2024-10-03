// import React from 'react'
import React, { useEffect, useRef } from 'react';

const Components1 = () => {
    const inputRef = React.useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    }, []); 
    
  return (
    <div>
      <input type="text" ref={inputRef}/>
   
    </div>
  )
}

export default Components1
