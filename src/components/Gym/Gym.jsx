
import PropTypes from 'prop-types';

const Gym = ({ gym }) => {
    const { name, price, features } = gym
    return (
        <div className='bg-slate-300 rounded-lg p-3 space-y-4 flex flex-col'>
            <h1 className='flex-grow'>
                <p className='text-center mb-3'>
                    <span className='3xl'>{price}</span>
                    <span className='xl'>/month</span>
                </p>
                <h1>{features}</h1>
            </h1>

            <button className='w-full bg-red-500 rounded-lg py-2 text-white font-bold text-lg'>Buy Now</button>
        </div>
    );
};

Gym.propTypes = {

};

export default Gym;