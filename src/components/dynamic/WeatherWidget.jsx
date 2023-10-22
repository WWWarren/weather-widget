import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { WiThermometer, WiHumidity, WiCloud } from "weather-icons-react";

import { getWeatherData } from '../../api/weather';

import MainCard from './static/MainCard';

const WeatherWidget = ({ city }) => {
    const [weather, setWeather] = useState();

    // Call API when the city is updated
    useEffect(() => {
        const getWeather = async () => {
            const users = await getWeatherData(city);
            setWeather(users);
        };
    
        getWeather();

        return () => {};
    }, [city])

    if (city && weather && weather.city) {
        console.log(weather);
        //slice weather array to get time segments for sub cards
        const forecastWeather = weather.list.slice(1, 6);
        console.log(forecastWeather);

        return (
            <div className="mt-6 max-w-screen-md w-full">
                <div className="bg-white rounded text-black shadow-lg animate-fade-down animate-once animate-ease-in-out">
                    <MainCard city={city} />
                    <div className="grid grid-cols-5 divide-x divide-light-grey border-t-2 border-light-grey">
                        
                        <div className="p-3">
                            <h3 className="text-lg font-bold mb-2">Tuesday</h3>
                            <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">Rain</span></div>
                            <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">35c</span></div>
                            <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">65%</span></div>
                        </div>
                        <div className="p-3">
                            <h3 className="text-lg font-bold mb-2">Wednesday</h3>
                            <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">Rain</span></div>
                            <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">35c</span></div>
                            <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">65%</span></div>
                        </div>
                        <div className="p-3">
                            <h3 className="text-lg font-bold mb-2">Thursday</h3>
                            <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">Rain</span></div>
                            <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">35c</span></div>
                            <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">65%</span></div>
                        </div>
                        <div className="p-3">
                            <h3 className="text-lg font-bold mb-2">Friday</h3>
                            <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">Rain</span></div>
                            <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">35c</span></div>
                            <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">65%</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WeatherWidget
WeatherWidget.propTypes = {
    city: PropTypes.object
};