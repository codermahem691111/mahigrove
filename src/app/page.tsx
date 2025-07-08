"use client"
import React from 'react'
import Home from './components/Home'
import Mainproduct from './components/Mainproduct'
import WhyChose from './components/WhyChose'
import Meet from './components/Meet'
import NewsLetter from './components/NewsLetter'
import Testo from './components/Testo'
import Blog from './components/Blog'
import FAQ from './components/FAQ'
function page() {
  return (
    <div>
      <Home/> 
      <Mainproduct/>
      <WhyChose/>
      <Meet/>
      <NewsLetter/>
      <Testo/>
      <Blog/>
      <FAQ/>
    </div>
  )
}

export default page
