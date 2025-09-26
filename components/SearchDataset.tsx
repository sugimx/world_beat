"use client"

import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa"

const SearchDataset = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const items = [
    { id: 1, name: 'Apple', category: 'Fruit' },
    { id: 2, name: 'Banana', category: 'Fruit' },
    { id: 3, name: 'Carrot', category: 'Vegetable' },
    { id: 4, name: 'Broccoli', category: 'Vegetable' },
    ]

    function onHandleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSearchTerm(e.target.value)
    }

    const filterItem = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="input-group ml-auto d-none d-lg-flex search--container" style={{width: "100%", maxWidth: "300px"}}>
            <input type="text" className="form-control border-0" placeholder="Keyword" onChange={onHandleChange} />
            <div className="input-group-append">
                <button className="input-group-text bg-primary text-dark border-0 px-3">
                    <FaSearch />
                </button>
            </div>
            <ul className={searchTerm !== "" ? 'search--result' : 'search--inactive'}>
                {filterItem.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default SearchDataset