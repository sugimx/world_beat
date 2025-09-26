import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PaginationSection from './PaginationSection'

const POSTS_PER_PAGE = 6
const TOTAL_POSTS = 50

const LatestCard = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(TOTAL_POSTS / POSTS_PER_PAGE)

    const handlePageChange = (page: number) => {
        setCurrentPage(page)
    }

    const startIdx = (currentPage - 1) * POSTS_PER_PAGE
    const endIdx = startIdx + POSTS_PER_PAGE
    const posts = [...Array(TOTAL_POSTS).keys()].slice(startIdx, endIdx)

    return (
        <>
        {posts.map((item) => (
            <div className="col-lg-6" key={item}>
                <div className="position-relative mb-3">
                    <Image className="img-fluid w-100" src="/images/news-700x435-1.jpg" style={{ objectFit: 'cover' }} width={700} height={435} alt="News" />
                    <div className="bg-white border border-top-0 p-4">
                        <div className="mb-2">
                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business {item}</a>
                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                        </div>
                        <Link className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="/post/1">Lorem ipsum dolor sit amet elit...</Link>
                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                            rebum clita rebum dolor stet amet justo</p>
                    </div>
                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                        <div className="d-flex align-items-center">
                            <Image className="rounded-circle mr-2" src="/images/user.jpg" width={25} height={25} alt="" />
                            <small>John Doe</small>
                        </div>
                        <div className="d-flex align-items-center">
                            <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                            <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                        </div>
                    </div>
                </div>
            </div>
        ))}
        <PaginationSection 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={handlePageChange} 
        />
        </>
    )
}
export default LatestCard