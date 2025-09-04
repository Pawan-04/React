
const App = () => {

// Java script logic .....
//.....
//......
//......



const hello = ()=>{
  alert("Hello world!!")
}

let bye = (message)=>{alert(message)}


  return (
    <>
    <button onClick={hello}>click</button>  
    <button onClick={() => bye("bye World!!")}>Click2</button>
    </>

  )
}

export default App












//function call replace itself with it's return value
//function component always return HTML

//we can not write anything after return
//we can only return single data/entity/variable/value/etc
//there must be a single return in a function and that must be the last statement