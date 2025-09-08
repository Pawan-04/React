import React from 'react'

const Render = (props) => {

    const renderUsers = props.data.map((person, index) => {
        return (
            <li key={index}>{person.name}</li>
        )
    })

    return (
        <>{renderUsers}</>
    )
}

export default Render


// console.log(props) -- use to see