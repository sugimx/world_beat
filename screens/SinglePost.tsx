import React from 'react'
import Image from 'next/image'
import CommandSection from '@/components/CommandSection'
import SocialFollow from '@/components/SocialFollow'
import Advertisement from '@/components/Advertisement'
import Trending from '@/components/Trending'
import CommandForm from '@/components/CommandForm'
import { fetchSinglePost } from '@/api/postAPI'
import dateFormatter from '@/lib/dateFormatter'

type SinglePostProps = {
    datas: string
}

const SinglePost = async ({ datas }: SinglePostProps) => {
    const data = await fetchSinglePost(datas)
    console.log(data)
   
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="position-relative mb-3">
                            <Image className="img-fluid w-100" src="/images/news-700x435-1.jpg" style={{objectFit: "cover"}} alt='single post' width={1000} height={1000} priority />
                            <div className="bg-white border border-top-0 p-4">
                                <div className="mb-3">
                                    <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                    href="">{data?.data?.category_id?.cat_name}</a>
                                    <a className="text-body" href="">{dateFormatter(data?.data?.createdAt)}</a>
                                    <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">{data?.data?.title}</h1>
                                    <p>{data?.data?.description}</p>
                                </div>
                            </div>
                        </div>
                        <CommandSection />
                        <CommandForm />
                    </div>
                    <div className="col-lg-4">
                        <SocialFollow />
                        <Advertisement />
                        <Trending />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SinglePost