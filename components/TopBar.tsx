import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGooglePlusG } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const TopBar = () => {
  return (
    <div className="row align-items-center bg-dark px-lg-5">

        <div className="col-lg-9">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
                <ul className="navbar-nav ml-n2">
                    <li className="nav-item border-right border-secondary">
                        <a className="nav-link text-body small" href="#">Monday, January 1, 2045</a>
                    </li>
                    <li className="nav-item border-right border-secondary">
                        <a className="nav-link text-body small" href="#">Advertise</a>
                    </li>
                    <li className="nav-item border-right border-secondary">
                        <a className="nav-link text-body small" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-body small" href="#">Login</a>
                    </li>
                </ul>
            </nav>
        </div>

        <div className="col-lg-3 text-right d-none d-md-block">
            <nav className="navbar navbar-expand-sm bg-dark p-0">
                <ul className="navbar-nav ml-auto mr-n2">
                    <li className="nav-item">
                        <a className="nav-link text-body" href="#">
                            <FaTwitter />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-body" href="#">
                            <FaFacebookF />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-body" href="#">
                            <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-body" href="#">
                            <FaInstagram />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-body" href="#">
                            <FaGooglePlusG />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-body" href="#">
                            <FaYoutube />
                        </a>
                    </li>
                </ul>
            </nav>
        </div>

    </div>
  )
}

export default TopBar