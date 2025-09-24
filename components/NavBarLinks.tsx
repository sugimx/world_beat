"use client"
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBarLinks = () => {
    const currentPath = usePathname()
    return (
        <div className="navbar-nav mr-auto py-0">
            <Link href="/" className={currentPath === '/' ? "nav-item nav-link active" : "nav-item nav-link"}>Home</Link>
            <Link href="/category" className={currentPath === '/category' ? "nav-item nav-link active" : "nav-item nav-link"}>Category</Link>
            <Link href="/contact" className={currentPath === '/contact' ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</Link>
        </div>
    )
}

export default NavBarLinks