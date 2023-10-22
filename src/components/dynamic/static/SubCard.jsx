import PropTypes from 'prop-types';
import { WiThermometer, WiHumidity, WiCloud } from "weather-icons-react";

const SubCard = ({ segment }) => {
    return (
        <div className="p-3">
            <h3 className="text-lg font-bold mb-2">Monday</h3>
            <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">Rain</span></div>
            <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">35c</span></div>
            <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">65%</span></div>
        </div>
    )
}

export default SubCard;
SubCard.propTypes = {
    segment: PropTypes.object
};
