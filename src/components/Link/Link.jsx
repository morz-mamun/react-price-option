
import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name, path} = route
    return (
        <ul className=''>
            <li><a href={path}>{name}</a></li>
        </ul>
    );
};

Link.propTypes = {
    
};

export default Link;