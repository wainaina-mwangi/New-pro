import React from 'react'
import Rcards from './components/Rcards'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Entry from './components/Entry'
import CopyRight from './components/CopyRight'
import { useState, useEffect } from 'react'

function App() {

  return (
    <>
    
    <Navbar/>
    <Rcards/>
    <Header/>
    <Entry/>
    <CopyRight/>
    
    </>
  )
}

export default App