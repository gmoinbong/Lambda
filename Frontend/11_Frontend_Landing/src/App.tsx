import './App.css'
import { Home } from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import { Features } from './pages/Features/Features'
import { Company } from './pages/Company/Company'

import { Privacy } from './pages/Privacy/Privacy'
import { Terms } from './pages/Terms/Terms'
import ScrollToTop from './helpers/ScrollToTop'


function App() {

  return (

    <div className='app'>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/features' element={<Features />} />
        <Route path='/company' element={<Company />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
      </Routes >
    </div>
  )
}

export default App