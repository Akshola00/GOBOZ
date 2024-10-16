import EploreEvent from '@/components/EploreEvent'
import EventDetails from '@/components/EventDetails'
import MyPastEvents from '@/components/MyPastEvents'
import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
        <Nav />
        <EploreEvent />
        <EventDetails />
        <MyPastEvents />
    </div>
  )
}

export default page