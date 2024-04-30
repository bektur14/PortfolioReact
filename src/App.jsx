import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import "./App.css"

import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'
import MainPage from './pages/MainPage'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Project from './pages/Project'





function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/project/:id' element={<Project />} />
          <Route path='/contacts' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>

  )
}

export default App