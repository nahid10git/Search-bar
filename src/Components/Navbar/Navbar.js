import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css'


const Navbar= () => {
    return (
        <div className='navbar'>
            
           
            <Link to='/'>Md+</Link>
            <Link to='/about'>About</Link>
            
        </div>
    );
};

export default Navbar;