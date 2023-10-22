import { WiThermometer, WiHumidity, WiCloud, WiStrongWind } from "weather-icons-react";
import PropTypes from 'prop-types';

import CurrentWeatherIcon from "./CurrentWeatherIcon";

const MainCard = ({ city, weather }) => {
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
            px-12 h-72 flex items-center justify-between rounded-t ${generateWeatherConditionBackground(weather.weather[0].main)}
        `}>
            <div>
                <h1 className="text-4xl font-bold mb-1">{city.city}</h1>
                <h2 className="text-2xl font-semibold mb-4">{city.country}</h2>
                <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{captailiseDescription(weather.weather[0].description)}</span></div>
                <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{weather.main.temp}</span></div>
                <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{weather.main.humidity}%</span></div>
                <div className="flex items-center"><WiStrongWind size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{weather.wind.speed}m/s {weather.wind.deg}deg</span></div>
            </div>
            <div className="pr-6">
                <CurrentWeatherIcon conditions={weather.weather[0].main} />
            </div>
        </div>
    )
}

export default MainCard;
MainCard.propTypes = {
    city: PropTypes.object,
    weather: PropTypes.object,
};