import { useEffect, useContext } from 'react'
import { MovieContext } from '../Context/MovieContext'
import axios from 'axios'
import requests from '../Requests'
import { Link } from 'react-router-dom'

const Movies = () => {
    const { setMovies } = useContext(MovieContext)
    const { movies } = useContext(MovieContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response1 = await axios.get(requests.requestMovies);
                const response2 = await axios.get(requests.requestMoviesP2);
                const response3 = await axios.get(requests.requestMoviesP3);

                const allMovies = [
                    ...response1.data.results,
                    ...response2.data.results,
                    ...response3.data.results
                ];

                setMovies(allMovies);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="flex flex-wrap justify-center pt-[100px] px-24">
        {movies &&
          movies.map((movie) => (
            <div key={movie.id} className="h-[300px] w-[200px] m-3 relative transition-transform hover:scale-[1.1]">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex justify-center items-center bg-black/60 opacity-0 hover:opacity-80">
                <Link to={`movie/${movie.id}`}>
                <p className="text-white font-bold text-center px-4 cursor-pointer">
                  {movie.title ? movie.title : movie.name}</p>
                  </Link>
              </div>
            </div>
          ))}
      </div>
    )
}

export default Movies