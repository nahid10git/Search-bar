import './Country.css'
import Dropdown from 'react-bootstrap/Dropdown';

const Country = (props) => {
    const {name, population, flags, capital, region }=props.country;
    // console.log(props.country);
  

    
    return (
        <div className="country">
            <img src={flags.png}></img>
            <h2>Name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
           <p>population:{population}</p> 
           
           <div className='btn'>
            <Dropdown>
                <Dropdown.Toggle variant = 'success' id = 'dropdown-basic'>
                    Details
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown href = "#/action-1">This is {region}</Dropdown>
                </Dropdown.Menu>
            </Dropdown>
            
            
            </div>
            
        </div>
    );
};

export default Country;