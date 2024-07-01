import logo from '../assets/logo.png'
import accountIcon from '../assets/account.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-indigo-800 flex justify-around fixed z-[50] w-full bg-opacity-90">
            <div className='flex align-center'>
                <img src={logo} alt="Johnflix" className="h-12 m-3" />    
                <Link to='/'>
                <p className='text-5xl text-white font-medium mt-4 font-["Bebas_Neue"]'>JOHNFLIX</p>
                </Link>
            </div>

            <ul className='
            flex flex-1 items-center justify-evenly max-w-xl text-white'>
                <Link to='/'>
                <li className="cursor-pointer">Home</li>
                </Link>
                <Link to='/movies'>
                <li className="cursor-pointer">Movies</li>
                </Link>
                <Link to='/tv-shows'>
                <li className="cursor-pointer">TV Shows</li>
                </Link>
                <Link to='/trending'>
                <li className="cursor-pointer">Trending</li>
                </Link>
                <li className="cursor-pointer">My List</li>
            </ul>
            <div className='flex items-center'>
                <Link to='/login'>
                    <button className="bg-indigo-500 text-white font-semibold rounded px-4 py-2 m-3 cursor-pointer">Log In</button>
                </Link>
                <Link to='/register'>
                    <button className="bg-indigo-500 text-white font-semibold rounded px-4 py-2 m-3 cursor-pointer">Register</button>
                </Link>
                <img 
                className="h-9 ml-3 cursor-pointer"
                src={accountIcon} alt="" />
            </div>
        </nav>
    )
}

export default Navbar