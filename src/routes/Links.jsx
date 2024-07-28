import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Projects from '../components/pages/Projects'


const Links = () => {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      </Routes>
      </>
  )
}

export default Links
