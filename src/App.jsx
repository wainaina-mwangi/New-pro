import React from 'react'
import Rcards from './components/Rcards'
import Navbar from './components/Navbar'
import CopyRight from './components/CopyRight'
import { useState, useEffect } from 'react'

function App() {

  return (
    <>
    
    <Navbar/>
    <Rcards/>
    <CopyRight/>
    
    </>
  )
}

export default App