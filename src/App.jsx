import { useState } from 'react'

import SearchBar from './components/dynamic/Searchbar';
import WeatherWidget from './components/dynamic/WeatherWidget';

import './index.css'

function App() {
  const [city, setCity] = useState()

  return (
    <>
      <h1 className="text-5xl font-bold text-center">Weather Widget</h1>
      <div className="grid grid-cols-1 justify-items-center">
        <SearchBar getCity={setCity} />
        {
          city &&
          <WeatherWidget city={city} />
        }
      </div>
    </>
  )
}

export default App
