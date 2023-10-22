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
        <div className="flex flex-wrap p-3">
            <div className="w-full flex items-center lg:block">
                <h3 className="text-lg font-bold">{format(new Date(segment.dt_txt), 'EEEE')}</h3>
                <div className="flex items-center lg:mb-2 ml-2 lg:ml-0">{format(new Date(segment.dt_txt), 'p')}</div>
            </div>
            <div className="flex items-center lg:mb-2 lg:w-full"><WiCloud size={24} color='#aaaaaa' /> <span className="lg:ml-2 leading-4 line-clamp-1">{captailiseDescription(segment.weather[0].description)}</span></div>
            <div className="flex items-center lg:mb-2 lg:w-full"><WiThermometer size={24} color='#aaaaaa' /> <span className="lg:ml-2 leading-4">{segment.main.temp}{unit === 'metric' ? '°C' : '°F'}</span></div>
            <div className="flex items-center lg:mb-2 lg:w-full"><WiHumidity size={24} color='#aaaaaa' /> <span className="lg:ml-2 leading-4">{segment.main.humidity}%</span></div>
        </div>
    )
}

export default SubCard;
SubCard.propTypes = {
    segment: PropTypes.object,
    unit: PropTypes.string,
};
