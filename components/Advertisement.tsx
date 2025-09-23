import React from 'react'
import Image from 'next/image'

const Advertisement = () => {
    return (
        <div className="mb-3">
            <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">Advertisement</h4>
            </div>
            <div className="bg-white text-center border border-top-0 p-3">
                <a href=""><Image className="img-fluid" src="/images/news-800x500-2.jpg" alt="" width={800} height={500} /></a>
            </div>
        </div>
    )
}
export default Advertisement