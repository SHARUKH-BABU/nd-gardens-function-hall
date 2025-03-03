import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Blogs from './Pages/Blogs'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Booking from './Pages/Booking'

const App = () => {
  return (
    <>
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<Blogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/booking" element = {<Booking />} />
          <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App