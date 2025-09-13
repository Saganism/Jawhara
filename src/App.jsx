import React from 'react'
import Nav from './Nav/Nav'
import { Brief } from './Brief/Brief'
import { Products } from './Products/Products'
import { Footer } from './Footer/Footer'
import { Photos } from './Photos/Photos'

const App = () => {

  return (
    <>
      <Nav />
      <Brief />
      <Products />
      <Photos />
      <Footer />
    </>
  )
}

export default App
