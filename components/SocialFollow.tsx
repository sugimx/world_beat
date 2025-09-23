import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"
import { FaVimeoV } from "react-icons/fa"

const SocialFollow = () => {
  return (
    <div className="mb-3">
        <div className="section-title mb-0">
            <h4 className="m-0 text-uppercase font-weight-bold">Follow Us</h4>
        </div>
        <div className="bg-white border border-top-0 p-3">
            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#39569E"}}>
                <FaFacebookF style={{ padding: "15px 15px", fontSize: "50px", width: "65px", background: "rgba(0, 0, 0, .2)" }} />
                <span className="font-weight-medium" style={{ padding: "15px 15px" }}>12,345 Fans</span>
            </a>
            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#52AAF4"}}>
                <FaTwitter style={{ padding: "15px 15px", fontSize: "50px", width: "65px", background: "rgba(0, 0, 0, .2)" }} />
                <span className="font-weight-medium" style={{ padding: "15px 15px" }}>12,345 Followers</span>
            </a>
            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#0185AE"}}>
                <FaLinkedinIn style={{ padding: "15px 15px", fontSize: "50px", width: "65px", background: "rgba(0, 0, 0, .2)" }} />
                <span className="font-weight-medium" style={{ padding: "15px 15px" }}>12,345 connects</span>
            </a>
            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#C8359D"}}>
                <FaInstagram style={{ padding: "15px 15px", fontSize: "50px", width: "65px", background: "rgba(0, 0, 0, .2)" }} />
                <span className="font-weight-medium" style={{ padding: "15px 15px" }}>12,345 Followers</span>
            </a>
            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#DC472E"}}>
                <FaYoutube style={{ padding: "15px 15px", fontSize: "50px", width: "65px", background: "rgba(0, 0, 0, .2)" }} />
                <span className="font-weight-medium" style={{ padding: "15px 15px" }}>12,345 Subscribers</span>
            </a>
            <a href="" className="d-block w-100 text-white text-decoration-none mb-3" style={{background: "#055570"}}>
                <FaVimeoV style={{ padding: "15px 15px", fontSize: "50px", width: "65px", background: "rgba(0, 0, 0, .2)" }} />
                <span className="font-weight-medium" style={{ padding: "15px 15px" }}>12,345 Subscribers</span>
            </a>
        </div>
    </div>
  )
}

export default SocialFollow