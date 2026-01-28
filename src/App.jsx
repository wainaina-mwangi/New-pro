import React from 'react'
import Rcards from './components/Rcards'
import Navbar from './components/Navbar'
import Props from './components/Props'
import Header from './components/Header'
import Entry from './components/Entry'
import CopyRight from './components/CopyRight'
import { useState, useEffect } from 'react'

function App() {

  return (
    <>
    
    <Navbar/>
    <Props 
    name ="Erastus Waianian"
    task ="Learning React"
    version="version 19 "
    />
    <Rcards/>
    <Header/>
    <Entry/>
    <CopyRight/>
    
    </>
  )
}

export default App