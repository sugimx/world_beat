import React from 'react'
import Image from 'next/image'

const VerticalAdsBanner = () => {
  return (
    <div className="col-lg-12 mb-3">
        <a href="">
            <Image className="img-fluid w-100" src="/images/ads-728x90.png" alt="" width={728} height={90} />
        </a>
    </div>
  )
}

export default VerticalAdsBanner