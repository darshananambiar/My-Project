import React from 'react'

const Random = () => {
    let number = Math.random()*10
  return (
    <div>
      <h1 style ={{ "background-color": "red" }}>this is the random{number} </h1>
    </div>
  )
}

export default Random
