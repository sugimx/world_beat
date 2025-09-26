import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"
import { FaGooglePlusG } from "react-icons/fa"
import { FaYoutube } from "react-icons/fa"

const TopBar = () => {
    const d = new Date()
    const year = d.getFullYear()
    const month = d.getMonth()
    const date = d.getDate()
    const day = d.getDay()
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    const daysOfWeekNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <div className="row align-items-center bg-dark px-lg-5">
            <div className="col-lg-9">
                <nav className="navbar navbar-expand-sm bg-dark p-0">
                    <ul className="navbar-nav ml-n2">
                        <li className="nav-item border-right border-secondary">
                            <a className="nav-link text-body small" href="#">{daysOfWeekNames[day]}, {months[month]} {date}, {year}</a>
                        </li>
                        <li className="nav-item border-right border-secondary">
                            <Link className="nav-link text-body small" href="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-body small" href="/login">Login</Link>
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