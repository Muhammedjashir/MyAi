import React from 'react'
import Header from '../componets/Header'
import Landingpage from '../Pages/Landingpage'
import Secpage from '../Pages/Secpage'
import Pricepage from '../Pages/Pricepage'
import Slide from '../componets/Slide'
import Footer from '../componets/Footer'
import Review from '../Pages/Review'

const Home = () => {
  return (
    <div>
     <Slide/>
     <Header/>
     <Landingpage/>
     <Secpage/>
     <Pricepage/>
     <Review/>
    <Footer/>
    </div>
  )
}

export default Home
