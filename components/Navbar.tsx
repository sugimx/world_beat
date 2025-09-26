import React from 'react'
import NavBarLinks from './NavBarLinks'
import SearchDataset from './SearchDataset'

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
                    <SearchDataset />
                </div>
            </nav>
        </div>
    )
}

export default Navbar