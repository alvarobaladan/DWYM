import { useState } from 'react'
import './App.css'
import Home from './Home.jsx'
import Details from './Details.jsx'
import Add from './Add.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Details />} path='/:id' />
          <Route element={<Add />} path='/Add' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
