import { useState } from "react";
import{nanoid} from 'nanoid'
const Create = (props) => {
  const store = props.store
  const setstore = props.setstore

const [name,setname] = useState("");
    const [complete,setcomplete] = useState(false);
    const [gender,setgender] = useState("");
    const [city,setcity] = useState("bachh");

      let hogya = (e)=>{
      e.preventDefault()
      let newitems = {id:nanoid(), name, complete, gender, city}

      let copy = []
      copy = [...store]
      copy.push(newitems)
      setstore(copy)
      
      setname(""); setcomplete(""); setgender(""); setcity("")

    }

  return (
          <form onSubmit={hogya}>

        <input type="text" placeholder="name" value={name} onChange={(e)=>setname(e.target.value)}/>

        <input type="checkbox" value={complete} checked = {complete} onChange={(e)=>setcomplete(e.target.checked)} />Completed

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
  )
}

export default Create
