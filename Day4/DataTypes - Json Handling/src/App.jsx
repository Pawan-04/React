import React from 'react'
import App2 from './App2.jsx'  // To show json handling

const App = () => {

  let num = 12;
  let str = 'hello ji'
  let bool = false;
  let n = null;
  let un = undefined;
  let arr = [ 1,'hello',false,undefined,false]
  // let obj = {};

  return (
    <div>
      <h1>{num}</h1>
      <h1>{str}</h1>
      <h1>{bool}</h1>
      <h1>{n}</h1>
      <h1>{un}</h1>
      <h1>{arr}</h1>
      {/* <h1>{obj}</h1> */}

      <App2/> 
    </div>
  )
}

export default App
