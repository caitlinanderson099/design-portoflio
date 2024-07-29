import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/pages/Home'
import Projects from '../components/pages/Projects'
import Skills from '../components/pages/Skills'


const Links = () => {
  return (
    <>
      <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      </Routes>
      </>
  )
}

export default Links
