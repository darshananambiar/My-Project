
import React, { useRef } from 'react';

const Counter = () => {
    
        // useRef to store the click count
        const clickCountRef = useRef(0);
      
        // Function to handle button click
        const handleClick = () => {
          // Update the ref value
          clickCountRef.current += 1;
          console.log(`Button clicked ${clickCountRef.current} times`);
      };
      
  return (
    
    <div>
      <h2>Click Counter</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>Check the console to see how many times you've clicked the button.</p>
    </div>
  );
};

export default Counter
