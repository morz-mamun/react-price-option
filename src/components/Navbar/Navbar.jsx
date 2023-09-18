
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Dashboard', path: '/dashboard' },
    ];
    const [open, setOpen] = useState(false)

    return (
        <nav className='my-5 mx-5 bg-black p-1 rounded-xl'>

            <div  onClick={() => setOpen(!open)} className='md:hidden cursor-pointer text-white font-bold text-2xl'>
                {
                    open === true ? 
                    <AiOutlineClose></AiOutlineClose> : <AiOutlineMenu></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex justify-center items-center absolute md:static duration-1000 rounded-xl md:text-white font-bold text-lg
            ${open ? 'top-6' : '-top-60'}
            my-5 gap-10 px-6`} >
                {
                    routes.map((route, idx) => <Link key={idx} route={route}></Link>)
                }
            </ul>
        </nav>



    );
};

Navbar.propTypes = {

};

export default Navbar;