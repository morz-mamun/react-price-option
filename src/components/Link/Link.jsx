
import PropTypes from 'prop-types';

const Link = ({route}) => {
    const {name, path} = route
    return (
        
           <div>
             <li><a href={path}>{name}</a></li>
           </div>
       
    );
};

Link.propTypes = {
    
};

export default Link;