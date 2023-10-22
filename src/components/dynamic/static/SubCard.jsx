import PropTypes from 'prop-types';
import { format } from 'date-fns'
import { WiThermometer, WiHumidity, WiCloud } from "weather-icons-react";

const SubCard = ({ segment, unit }) => {

    function captailiseDescription(description) {
        // Use Regex to captailise every word in the description
        const words = description.replace(/\b\w/g, l => l.toUpperCase());
        return words;
    }

    return (
        <div className="p-3">
            <h3 className="text-lg font-bold">{format(new Date(segment.dt_txt), 'EEEE')}</h3>
            <div className="flex items-center mb-2">{format(new Date(segment.dt_txt), 'p')}</div>
            <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4 line-clamp-1">{captailiseDescription(segment.weather[0].description)}</span></div>
            <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{segment.main.temp}{unit === 'metric' ? '°C' : '°F'}</span></div>
            <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">{segment.main.humidity}%</span></div>
        </div>
    )
}

export default SubCard;
SubCard.propTypes = {
    segment: PropTypes.object,
    unit: PropTypes.string,
};
