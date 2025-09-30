import MoreCategory from '@/screens/MoreCategory'
import React from 'react'

const page = async ({ searchParams }: {searchParams: { page?: string }}) => {
  const params = await searchParams
  const page = params.page || "1"
  return (
    <>
        <MoreCategory page={page} />
    </>
  )
}

export default page