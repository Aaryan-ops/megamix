import React from 'react'
import Greeting from './comps1/Greeting'
function Main() {
  return (
    <div>
      <h1>Big bang </h1>
      <hr />
      <hr />
      <Greeting></Greeting>
      <Greeting></Greeting>
      <span style={{fontSize:"4em"}}> <Greeting></Greeting></span>
    </div>
  )
}

export default Main
