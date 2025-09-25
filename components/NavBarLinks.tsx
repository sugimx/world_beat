"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'

const NavBarLinks = () => {
    const currentPath = usePathname()
    const searchParams = useSearchParams()
    const category = searchParams.get('category') ?? 'all'
    
    return (
        <div className="navbar-nav mr-auto py-0">
            <Link href="/" className={currentPath === '/' ? "nav-item nav-link active" : "nav-item nav-link"}>Home</Link>
            <Link href={{ pathname: '/category', query: { category: 'sports' } }} className={category === 'sports' ? "nav-item nav-link active" : "nav-item nav-link"}>Sports</Link>
            <Link href={{ pathname: '/category', query: { category: 'politics' } }} className={category === 'politics' ? "nav-item nav-link active" : "nav-item nav-link"}>Politics</Link>
            <Link href={{ pathname: '/category', query: { category: 'entertainment' } }} className={category === 'entertainment' ? "nav-item nav-link active" : "nav-item nav-link"}>Entertainment</Link>
            <Link href={{ pathname: '/category', query: { category: 'technology' } }} className={category === 'technology' ? "nav-item nav-link active" : "nav-item nav-link"}>Technology</Link>
            <Link href='/more' className={currentPath === '/more' ? "nav-item nav-link active" : "nav-item nav-link"}>More</Link>
            <Link href="/contact" className={currentPath === '/contact' ? "nav-item nav-link active" : "nav-item nav-link"}>Contact</Link>
        </div>
    )
}

export default NavBarLinks