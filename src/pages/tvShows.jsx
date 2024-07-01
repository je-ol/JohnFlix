import { useEffect, useContext } from "react";
import axios from "axios";
import requests from "../Requests";
import { Link } from "react-router-dom";
import { ShowContext } from "../Context/ShowContext";

const TvShows = () => {
  const { shows } = useContext(ShowContext);
  const { setShows } = useContext(ShowContext);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(requests.requestTV);
        const response2 = await axios.get(requests.requestTVP2);
        const response3 = await axios.get(requests.requestTVP3);

        const allShows = [
          ...response1.data.results,
          ...response2.data.results,
          ...response3.data.results,
        ];

        setShows(allShows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-wrap justify-center pt-[100px] px-24">
      {shows &&
        shows.map((show) => (
          <div key={show.id} className="h-[300px] w-[200px] m-3 relative transition-transform hover:scale-[1.1]">
            <img
              src={`https://image.tmdb.org/t/p/original${show.poster_path}`}
              alt={show.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/60 opacity-0 hover:opacity-80">
            <Link to={`/tv-shows/show/${show.id}`}>
              <p className="text-white font-bold text-center px-4 cursor-pointer">
                {show.title ? show.title : show.name}
              </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default TvShows;
