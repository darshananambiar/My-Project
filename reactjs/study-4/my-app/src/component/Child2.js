import React from 'react';
import Child3 from './Child3';

const Child2 = (props) => {
  const child2="child2"
  return (
    <div>
      <Child3 mother= {props.mother} child1={props.child1} child3={child2}></Child3>
    </div>
  );
};

export default Child2;
