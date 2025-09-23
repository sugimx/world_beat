import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Latest_Card = () => {
    return (
        <>
            <div className="col-lg-6">
                                <div className="position-relative mb-3">
                                    <Image className="img-fluid w-100" src="/images/news-700x435-1.jpg" style={{ objectFit: 'cover' }} width={700} height={435} alt="News" />
                                    <div className="bg-white border border-top-0 p-4">
                                        <div className="mb-2">
                                            <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <Link className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="/post/1">Lorem ipsum dolor sit amet elit...</Link>
                                        <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                            rebum clita rebum dolor stet amet justo</p>
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
                                 <Image className="img-fluid w-100" src="/images/news-700x435-2.jpg" style={{ objectFit: 'cover' }} width={700} height={435} alt="News" />
                                 <div className="bg-white border border-top-0 p-4">
                                     <div className="mb-2">
                                         <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                             href="">Business</a>
                                         <a className="text-body" href=""><small>Jan 01, 2045</small></a>
                                     </div>
                                     <a className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                     <p className="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                         rebum clita rebum dolor stet amet justo</p>
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
                         </>
    )
}
export default  Latest_Card   