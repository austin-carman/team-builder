import React from 'react'

export default function Form(props) {
    const { details } = props

    if (!details) {
        return <h3>Working on your member details...</h3>
    }
    

    return(
        <div className='member-container'>
            <h2>{details.name}</h2>
            <p>Email: {details.email} </p>
            <p>Role: {details.role} </p>
        </div>
    )
}