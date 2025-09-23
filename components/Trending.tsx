import React from 'react'
import Image from 'next/image'

const Trending = () => {
    return (
        <div className="mb-3">
        <div className="section-title mb-0">
            <h4 className="m-0 text-uppercase font-weight-bold">Tranding News</h4>
        </div>
        <div className="bg-white border border-top-0 p-3">
            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                <Image className="img-fluid" src="/images/news-110x110-1.jpg" alt="" width={110} height={110} />
                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div>
            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                <Image className="img-fluid" src="/images/news-110x110-2.jpg" alt="" width={110} height={110} />
                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div>
            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                <Image className="img-fluid" src="/images/news-110x110-3.jpg" alt="" width={110} height={110} />
                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div>
            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                <Image className="img-fluid" src="/images/news-110x110-4.jpg" alt="" width={110} height={110} />
                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div>
            <div className="d-flex align-items-center bg-white mb-3" style={{height: '110px'}}>
                <Image className="img-fluid" src="/images/news-110x110-5.jpg" alt="" width={110} height={110} />
                <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                    <div className="mb-2">
                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                        <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                    </div>
                    <a className="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Trending