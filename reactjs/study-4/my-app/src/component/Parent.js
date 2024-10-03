import React from 'react'

import Child1 from './Child1'

const Parent = () => {
  const motherName = "Mother";
  return (
    <div>
      <Child1 mother= {motherName} />
    </div>
  )
}

export default Parent
