import React from 'react'
import Welcome from './Components/Welcome'
import Navbar from './Components/Navbar'
import Main from './Components/Main'
import { Route, Routes } from 'react-router-dom'
import Search from './Components/Search'
import Details from './Components/Details'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/details' element={<Details/>}/>
    </Routes>
  )
}

export default App