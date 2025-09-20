import React from 'react'
import {useState} from 'react'

const App = () => {
    const [name,setname] = useState("");
    const [complete,setcomplete] = useState(false);
    const [gender,setgender] = useState("");
    const [city,setcity] = useState("bachh");

  return (
    <div>
      <h1>Create List</h1>
      <form>
        <input type="text" placeholder="name" value={name} onChange={(e)=>setname(e.target.value)}/>
        <input type="checkbox" value={complete} onChange={(e)=>console.log(e.target.checked)} />Completed
        <p>Gender</p>
        <input type="radio" value="male" checked={gender == 'male'} onChange={(e)=>setgender(e.target.value)}/>Male
        <input type="radio" value="female" checked ={gender == 'female'} onChange={(e)=>setgender(e.target.value)}/>Female
        <select value = {city} onChange={(e)=>setcity(e.target.value)}>
            <option value="dholak">Dholakpur</option>
            <option value="patli">Patliputra</option>
            <option value="bachh">Bachhawal</option>
        </select>
        <button type="submit">Create Todo</button>
      </form>
    </div>
  )
}

export default App
