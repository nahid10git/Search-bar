import React from 'react';
import './About.css'


const About = () => {
    const handleButton = ()=>{
        alert("This is very confidential. If You need to contact with me! Please, send an email")
    }

    



    return (
        <div className='about-container'>
           <h2>Nahidul Islam</h2>
           <p>Email: nahidrashel@gmail.com</p>
           <button onClick={handleButton} className='facebook'>f</button>
           <button onClick={handleButton} className='facebook'>W</button>
           <div className='footer'>
                <p><small>Copyright © Goromoshai.com</small></p>

           </div>

           
        </div>
    );
};

export default About;