import React from 'react'
import cooo,{g,fx as theta, gx as gamma, fx} from "./exportConst";
import * as hi from "./export2";
import Calc from '../comp2/Calc';
function Main_index3() {
  return (
    <div>
      <h4 style={{textTransform:"capitalize"}}>react is fun, programming is too much fun</h4>
      <h1 style={{color:"tomato"}}>{cooo}<u>{g}</u><em>{theta()}</em><blockquote>{gamma()}</blockquote></h1>

      <code>
        {hi.default.map((c,n)=><h4>{n+" : "+ c}</h4>)}
        <br />
        {hi.qq}
        <h2>{hi.u}</h2>
      </code>

<hr style={{width:"40vw"}} />
<pre>
  Acquiring wisdom is great, but it is not the goal ; applying it is.<br />
  <Calc />
</pre>
    </div>
  )
}

export default Main_index3
