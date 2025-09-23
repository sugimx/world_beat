import React from 'react'
import Image from 'next/image'
import Featured_Card from './Featured_Card'

const Featured_News = () => {
    return (
        <>
    <div className="container-fluid pt-5 mb-3">
        <div className="container">
            <div className="section-title">
                <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
            </div>
            <div className="row">
                <Featured_Card />
                <Featured_Card />
                <Featured_Card />
                <Featured_Card />
            </div>
        </div>
    </div>
        </>
    )
}
export default Featured_News