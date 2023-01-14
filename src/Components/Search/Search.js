import React from 'react';
import TextField from "@mui/material/TextField";
import './Search.css'
import logo from '../../Images/icon-1.jpg'

const search = () => {
    return (
        <div className='search-Fild'>
        <img src={logo} alt=''></img>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> 
        </div>
    );
};

export default search;