import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { City }  from 'country-state-city';

const SearchBar = ({ getCity }) => {
    const [query, setQuery] = useState();
    const [cities, setCities] = useState();

    useEffect(() => {
        setCities({total: City.getAllCities()});
    }, [])

    useEffect(() => {
        if (cities && query) {
            const filterCities = cities.total.filter(c => {
                const lowercaseCity = c.name.toLowerCase();
                return lowercaseCity.startsWith(query.toLowerCase());
            });
            // reduces list of countries to 15 to avoid massive list filling up the page
            const reduceCities = filterCities.slice(0, 14);

            setCities({...cities, active: reduceCities});
        }
    }, [query])

    // Pass the city selected via the search bar up to the top level to be used in the weather widget
    function returnCity(data) {
        getCity(data);
        setCities({...cities, active: null});
        setQuery('');
    }

    console.log(cities);
    if (cities) {
        return (
            <div className="max-w-screen-md w-full grid grid-cols-1 justify-items-center mt-10 relative">
                <div className="max-w-screen-md w-full">
                    <MagnifyingGlassIcon className="h-6 w-6 absolute text-green left-2 top-3" />
                    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for City" className="rounded p-3 pl-12 w-full shadow-lg text-black" />
                </div>
                {
                    cities.active && 
                    <div className="max-w-screen-md w-full bg-white text-black mt-3 rounded shadow-lg divide-y divide-light-grey cursor-pointer absolute top-full">
                        {cities.active.map((c, i) => (
                            <div 
                                key={i} 
                                className="p-3"
                                onClick={() => returnCity({city: c.name, state: c.stateCode, country: c.countryCode})}
                            >
                                {c.name} {c.countryCode === 'US' ? `(${c.stateCode}) ` : ''}({c.countryCode})
                            </div>
                        ))}
                    </div>
                }
            </div>
        )
    }
}

export default SearchBar;
SearchBar.propTypes = {
    getCity: PropTypes.func
};