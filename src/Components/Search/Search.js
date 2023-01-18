import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import './Search.css'
import logo from '../../Images/icon-1.jpg'
import Country from '../Country/Country';

const Search = () => {
  const [countries, setCountries] = useState([]);
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
        
    },[])
    return (
    <div>
      <div className='search-Fild'>
        <img src={logo} alt=''></img>
        <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search a Country By name"
        />
        </div> 
        </div>
        <div className='country-container' >
        {
          countries.map(country => <Country 
            country = {country}
            ></Country>)
        }
        </div>
      
    </div>
    );
};

export default Search;