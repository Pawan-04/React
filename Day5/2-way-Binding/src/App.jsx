import React from 'react'
import {useState} from 'react'

const App = () => {

  const [users, setUser] = useState("")

  const chnageHandler = (e)=>{
    setUser(e.target.value)
  }
  console.log(users);

  return (
    <div>
      <input type="text" placeholder="Enter Your Name" onChange={chnageHandler} value = {users}/>
    </div>
  )
}

export default App


/* 2 way binding: - when keypressed the data goes to REACT[USEsTATE] - > THEN to input field we see;
it happens internally we didn't see any change , it looks normal

why needed? -> React ko pta hona chahiye ki kya data create ho rha and all -> so that wo track,compare or change krega
hume seedha dom se interact ni krna, react se krna hai hume to (chachi 420)

in english - > controlled element provide hota hai*/