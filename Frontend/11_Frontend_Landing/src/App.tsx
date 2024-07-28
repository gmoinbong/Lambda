import React from 'react'
import './App.css'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { Features } from './pages/Features/Features'
import { Company } from './pages/Company/Company'
import { MobileHeader } from './components/Header/MobileHeader'
import { Header } from './components/Header/Header'

function App() {
  return (
    <div className='app'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/company' element={<Company />} />
      </Routes >
    </div >
  )
}

export default App