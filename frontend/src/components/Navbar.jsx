import { assets } from '../assets/assets.js'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-white/70 flex justify-between items-center p-4 sm:p-6 sm:px-24'>
            {/* Logo */}
            <img
                src={assets.logo}
                alt="Logo"
                className='w-28 sm:w-32 cursor-pointer'
            />

            {/* Login Button */}
            <button onClick={() => navigate('/login')} className='flex items-center gap-2 border border-gray-500 rounded-full px-6 py-2 text-gray-800 hover:bg-gray-100 transition-all duration-200 cursor-pointer'>
                Login <img src={assets.arrow_icon} alt="" />
            </button>
        </div>
    )
}

export default Navbar