import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Page from './pages/Page'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Page />} />
      </Routes>
    </div>
  )
}

export default App
