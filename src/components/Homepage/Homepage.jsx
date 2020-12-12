import React from 'react'
import Header from './Header/Header'
import Enjoyable from './Enjoyable/Enjoyable'
import Highlights from './Highlights/Highlights'
import Gathering from './Gathering/Gathering'
import Reservation from './Reservation/Reservation'
import Footer from './Footer/Footer'

export default function HomePage() {
  return (
    <div>
      <Header /> 
      <Enjoyable />
      <Highlights />
      <Gathering />
      <Reservation />
      <Footer />
    </div>
  )
}
