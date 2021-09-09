import React,{useState as fg} from 'react'

function Greeting() {
  const [m,n]=fg("black")
  let x=(new Date()).getHours();
  var mm=x>19 && x<24 ?<h1>Good Night</h1>:(x<16 && x>12 ?<h1>Good Afternoon</h1>:(x>8 && x< 12 ?"Good Morning": "Good evening"));
  return (
    <div>
      <p title="click on me to change my colour according to the greeting" onClick={()=>{if(mm=="Good Night"){n("brown");}else if(mm=="Good Afternoon"){n("orange");}else if(mm=="Good Morning"){n("green");}else{n("pink")}}} style={{color:m}}>Only those who dare to fail greatly can ever achieve greatly. Only those who attempt the absurd can achieve the impossible.</p>
      {mm}
    </div>
  )
}

export default Greeting
