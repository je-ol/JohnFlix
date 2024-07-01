/* import { useState } from 'react' */
import './App.css'
import { useState } from 'react'
import Navbar from './components/navbar'
import Home from './pages/home'
import Login from './pages/login'
import Register from './pages/register'
import Movies from './pages/movies'
import TvShows from './pages/tvShows'
import Trending from './pages/trending'
import MoviePage from './pages/moviePage'
import ShowPage from './pages/showPage'
import { Route, Routes } from 'react-router-dom'
import { MovieContext } from './Context/MovieContext'
import { ShowContext } from './Context/ShowContext'


const App = () => {
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  
  return (
    <>
    <Navbar />      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>

    <ShowContext.Provider value={{shows, setShows}}>
      <Routes>
        <Route path='/tv-shows/' element={<TvShows />} />
        <Route path='/tv-shows/show/:id' element={<ShowPage />} />
      </Routes>
    </ShowContext.Provider>

    <MovieContext.Provider value={{movies, setMovies}}> 
      <Routes>
        <Route path='/trending' element={<Trending />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/movie/:id' element={<MoviePage />} /> 
        <Route path='/trending/movie/:id' element={<MoviePage />} />
      </Routes>     
    </MovieContext.Provider>
    </>
  )
}

export default App
