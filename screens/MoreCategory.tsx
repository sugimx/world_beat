import React from 'react'
import Advertisement from '@/components/Advertisement'
import CategoryHeader from '@/components/CategoryHeader'
import LatestCard from '@/components/LatestCard'
import NewsLetter from '@/components/NewsLetter'
import SocialFollow from '@/components/SocialFollow'
import Tag from '@/components/Tag'
import Trending from '@/components/Trending'
import VerticalAdsBanner from '@/components/VerticalAdsBanner'
import { fetchPostData } from '@/api/postAPI'
import PaginationSection from '@/components/PaginationSection'

type MoreCategoryProps = {
    page?: string
}

const MoreCategory = async ({ page }: MoreCategoryProps) => {
    const currentPage = parseInt(page || "1")
    const data = await fetchPostData()

    const POSTS_PER_PAGE = 4
    const TOTAL_POSTS = data && data?.data?.posts?.length
    const totalPages = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE)
    const allPosts = data?.data?.posts || []

    const startIdx = (currentPage - 1) * POSTS_PER_PAGE
    const endIdx = startIdx + POSTS_PER_PAGE
    const posts = allPosts.slice(startIdx, endIdx)

    return (
        <div className="container-fluid mt-5 pt-3">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <VerticalAdsBanner />
                            {posts && posts?.map((post: any) => (
                                <div key={post._id}>
                                    <CategoryHeader cat_name={post.category_id.cat_name} />
                                    <div className="col-lg-6">
                                        <LatestCard 
                                            title={post.title} 
                                            ids={post._id} 
                                            isoString={post.createdAt} 
                                            description={post.description} 
                                            catagory={post.category_id.cat_name} />
                                    </div>
                                </div>
                            ))}
                            <PaginationSection 
                                currentPage={currentPage} 
                                totalPages={totalPages} 
                            />
                            <VerticalAdsBanner />
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

export default MoreCategory