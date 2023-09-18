
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip} from 'recharts';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

const Phones = () => {
    const [phones, setPhones] = useState([])

    useEffect(() => {
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
        .then(allData => {
            const phonesData = allData.data.data
            const phonesFakeData = phonesData.map(phone => {
                const obj = {
                    name: phone.phone_name,
                    price: parseInt(phone.slug.split('-')[1])
                }
                return obj
            })
            setPhones(phonesFakeData)
        })
    }, [])

    return (
        <div>
            <h1 className='text-2xl font-bold'>Phones: {phones.length}</h1>
        <BarChart width={900} height={450} data={phones}>
            <XAxis dataKey='name'></XAxis>
            <Bar dataKey="price" stroke='red'></Bar>
            <Tooltip></Tooltip>
            
        </BarChart>

            
        </div>
    );
};

Phones.propTypes = {
    
};

export default Phones;