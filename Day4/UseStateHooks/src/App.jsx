import React from 'react'
import {useState} from 'react'
const App = ()=>{
  const [username, setUsername] = useState("Pawan")

  function changeName(){
    setUsername("Ram");
    // console.log(username)
  }
  console.log(username)

  return(
    <div>
      <h2>{username}</h2>
      <button onClick={changeName}>Change</button>
    </div>
  )
}
export default App