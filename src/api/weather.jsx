export async function getWeatherData(params) {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${params.lat}&lon=${params.lon}&units=${params.units ? params.units : 'metric'}&appid=${import.meta.env.VITE_OPENWEATHER_API_KEY}`)
    response = await response.json()
    if (response) {
        return response
    } else {
        return 'Could not return data'
    }
}