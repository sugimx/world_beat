import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import dateFormatter from '@/lib/dateFormatter'

type LatestCardProps = {
    title?: string,
    ids?: string,
    isoString?: string
    description?: string
    catagory?: string
}

const LatestCard = ({ title, ids, isoString, description, catagory }: LatestCardProps) => {
    return (
        <>
        <div className="position-relative mb-3">
            <Image className="img-fluid w-100" src="/images/news-700x435-1.jpg" style={{ objectFit: 'cover' }} width={700} height={435} alt="News" />
            <div className="bg-white border border-top-0 p-4">
                <div className="mb-2">
                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                        href="">{catagory}</a>
                    <a className="text-body" href=""><small>{dateFormatter(isoString as string)}</small></a>
                </div>
                <Link className="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href={`/post/${ids}`}>{title}</Link>
                <p className="m-0">{description?.slice(0, 100)}......</p>
            </div>
        </div>
        </>
    )
}
export default LatestCard