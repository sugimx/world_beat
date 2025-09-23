import Advertisement from '@/components/Advertisement'
import CategoryHeader from '@/components/CategoryHeader'
import LandscapeCard from '@/components/LandscapeCard'
import LatestCard from '@/components/LatestCard'
import NewsLetter from '@/components/NewsLetter'
import SocialFollow from '@/components/SocialFollow'
import Tag from '@/components/Tag'
import Trending from '@/components/Trending'
import VerticalAdsBanner from '@/components/VerticalAdsBanner'
import React from 'react'

const Category = () => {
    return (
        <div className="container-fluid mt-5 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <CategoryHeader name={"Category: Business"} />
                            <LatestCard />
                            <VerticalAdsBanner />
                            <LatestCard />
                            <LandscapeCard />
                            <VerticalAdsBanner />
                            <LatestCard />
                            <LandscapeCard />
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <SocialFollow />
                        <Advertisement />
                        <Trending />
                        <NewsLetter />
                        <Tag />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category