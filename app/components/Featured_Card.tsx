import React from 'react'
import Image from 'next/image'

const Featured_Card = () => {
    return (
        <>
   
                <div className="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <div className="position-relative overflow-hidden" style={{height: '300px'}}>
                        <Image className="img-fluid h-100" src="/images/news-700x435-3.jpg" width={700} height={435} style={{objectFit: 'cover'}} alt="News" />
                        <div className="overlay">
                            <div className="mb-2">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                    href="">Business</a>
                                <a className="text-white" href=""><small>Jan 01, 2045</small></a>
                            </div>
                            <a className="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                        </div>
                    </div>
                </div>
               

        </>
    )
}
export default Featured_Card