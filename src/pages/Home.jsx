import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'
import "../css/Home.css"


const Home = () => {
    const movies=[
        {id: 1, title: "Dhurandhar", release_date: 2026},
        {id: 2, title: "Pathaan", release_date: 2023},
        {id: 3, title: "KING", release_date: 2022},
        {id: 4, title: "Tere Naam", release_date: 2000},
        {id: 5, title: "Ramayana", release_date: 2027},
    ]
const handleSearch = (e) =>{
    e.preventDefault();
    alert(searchQuery);
}
const [searchQuery, setSearchQuery] = useState ("");
  return (
    <>
    <div className="home">
        <form onSubmit={handleSearch} className="search-form">
            <input 
            type="text" 
            placeholder="Search for movies...."
            className="search-input" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
        <button type="submit" className="search-button">Search</button>
        </form>
        <div className="movies-grid">
            {movies.map(movie=> 
            // movie.title.toLowerCase().startsWith(searchQuery) &&
            <MovieCard movie={movie} key={movie.id} />)}
        </div>
    </div>
    </>
  )
}

export default Home