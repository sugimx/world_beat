import React from 'react'
import Image from 'next/image'

const ReplySection = () => {
  return (
        <div className="media mt-4">
            <Image src="/images/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{ width: "45px"}} width={30} height={30} />
            <div className="media-body">
                <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor
                    labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed
                    eirmod ipsum.</p>
            </div>
        </div>
  )
}

export default ReplySection