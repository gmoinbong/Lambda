import React from 'react'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { Features } from './pages/Features/Features'

function App() {
  5
  return (
    < div style={{ height: "100%" }} >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
      </Routes >
    </div >
  )
}

export default App