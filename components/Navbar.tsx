import React from 'react'
import { FaSearch } from "react-icons/fa"
import NavBarLinks from './NavBarLinks'

const Navbar = () => {
    return (
        <div className="container-fluid p-0">
           <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="m-0 display-4 text-uppercase text-primary">Biz<span className="text-white font-weight-normal">News</span></h1>
                </a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                    <NavBarLinks />
                    <div className="input-group ml-auto d-none d-lg-flex" style={{width: "100%", maxWidth: "300px"}}>
                        <input type="text" className="form-control border-0" placeholder="Keyword" />
                        <div className="input-group-append">
                            <button className="input-group-text bg-primary text-dark border-0 px-3">
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar