import React, { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";
import './Search.css'
import logo from '../../Images/icon-1.jpg'
import Country from '../Country/Country';


const Search = () => {
  const [countries, setCountries] = useState([]);
  const [displayCountry, setDisplayCountry] = useState([]);
  

 
    useEffect(()=> {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {setCountries(data) 
          setDisplayCountry(data)})
        
        
        
        
    },[])
    console.log(countries)

   
    const handleSearchFiled = e => {
      const searchText = e.target.value;
      const matchedText = countries.filter(country=>country.name.common.toLowerCase().includes(searchText.toLowerCase()))
      setDisplayCountry(matchedText);
    }
   
    

  
    return (
    <div>
      <div className='search-Fild'>
      
        <img src={logo} alt=''></img>
       
        <div className="search">
        <TextField  id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search a Country By Name or Capital"
          onChange={handleSearchFiled}
        
          
          
        />
        
        </div> 
        </div>
        <div className='country-container' >
        {
          displayCountry.map(country => <Country 
            country = {country} 
            ></Country>)
        }
        </div>
      
    </div>
    );
};

export default Search;