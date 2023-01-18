import './Country.css'

const Country = (props) => {
    const {name, population, flags, capital}=props.country;
  
const button =()=>{
    alert("Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla")
  }
    
    return (
        <div className="country">
            <img src={flags.png}></img>
            <h2>Name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
           <p>population:{population}</p> 
           
           <div className='btn'>
            <button onClick={button}>Details</button>
            
            </div>
            
        </div>
    );
};

export default Country;