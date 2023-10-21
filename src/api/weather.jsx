export async function logMovies() {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${import.meta.env.OPENWEATHER_API_KEY}`);
    const movies = await response.json();
    console.log(movies);
}