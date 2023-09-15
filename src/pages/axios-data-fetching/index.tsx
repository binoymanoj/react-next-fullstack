import Breadcrumbs from '@/components/common/breadcrumbs'
import TextCard from '@/components/common/text-card'
import { getLayout } from '@/components/layouts/layout'
import React from 'react'

const topics = [
    {
        title: "Axios Basic",
        link: "/axios-data-fetching/axios-basic",
    },
    {
        title: "Axios Advanced",
        link: "/axios-data-fetching/axios-advanced",
    },
]

const AxiosDataFetch = () => {
  return (
    <div className='breadCrumbSpacing'>
     <Breadcrumbs />
     <TextCard data={topics} />
    </div>
  )
}

export default AxiosDataFetch
AxiosDataFetch.getLayout = getLayout