import { WiThunderstorm, WiRainMix, WiRain, WiSnow, WiDaySunny, WiCloudy, WiDust } from "weather-icons-react";

function getCorrectIcon(param) {
    switch(param) {
        case 'Thunderstorm':
            return <WiThunderstorm size={200} color='#ddd' />;
        case 'Drizzle':
            return <WiRainMix size={200} color='#ddd' />;
        case 'Rain':
            return <WiRain size={200} color='#ddd' />;
        case 'Snow':
            return <WiSnow size={200} color='#ddd' />;
        case 'Clear':
            return <WiDaySunny size={200} color='#fec013' />;
        case 'Clouds':
            return <WiCloudy size={200} color='#ddd' />;
        default:
            return <WiDust size={200} color='#ddd' />;
    }
}

const CurrentWeatherIcon = ({ conditions }) => {
    const icon = getCorrectIcon(conditions)
    return icon;
}

export default CurrentWeatherIcon;
