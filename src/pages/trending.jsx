import { useEffect, useContext } from "react";
import axios from "axios";
import requests from "../Requests";
import { MovieContext } from "../Context/MovieContext";
import { Link } from "react-router-dom";

const Trending = () => {
  /* const [trendings, setTrendings] = useState([]); */
  const { setMovies } = useContext(MovieContext);
  const { movies } = useContext(MovieContext);

  const trendings = movies;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await axios.get(requests.requestTrending);
        const response2 = await axios.get(requests.requestTrendingP2);
        const response3 = await axios.get(requests.requestTrendingP3);

        const allTrendings = [
          ...response1.data.results,
          ...response2.data.results,
          ...response3.data.results,
        ];

        setMovies(allTrendings);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="flex flex-wrap justify-center pt-[100px] px-24">
      {trendings &&
        trendings.map((trending) => (
          <div
            key={trending.id}
            className="h-[300px] w-[200px] m-3 relative transition-transform hover:scale-[1.1]"
          >
            <img
              src={`https://image.tmdb.org/t/p/original${trending.poster_path}`}
              alt={trending.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center items-center bg-black/60 opacity-0 hover:opacity-80">
              <Link to={`/movies/movie/${trending.id}`}>
                <p className="text-white font-bold text-center px-4 cursor-pointer">
                  {trending.title ? trending.title : trending.name}
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Trending;
