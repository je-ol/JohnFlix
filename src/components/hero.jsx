import requests from "../Requests";
import { useState, useEffect } from "react";
import axios from "axios";

const Hero = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  const truncateStr = (str, num) => {
    return str.length > num ? str.slice(0, num) + '...' : str;
  }

  return (
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
        <div className="flex flex-col justify-between text-white w-3/6 h-3/6 mt-auto mr-auto ml-[70px] mb-[30px] p-10">
            <h1 className="text-5xl font-semibold">{movie && movie.title}</h1>
            <p className="text-lg">{movie && truncateStr(movie.overview, 200)}</p>
          <div className="my-4">
            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border  text-white border-gray-300 py-2 px-5 ml-3">
              Watch Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
