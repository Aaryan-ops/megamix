import React from 'react'
import * as clc from "./calcs";
function Calc() {
  return (
    <ul>
      <li>40 + 4 = {clc.default(40,4,'+')}</li>
      <li>40 / 4 ={clc.default(40,4,'/')}</li>

    </ul>
  )
}

export default Calc
