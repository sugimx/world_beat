import React from 'react'
import Image from 'next/image'
import FeaturedCard from '@/components/FeaturedCard'

const FeaturedNews = () => {
    return (
        <>
    <div className="container-fluid pt-5 mb-3">
        <div className="container">
            <div className="section-title">
                <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
            </div>
            <div className="row">
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
        </div>
    </div>
        </>
    )
}
export default FeaturedNews