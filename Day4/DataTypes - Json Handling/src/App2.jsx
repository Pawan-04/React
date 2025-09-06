import React from 'react'

const App2 = ()=>{
    let profiles = [
        {name:"Pawan", age:24} ,
        {name:"Ram", age:22} ,
        {name:"Digvijay", age: 21} ,
    ];

    let newProfile = profiles.map((person,index)=>{
        return(
            <li>    
            <span> {person.name}</span> | <span>{person.age} </span> 
            </li>
        )
    })


return <div>
    <h1>Json Handling - App2.jsx</h1>
    <h3>Person Details</h3>
    <ol>{newProfile}</ol>
</div>
}

export default App2

// foreach ni lga skt kyunki wo kuch return ni krta,
// jsx file handles - js + html --> isliye <li>,<span> bhi use kr liye bech mei
// index pass krna hoga as <li key = {index} ---kyunki react  identifies each tag uniquely>