import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { City }  from 'country-state-city';

const SearchBar = ({ getCity }) => {
    const [query, setQuery] = useState();
    const [cities, setCities] = useState({ total: [], active: [] });

    useEffect(() => {
        const getCities = City.getAllCities();
        console.log(getCities);
        setCities({...cities, total: getCities});
    }, [])

    useEffect(() => {
        console.log(query, cities)
        const filterCities = cities.total.filter(c => {
            const lowercaseCity = c.name.toLowerCase();
            return lowercaseCity.startsWith(query.toLowerCase());
        });
        console.log(filterCities);
        setCities({...cities, active: filterCities});
    }, [query])

    console.log(cities);

    return (
        <div className="max-w-screen-md w-full grid grid-cols-1 justify-items-center mt-10 relative">
            <div className="max-w-screen-md w-full">
                <MagnifyingGlassIcon className="h-6 w-6 absolute text-green left-2 top-3" />
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for City" className="rounded p-3 pl-12 w-full shadow-lg text-black" />
            </div>
            <div className="max-w-screen-md w-full bg-white mt-3">
                {cities.active.map((c, i) => (
                    <div key={i}>{c.name} ({c.stateCode})</div>
                ))}
            </div>
        </div>
    )
}

export default SearchBar;
SearchBar.propTypes = {
    getCity: PropTypes.func
};