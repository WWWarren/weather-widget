import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getWeatherData } from '../../api/weather';

import MainCard from './static/MainCard';
import SubCard from './static/SubCard';

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
        //slice weather array to get time segments for sub cards
        const forecastWeather = weather.list.slice(1, 6);

        return (
            <div className="mt-6 max-w-screen-md w-full">
                <div className="bg-white rounded text-black shadow-lg animate-fade-down animate-once animate-ease-in-out">
                    <MainCard city={city} weather={weather.list[0]} />
                    <div className="grid grid-cols-5 divide-x divide-light-grey border-t-2 border-light-grey">
                        {
                            forecastWeather.map((f, i) => (
                                <SubCard segment={f} key={i} />
                            ))
                        }
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