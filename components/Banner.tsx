'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    
    const slides = [
        {
            id: 1,
            src: "/images/news-800x500-1.jpg",
            category: "Business",
            date: "Jan 01, 2045",
            title: "Lorem ipsum dolor sit amet elit. Proin vitae porta diam..."
        },
        {
            id: 2,
            src: "/images/news-800x500-2.jpg",
            category: "Business",
            date: "Jan 01, 2045",
            title: "Lorem ipsum dolor sit amet elit. Proin vitae porta diam..."
        },
        {
            id: 3,
            src: "/images/news-800x500-3.jpg",
            category: "Business",
            date: "Jan 01, 2045",
            title: "Lorem ipsum dolor sit amet elit. Proin vitae porta diam..."
        }
    ]

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [slides.length])

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 px-0">
                        <div className="position-relative">
                            <div className="position-relative overflow-hidden" style={{height: '500px'}}>
                                <Image 
                                    className="img-fluid h-100" 
                                    src={slides[currentSlide].src} 
                                    style={{ objectFit: 'cover' }} 
                                    alt="Banner" 
                                    fill
                                />
                                <div className="overlay">
                                    <div className="mb-2">
                                        <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                            href="">{slides[currentSlide].category}</a>
                                        <a className="text-white" href="">{slides[currentSlide].date}</a>
                                    </div>
                                    <a className="h2 m-0 text-white text-uppercase font-weight-bold" href="">{slides[currentSlide].title}</a>
                                </div>
                            </div>
                            
                            <div className="position-absolute" style={{bottom: '20px', left: '50%', transform: 'translateX(-50%)'}}>
                                <div className="d-flex">
                                    {slides.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`btn btn-sm rounded-circle mx-1 ${index === currentSlide ? 'btn-primary' : 'btn-secondary'}`}
                                            style={{width: '12px', height: '12px'}}
                                            onClick={() => setCurrentSlide(index)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 px-0">
                        <div className="row mx-0">
                            <div className="col-md-6 px-0">
                                <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                                <Image className="img-fluid w-100 h-100" src="/images/news-700x435-1.jpg" style={{objectFit: 'cover'}} width={400} height={250} alt="Banner" />
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
                        <div className="col-md-6 px-0">
                                <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                                <Image className="img-fluid w-100 h-100" src="/images/news-700x435-1.jpg" style={{objectFit: 'cover'}} width={400} height={250} alt="Banner" />
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
                        <div className="col-md-6 px-0">
                                <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                                <Image className="img-fluid w-100 h-100" src="/images/news-700x435-1.jpg" style={{objectFit: 'cover'}} width={400} height={250} alt="Banner" />
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
                        <div className="col-md-6 px-0">
                                <div className="position-relative overflow-hidden" style={{height: '250px'}}>
                                <Image className="img-fluid w-100 h-100" src="/images/news-700x435-1.jpg" style={{objectFit: 'cover'}} width={400} height={250} alt="Banner" />
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
                    </div>
                    </div>
                </div>
            </div>

             <div className="container-fluid bg-dark py-3 mb-3">
                <div className="container">
                    <div className="row align-items-center bg-dark">
                        <div className="col-12">
                            <div className="d-flex justify-content-between">
                                <div className="bg-primary text-dark text-center font-weight-medium py-2" style={{width: '170px'}}>Breaking News</div>
                                <div className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3"
                                    style={{width: 'calc(100% - 170px)', paddingRight: '90px'}}>
                                    <div className="text-truncate"><a className="text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                                    <div className="text-truncate"><a className="text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner