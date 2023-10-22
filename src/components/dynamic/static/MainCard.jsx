import { WiThermometer, WiHumidity, WiCloud, WiStrongWind } from "weather-icons-react";
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

import CurrentWeatherIcon from "./CurrentWeatherIcon";

const MainCard = ({ city, weather, unit, changeUnit }) => {
    function generateWeatherConditionBackground(params) {
        let background;
        switch(params) {
            case 'Thunderstorm':
                background = 'bg-weather-thunder';
                break;
            case 'Drizzle':
                background = 'bg-weather-cloudy';
                break;
            case 'Rain':
                background = 'bg-weather-rainy';
                break;
            case 'Snow':
                background = 'bg-weather-rainy';
                break;
            case 'Clear':
                background = 'bg-weather-clear';
                break;
            case 'Clouds':
                background = 'bg-weather-cloudy';
                break;
            default:
                background = 'bg-weather-other';
        }

        return background
    }

    function captailiseDescription(description) {
        // Use Regex to captailise every word in the description
        const words = description.replace(/\b\w/g, l => l.toUpperCase());
        return words;
    }

    return (
        <div className={`
            relative px-12 h-72 flex items-center justify-between rounded-t ${generateWeatherConditionBackground(weather.weather[0].main)}
        `}>
            <button 
                className="absolute top-0 right-0 bg-green text-white font-bold p-1 w-16 rounded mt-2 mr-2 flex items-center justify-center"
                onClick={changeUnit}
            >
                {unit === 'metric' ? `°C` : `°F`}
                <ArrowsRightLeftIcon className="h-4 w-4 mx-1" />
                {unit === 'metric' ? `°F` : `°C`}
            </button>
            <div>
                <h1 className="text-4xl font-bold mb-1">{city.city}</h1>
                <h2 className="text-2xl font-semibold mb-4">{city.country}</h2>
                <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{captailiseDescription(weather.weather[0].description)}</span></div>
                <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{weather.main.temp}{unit === 'metric' ? '°C' : '°F'}</span></div>
                <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{weather.main.humidity}%</span></div>
                <div className="flex items-center"><WiStrongWind size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{weather.wind.speed}{unit === 'metric' ? 'm/s' : 'mph'} {weather.wind.deg}deg</span></div>
            </div>
            <div className="pr-12">
                <CurrentWeatherIcon conditions={weather.weather[0].main} />
            </div>
        </div>
    )
}

export default MainCard;
MainCard.propTypes = {
    city: PropTypes.object,
    weather: PropTypes.object,
    unit: PropTypes.string,
    changeUnit: PropTypes.func,
};