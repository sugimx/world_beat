"use client"
import React, { ReactNode } from 'react'
import TopBar from './TopBar'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'
import Loading from '@/app/loading'
import { Suspense } from 'react'
import { usePathname } from 'next/navigation'

type LayoutProps = {
    children: ReactNode
}

const Layouts = ({ children }: LayoutProps) => {
    const currentPath = usePathname()
    const isLoginPath = currentPath === '/login'
    return (
        <>
            <div className="container-fluid d-none d-lg-block">
            {!isLoginPath && (<TopBar />)}
            {!isLoginPath && (<Header />)}
            </div>
            {!isLoginPath && (<Navbar />)}
            <Suspense fallback={ <Loading /> }>
                {children}
            </Suspense>
            {!isLoginPath && (<Footer />)}
        </>
    )
}

export default Layouts