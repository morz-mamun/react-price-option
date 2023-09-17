
import PropTypes from 'prop-types';
import Link from '../Link/Link';

const Navbar = () => {
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'Products', path: '/products' },
        { id: 5, name: 'Dashboard', path: '/dashboard' },
      ];
      
      
    return (
        <div className='flex justify-center items-center gap-10 my-4'>
            {
                routes.map((route, idx) => <Link key={idx} route = {route}></Link>)
            }
        </div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;