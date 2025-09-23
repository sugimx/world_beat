import React from 'react'
import Image from 'next/image'

const CommandSection = () => {
  return (
    <div className="mb-3">
        <div className="section-title mb-0">
            <h4 className="m-0 text-uppercase font-weight-bold">3 Comments</h4>
        </div>
        <div className="bg-white border border-top-0 p-4">
            <div className="media mb-4">
                <img src="/images/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}} width={30} height={30} />
                <div className="media-body">
                    <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                    <button className="btn btn-sm btn-outline-secondary">Reply</button>
                </div>
            </div>
            <div className="media mb-4">
                <img src="/images/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}} width={30} height={30} />
                <div className="media-body">
                    <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                    <button className="btn btn-sm btn-outline-secondary">Reply</button>
                </div>
            </div>
            <div className="media mb-4">
                <img src="/images/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}} width={30} height={30} />
                <div className="media-body">
                    <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                    <button className="btn btn-sm btn-outline-secondary">Reply</button>
                </div>
            </div>
            <div className="media mb-4">
                <img src="/images/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width: "45px"}} width={30} height={30} />
                <div className="media-body">
                    <h6><a className="text-secondary font-weight-bold" href="">John Doe</a> <small><i>01 Jan 2045</i></small></h6>
                    <p>Diam amet duo labore stet elitr invidunt ea clita ipsum voluptua, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                    <button className="btn btn-sm btn-outline-secondary">Reply</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommandSection