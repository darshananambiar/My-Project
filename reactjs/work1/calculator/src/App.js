// import react from 'react';

// const App = () => {


// const x1 = 4;
// const x2 = 5;

// const sum =() =>{
//   return x1 + x2;
// }
// const sub =() =>{
//   return x1 - x2;
// }
// const mul =() =>{
//   return x1 * x2;
// }
// const div =() =>{
//   return x1 / x2;
// }
// return (
//     <>
//        <h1>Sum of two numbers are :{sum()}</h1>
//        <h1>Subtraction of two numbers are :{sub()}</h1>
//        <h1>multiplication of two numbers are :{mul()}</h1>
//        <h1>Division of two numbers are :{div()}</h1>
     

//     </>
//   )
// }

// export default App
import React from 'react';

const App = ({ x1, x2 }) => {

  const sum = () => x1 + x2;
  const sub = () => x1 - x2;
  const mul = () => x1 * x2;
  const div = () => x1 / x2;

  return (
    <>
      <h1>Sum of {x1} and {x2} is: {sum()}</h1>
      <h1>Subtraction of {x1} from {x2} is: {sub()}</h1>
      <h1>Multiplication of {x1} and {x2} is: {mul()}</h1>
      <h1>Division of {x1} by {x2} is: {div()}</h1>
    </>
  );
   return (3,6);
}

export default App;
