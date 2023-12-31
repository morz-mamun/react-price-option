
import PropTypes from 'prop-types';
import { LineChart, AreaChart, Area, Line, XAxis, YAxis } from 'recharts';
const Chart = () => {
    const data = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <LineChart width={800} height={500} data={data}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line type='monotone' dataKey='uv' stroke='#8884d8'></Line>
                <Line dataKey='pv' stroke='#82ca9d'></Line>
            </LineChart>

            <AreaChart width={800} height={500} data={data}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Area dataKey='uv' stroke=''></Area>
                <Area dataKey='pv' stroke=''></Area>
            </AreaChart>


        </div>
    );
};

Chart.propTypes = {

};

export default Chart;