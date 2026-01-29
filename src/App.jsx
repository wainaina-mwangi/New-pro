import React from 'react'
import Rcards from './components/Rcards'
import Navbar from './components/Navbar'
import Props from './components/Props'
import Joke from './components/Joke'
import Header from './components/Header'
import Entry from './components/Entry'
import CopyRight from './components/CopyRight'
import { useState, useEffect } from 'react'

function App() {

  return (
    <>
    
    <Navbar/>
    <Props 
    name ="Erastus Waianiana"
    task ="Learning React"
    version="version 19 "
    />
    <Props 
    name ="Sandra Kaunda"
    task ="Learning React"
    version="version 18 "
    />
    <Joke 
    setup="Why did the React component lose its job"
    punchline="Because it didn't have any 'props' to show for its work!"
    // non-strings props
    upVotes={10}
    isPun={true}
    />
    <Joke 
     setup="How do you comfort a JavaScript bug?"
    punchline="You console it!"
    // non-strings props
    upVotes={10}
    isPun={true}
    />
    <Joke 
     setup="Why was the developer unhappy at their new job?"
     punchline="They wanted a 'View' but the boss only gave them 'React-ion"
     // non-strings props
    upVotes={10}
    isPun={true}

    />
    <Rcards/>
    <Header/>
    <Entry/>
    <CopyRight/>
    
    </>
  )
}

export default App