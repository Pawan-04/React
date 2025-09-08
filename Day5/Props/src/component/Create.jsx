import React from 'react'
import { useState } from 'react'

const Create = () => {
    const [read, write] = useState("");

    function change(e) {
        write(e.target.value)
    }
    console.log(read)

    return (
        <div>
            <h1>Registration</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <input type="text" onChange={change} value={read}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Create
