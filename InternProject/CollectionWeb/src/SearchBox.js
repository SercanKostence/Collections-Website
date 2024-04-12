import React, { useState, useEffect } from 'react';
import { Dropdown } from 'primereact/dropdown'; 
import { FaSearch } from 'react-icons/fa';
import './searchBoxStyle.scss'; 

const SearchBox = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedReligion, setSelectedReligion] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedType, setSelectedType] = useState(null);

  const [locations, setLocations] = useState([]);
  const [religions, setReligions] = useState([]);
  const [years, setYears] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const data = props.data;
    setLocations(data.map(item => ({ label: item.name, value: item.name })));
    setReligions(data.map(item => ({ label: item.religion, value: item.religion })));
    setYears(data.map(item => ({ label: item.year, value: item.year })));
    setTypes(data.map(item => ({ label: item.type, value: item.type })));
  }, [props.data]);
  

  return (
    <section className='dropbox-all'>
      <div className="dropbox-container">
        <div>
          <h5>Location</h5>
          <Dropdown
            variant="filled"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.value)}
            options={locations}
            placeholder="Select a Location"
            className="w-full md:w-14rem"
          />
        </div>
        <div>
          <h5>Religion</h5>
          <Dropdown
            variant="filled"
            value={selectedReligion}
            onChange={(e) => setSelectedReligion(e.value)}
            options={religions}
            placeholder="Select a Religion"
            className="w-full md:w-14rem"
          />
        </div>
        <div>
          <h5>Year</h5>
          <Dropdown
            variant="filled"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.value)}
            options={years}
            placeholder="Select a Year"
            className="w-full md:w-14rem"
          />
        </div>
        <div>
          <h5>Type</h5>
          <Dropdown
            variant="filled"
            value={selectedType}
            onChange={(e) => setSelectedType(e.value)}
            options={types}
            placeholder="Select a Type"
            className="w-full md:w-14rem"
          />
        </div>
        <button className="button-navbar search-button"><a className='text-search'>
      <FaSearch size={35} className='search-icon' /> Search
      </a>
    </button>
      </div>
    </section>
  );
};

export default SearchBox;
