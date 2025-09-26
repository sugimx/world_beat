"use client"
import React, { useState } from 'react'

const CommandReplyText = () => {
    const [ toggleText, setToggleText ] = useState(false)
    return (
        <>
            <input 
                type="text" 
                name="name"
                className={toggleText ? 'form-control mb-2' : 'form-control mb-2 hide--text'}
                placeholder="Reply........" 
            />
            <button className="btn btn-sm btn-outline-secondary" onClick={() => setToggleText((prev) => !prev)}>Reply</button>
        </>
    )
}

export default CommandReplyText