import './Country.css'

const Country = (props) => {
    const {name, population, flags, capital}=props.country;
  
    
    return (
        <div className="country">
            <img src={flags.png}></img>
            <h2>Name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
           <p>population:{population}</p> 
            
        </div>
    );
};

export default Country;