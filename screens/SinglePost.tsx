import React from 'react'
import Image from 'next/image'
import CommandSection from '@/components/CommandSection'
import SocialFollow from '@/components/SocialFollow'
import Advertisement from '@/components/Advertisement'
import Tag from '@/components/Tag'
import BreakingNews from '@/components/NewsLetter'
import Trending from '@/components/Trending'
import CommandForm from '@/components/CommandForm'

const SinglePost = () => {
  return (
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="position-relative mb-3">
                        <Image className="img-fluid w-100" src="/images/news-700x435-1.jpg" style={{objectFit: "cover"}} alt='single post' width={1000} height={1000} />
                        <div className="bg-white border border-top-0 p-4">
                            <div className="mb-3">
                                <a className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                                <a className="text-body" href="">Jan 01, 2045</a>
                                <h1 className="mb-3 text-secondary text-uppercase font-weight-bold">Lorem ipsum dolor sit amet elit vitae porta diam...</h1>
                                <p>Sadipscing labore amet rebum est et justo gubergren. Et eirmod ipsum sit diam ut
                                        magna lorem. Nonumy vero labore lorem sanctus rebum et lorem magna kasd, stet
                                        amet magna accusam consetetur eirmod. Kasd accusam sit ipsum sadipscing et at at
                                        sanctus et. Ipsum sit gubergren dolores et, consetetur justo invidunt at et
                                        aliquyam ut et vero clita. Diam sea sea no sed dolores diam nonumy, gubergren
                                        sit stet no diam kasd vero.</p>
                                <p>Voluptua est takimata stet invidunt sed rebum nonumy stet, clita aliquyam dolores
                                        vero stet consetetur elitr takimata rebum sanctus. Sit sed accusam stet sit
                                        nonumy kasd diam dolores, sanctus lorem kasd duo dolor dolor vero sit et. Labore
                                        ipsum duo sanctus amet eos et. Consetetur no sed et aliquyam ipsum justo et,
                                        clita lorem sit vero amet amet est dolor elitr, stet et no diam sit. Dolor erat
                                        justo dolore sit invidunt.</p>
                                <h3 className="text-uppercase font-weight-bold mb-3">Lorem ipsum dolor sit amet elit</h3>
                                <Image className="img-fluid w-50 float-left mr-4 mb-2" src="/images/news-800x500-1.jpg" width={1000} height={1000} alt='single image' />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et.</p>
                                <h5 className="text-uppercase font-weight-bold mb-3">Lorem ipsum dolor sit amet elit</h5>
                                <Image className="img-fluid w-50 float-right mr-4 mb-2" src="/images/news-800x500-2.jpg" width={1000} height={1000} alt="single image" />
                                <p>Diam dolor est labore duo invidunt ipsum clita et, sed et lorem voluptua tempor
                                    invidunt at est sanctus sanctus. Clita dolores sit kasd diam takimata justo diam
                                    lorem sed. Magna amet sed rebum eos. Clita no magna no dolor erat diam tempor
                                    rebum consetetur, sanctus labore sed nonumy diam lorem amet eirmod. No at tempor
                                    sea diam kasd, takimata ea nonumy elitr sadipscing gubergren erat. Gubergren at
                                    lorem invidunt sadipscing rebum sit amet ut ut, voluptua diam dolores at
                                    sadipscing stet. Clita dolor amet dolor ipsum vero ea ea eos. Invidunt sed diam
                                    dolores takimata dolor dolore dolore sit. Sit ipsum erat amet lorem et, magna
                                    sea at sed et eos. Accusam eirmod kasd lorem clita sanctus ut consetetur et. Et
                                    duo tempor sea kasd clita ipsum et. Takimata kasd diam justo est eos erat
                                    aliquyam et ut.</p>
                            </div>
                            <div className="d-flex justify-content-between bg-white border border-top-0 p-4">
                                <div className="d-flex align-items-center">
                                    <Image className="rounded-circle mr-2" src="/images/user.jpg" width={30} height={30} alt="" />
                                    <span>John Doe</span>
                                </div>
                                <div className="d-flex align-items-center">
                                    <span className="ml-3"><i className="far fa-eye mr-2"></i>12345</span>
                                    <span className="ml-3"><i className="far fa-comment mr-2"></i>123</span>
                                </div>
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
                    <BreakingNews />
                    <Tag />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SinglePost