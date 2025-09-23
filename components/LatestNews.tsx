import React from 'react'
import Image from 'next/image'
import Trending from '@/components/Trending'  
import Advertisement from '@/components/Advertisement'
import Tag from '@/components/Tag'
import BreakingNews from '@/components/BreakingNews'
import SocialFollow from '@/components/SocialFollow'
import LatestCard from '@/components/LatestCard'
import LandscapeCard from '@/components/LandscapeCard'
import LandscapeBigCard from '@/components/LandscapeBigCard'

const LatestNews = () => {
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title">
                                    <h4 className="m-0 text-uppercase font-weight-bold">Latest News</h4>
                                    <a className="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                                </div>
                            </div>
                            <LatestCard />
                           
                            <div className="col-lg-12 mb-3">
                                <a href=""><Image className="img-fluid w-100" src="/images/ads-728x90.png" alt="" width={728} height={90} /></a>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mb-3">
                                    <Image className="img-fluid w-100" src="/images/news-700x435-3.jpg" style={{ objectFit: 'cover' }} width={700} height={435} alt="News" />
                                    <div className="bg-white border border-top-0 p-4">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                        <div className="d-flex align-items-center">
                                            <Image className="rounded-circle mr-2" src="/images/user.jpg" width="25" height="25" alt="" />
                                            <small>John Doe</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                            <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="position-relative mb-3">
                                    <Image className="img-fluid w-100" src="/images/news-700x435-4.jpg" style={{ objectFit: 'cover' }} width={700} height={435} alt="News" />
                                    <div className="bg-white border border-top-0 p-4">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                    <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                        <div className="d-flex align-items-center">
                                            <Image className="rounded-circle mr-2" src="/images/user.jpg" width="25" height="25" alt="" />
                                            <small>John Doe</small>
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <small className="ml-3"><i className="far fa-eye mr-2"></i>12345</small>
                                            <small className="ml-3"><i className="far fa-comment mr-2"></i>123</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                    <Image className="img-fluid" src="/images/news-110x110-1.jpg" alt="" width={110} height={110} />
                                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                    <Image className="img-fluid" src="/images/news-110x110-2.jpg" alt="" width={110} height={110} />
                                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                    <Image className="img-fluid" src="/images/news-110x110-3.jpg" alt="" width={110} height={110} />
                                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center bg-white mb-3" style={{ height: '110px' }}>
                                    <Image className="img-fluid" src="/images/news-110x110-4.jpg" alt="" width={110} height={110} />
                                    <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12 mb-3">
                                <a href=""><Image className="img-fluid w-100" src="/images/ads-728x90.png" alt="" width={728} height={90} /></a>
                            </div>
                            <LandscapeBigCard />
                            <LandscapeCard />

                        </div>
                    </div>

                    <div className="col-lg-4">
                        <SocialFollow />
                        <Trending />
                        <BreakingNews />
                        <Advertisement />
                        <Tag />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LatestNews