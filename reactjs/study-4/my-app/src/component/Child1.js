import React from 'react';
import Child2 from './Child2';

const Child1 = (props) => {
  const child1="child1";
  return (
    <div>
      <Child2 mother= {props.mother} child1={child1}></Child2>
    </div>
  );
};

export default Child1;