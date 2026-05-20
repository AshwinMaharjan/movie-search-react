import React from 'react'
import MovieCard from './components/MovieCard'

const App = () => {
  return (
    <div>
      <MovieCard movie={{title: "Inception", release_date: "2025"}} />
      <MovieCard movie={{title: "Dhurandar", release_date: "2026"}} />
    </div>
  )
}

export default App