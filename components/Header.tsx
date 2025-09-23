import React from 'react'
import Image from 'next/image'

const Header = () => {
    return (
        <div className="row align-items-center bg-white py-3 px-lg-5">
            <div className="col-lg-4">
                <a href="index.html" className="navbar-brand p-0 d-none d-lg-block">
                    <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-secondary font-weight-normal">News</span></h1>
                </a>
            </div>
            <div className="col-lg-8 text-center text-lg-right">
                <a href="https://htmlcodex.com">
                    <Image className="img-fluid" src="/images/ads-728x90.png" alt="" width={728} height={90} />
                </a>
            </div>
        </div>
    )
}
export default Header