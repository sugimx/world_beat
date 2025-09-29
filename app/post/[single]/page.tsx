import React from 'react'
import SinglePageTrending from '@/components/SinglePageTrending'
import SinglePost from '@/screens/SinglePost'

const page = async ({ params }: { params: { single: string } }) => {
  const data = await params
  return (
    <>
      <SinglePageTrending />
      <SinglePost datas={data.single} />
    </>
  )
}

export default page