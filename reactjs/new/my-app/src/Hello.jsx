import React from 'react'

const Hello = () => {
    // let name ="darshana";
    let fullName = () => {
         return "darshana kallath";
    }

  return (
    <div>
      <h1>this is the future.i am your {fullName()}</h1>
    </div>
  );
}

export default Hello
