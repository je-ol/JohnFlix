import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { useEffect, useState, useRef, useMemo } from "react";
import Movie from "../components/movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import axios from "axios";
const key = '94552ffcd850cfdc02d2316f6c7aad5d'

const MoviePage = () => {
  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState(null);
  const { id } = useParams();
  const rowRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=94552ffcd850cfdc02d2316f6c7aad5d&language=en-US`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const genre = useMemo(() => {
    if (movie && movie.genres) {
        return movie.genres.length >= 2 ? [movie.genres[0]?.id, movie.genres[1]?.id] : [movie.genres[0]?.id];
    } else {
        return [];
    }
}, [movie]);

  useEffect(() => {
    const fetchData = async () => {
      if (genre.length === 2) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=${genre[0]},${genre[1]}&page=1&certification_country=US&certification.lte=PG-13`);
          const data = response.data.results;
          setSimilar(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      } else if (genre.length === 1) {
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US&with_genres=${genre[0]}&page=1&certification_country=US&certification.lte=PG-13`);
          const data = response.data.results;
          setSimilar(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };
    fetchData();
  }, [genre]);

  const scrollLeft = () => {
    rowRef.current && (rowRef.current.scrollLeft -= 400);
  };

  const scrollRight = () => {
    rowRef.current && (rowRef.current.scrollLeft += 400);
  };

  return (
    <div className="flex flex-col w-full justify-center">
      <div
        className="w-full h-[650px]"
        style={{
          backgroundImage:
            movie &&
            `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
          backgroundSize: "cover",
        }}
      >
        <div className="flex w-full h-[650px] bg-gradient-to-r from-black">
          <div className="flex flex-col justify-between text-white w-3/5 h-3/5 mt-auto mr-auto ml-[70px] mb-[30px] p-10">
            <h1 className="text-5xl font-semibold">{movie && movie.title}</h1>
            <p className="text-lg">{movie && movie.overview}</p>
            <div className="my-2 flex">
              <h2 className="text-md bg-indigo-600 inline px-3 py-1 font-medium rounded mr-4">Duration: {movie?.runtime}m</h2>
              <h2 className="text-md bg-indigo-600 inline px-3 py-1 font-medium rounded mr-4">Released: {movie?.release_date}</h2>
              <h2 className="text-md bg-indigo-600 inline px-3 py-1 font-medium rounded mr-4">
                {movie?.genres && `${movie.genres[0]?.name}, ${movie.genres[1]?.name || ''}`}</h2>
            </div>
            <div className="my-4">
              <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
                Rating {movie && movie.vote_average}
              </button>
              <button className="border  text-white border-gray-300 py-2 px-5 ml-3">
                Watch Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative my-10 flex flex-col group pl-12">
        <h2 className="text-xl font-bold text-white px-4">Similar Movies</h2>
        <div className="flex items-center">
          <MdChevronLeft
            className="absolute left-7 bg-white rounded-full text-black hidden z-[11] cursor-pointer self-center group-hover:block opacity-50 hover:opacity-100"
            size={40}
            onClick={scrollLeft}
          />
          <div
            className="w-full h-full flex overflow-x-scroll scrollbar-hide scroll-smooth py-2"
            ref={rowRef}
          >
            {similar &&
              similar.map((simMovie, id) => <Movie key={id} item={simMovie} />)}
          </div>
          <MdChevronRight
            className="absolute bg-white rounded-full text-black hover:opacity-100 hidden opacity-50 z-[11] cursor-pointer right-0 self-center group-hover:block"
            size={40}
            onClick={scrollRight}
          />
        </div>
      </div>
    </div>
  );
};

export default MoviePage;

MoviePage.propTypes = {
  movies: PropTypes.array,
};
