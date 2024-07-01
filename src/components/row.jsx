import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./movie";

const Row = ({ category, fetchURL }) => {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);

  const scrollLeft = () => {
    rowRef.current && (rowRef.current.scrollLeft -= 400);
  }

  const scrollRight = () => {
    rowRef.current && (rowRef.current.scrollLeft += 400);
}

  return (
    <div className="text-white p-4 font-bold my-2">
      <h2 className=" pl-12 text-xl">{category}</h2>
      <div className="relative flex group pl-10">
        <MdChevronLeft
          className="absolute left-7 bg-white rounded-full text-black hidden z-[11] cursor-pointer self-center group-hover:block opacity-50 hover:opacity-100"
          size={40}
          onClick={scrollLeft}/>
        <div
          className="w-full h-full flex overflow-x-scroll scrollbar-hide scroll-smooth py-2"
          ref={rowRef}>
          {movies && movies.map((movie, id) => <Movie key={id} item={movie} />)}
        </div>
        <MdChevronRight
          className="absolute bg-white rounded-full text-black hover:opacity-100 hidden opacity-50 z-[11] cursor-pointer right-0 self-center group-hover:block"
          size={40}
          onClick={scrollRight}/>
      </div>
    </div>
  );
};

export default Row;

Row.propTypes = {
  category: PropTypes.string,
  movies: PropTypes.array,
  setMovies: PropTypes.func,
  fetchURL: PropTypes.string,
};
