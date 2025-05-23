import React, { use } from 'react'
import Search from './components/search'
import { useState } from 'react'

const App = () => {
  const [searchTerm,setSearchTerm]=useState("I am batman")
  return (
   <div className="pattern">
    <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="chutiye"/>
            <h1> Find <span className='text-gradient'>Movies</span> You'll Enjoy Watching without Hassle</h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>
    </div>
   </div>
  )
}

export default App