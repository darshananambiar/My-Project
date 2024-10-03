import React from 'react'

const CheckNumber = ({ num }) => {
    return 
        // num > 0 ? <h1>Number is positive</h1> :
        // num < 0 ? <h1>Number is negative</h1> :
        // <h1>zero</h1>
        {num % 5 == 0 ? <h1>multiple of 5</h1>:<h1>Not a multiple of 5</h1>}
    
}

   
    {/* if(num > 0){
       
        return <h1>Number is positive</h1>
    }
    else if(num < 0){
        
        return <h1>Number is negative</h1>
    }
    else{
        
        return <h1> zero</h1>
    }
     */}
  
    
  


export default CheckNumber
