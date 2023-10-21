import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { WiThermometer, WiHumidity, WiCloud, WiStrongWind, WiDaySunny } from "weather-icons-react";

import { logMovies } from '../../api/weather';

const WeatherWidget = ({ city }) => {
    useEffect(() => {
        logMovies()
    }, [])

    if (city) {
        return (
            <div className="mt-6 max-w-screen-md w-full">
                <div className="bg-white rounded text-black shadow-lg">
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
                    <div className="grid grid-cols-5 divide-x divide-light-grey border-t-2 border-light-grey">
                        <div className="p-3">
                            <h3 className="text-lg font-bold mb-2">Monday</h3>
                            <div className="flex items-center mb-2"><WiCloud size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">Rain</span></div>
                            <div className="flex items-center mb-2"><WiThermometer size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">35c</span></div>
                            <div className="flex items-center mb-2"><WiHumidity size={24} color='#aaaaaa' /> <span className="ml-2 leading-4">65%</span></div>
                        </div>
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