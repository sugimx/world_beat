import React from 'react'

type Params = {
    name: string
}

const CategoryHeader = ({ name }: Params) => {
    return (
        <div className="col-12">
            <div className="section-title">
                <h4 className="m-0 text-uppercase font-weight-bold">{name}</h4>
                <a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
            </div>
        </div>
    )
}

export default CategoryHeader