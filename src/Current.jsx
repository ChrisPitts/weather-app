import React from 'react';
import { useSelector } from 'react-redux';

export default function Current()
{
    const currentData = useSelector(state => state.weatherData.current);
    console.log(currentData)

    return <div className='card'>
        <div>Clouds: { currentData.clouds }</div>
    </div>;
}
