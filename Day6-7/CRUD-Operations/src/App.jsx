import React from 'react'
import {useState} from 'react'
import{nanoid} from 'nanoid'
import Create from "./components/Create"
import Read from "./components/Read"
const App = () => {
   
    const [store, setstore] = useState([])


    

  return (
    <div>
      <h1>Create List</h1>
      <Create store={store} setstore={setstore}/>
      <Read store={store} setstore={setstore}/>
    </div>
  )
}

export default App
