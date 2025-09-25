"use client"

import React from 'react'
import { useSearchParams } from 'next/navigation'
import VerticalAdsBanner from '@/components/VerticalAdsBanner'
import SocialFollow from '@/components/SocialFollow'
import Advertisement from '@/components/Advertisement'
import Trending from '@/components/Trending'
import NewsLetter from '@/components/NewsLetter'
import Tag from '@/components/Tag'
import CategoryHeader from '@/components/CategoryHeader'
import LatestCard from '@/components/LatestCard'

const SingleCategory = () => {
    const searchParams = useSearchParams()
    const category = searchParams.get('category') ?? 'all'

    return (
        <>
            <div className="container-fluid mt-5 pt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row">
                                <VerticalAdsBanner />
                                <CategoryHeader name={category} />
                                <LatestCard />
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
        </>
    )
}

export default SingleCategory