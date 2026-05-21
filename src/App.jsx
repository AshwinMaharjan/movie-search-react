import "./css/App.css"
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { MovieProvider } from "./contexts/MovieContext"

const App = () => {
  return (
    <MovieProvider>
    <Navbar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </main>    
    <Footer />
    </MovieProvider>
  )
}

export default App