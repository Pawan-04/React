
const Read = (props) => {
    const store = props.store
  // const setstore = props.setstore
    let x=0;
  const renderList = store.map((obj) =>{
        return(
          <tr key={obj.id}>

            <td>{++x}</td>
            <td>{obj.name}</td>
            <td>{obj.complete? "Yes":"No"}</td>
            <td>{obj.gender}</td>
            <td>{obj.city}</td>

          </tr>
        )
      })


  return (
    <table border='1'>
        <thead>
          <tr>
            <td>Id</td>
            <th>Name</th>
            <th>Completed</th>
            <th>Gender</th>
            <th>City</th>
          </tr>
          </thead>
          <tbody>
          {renderList}
          </tbody>
        </table>
  )
}

export default Read
