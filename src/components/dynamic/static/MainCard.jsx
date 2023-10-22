import { WiThermometer, WiHumidity, WiCloud, WiStrongWind, WiDaySunny } from "weather-icons-react";
import PropTypes from 'prop-types';

const MainCard = ({ city }) => {
    return (
        <div className="px-12 h-72 flex items-center justify-between">
            <div>
                <h1 className="text-4xl font-bold mb-1">{city.city}</h1>
                <h2 className="text-2xl font-semibold mb-4">{city.country}</h2>
                <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">Rain</span></div>
                <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">35c</span></div>
                <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">65%</span></div>
                <div className="flex items-center"><WiStrongWind size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">16mph 17deg</span></div>
            </div>
            <div className="pr-6">
                <WiDaySunny size={200} color='#ddd' />
            </div>
        </div>
    )
}

export default MainCard;
MainCard.propTypes = {
    city: PropTypes.object
};