import React from 'react'
import {useState} from 'react'
import Render from './component/Render.jsx'
import Create from './component/Create.jsx'

const App = () => {
  
const [users, setUsers] = useState([
  {name:'pawan'},
  {name:'ram'},
  {name:'sita'}
]);

  return (
    <div>
      <Create/>
      <Render data = {users}></Render>  
    </div>
  )
}

export default App


//<Render data = {users} changeData = {setUsers} ></Render> -------> ye bhi bhej skte hai agr change krwana hota or render wale me sirf ek parameter lete (props) usme hi sb dono attributes/props chle jate 