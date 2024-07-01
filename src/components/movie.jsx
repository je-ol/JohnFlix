import PropTypes from 'prop-types';
import { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Movie = ({ item }) => {
    const [like, setLike] = useState(false);

    const handleLike = () => {
        setLike(!like);
    }

    return (
        <div
        className='min-w-[300px] h-[169px] cursor-pointer relative m-2 transition-transform z-[5] hover:scale-[1.15] hover:z-[9]'>
            <img className='rounded w-full h-full' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title}></img>                    
            <div className='absolute rounded top-0 left-0 w-full h-full hover:bg-black/60'>
                <Link to={item.title ? `/movies/movie/${item?.id}` : `/tv-shows/show/${item?.id}`}>
                <p className='w-full h-full text-white font-bold flex justify-center items-center text-center opacity-0 hover:opacity-80'>{item.title ? item.title : item.name}</p>
                </Link>
                <p className='absolute top-2 left-2 text-white/80 text-xl'
                onClick={handleLike}> {like ? <FaHeart /> : <FaRegHeart />} </p>
            </div>
        </div>
    )
}

export default Movie;

Movie.propTypes = {
    item: PropTypes.object,
}