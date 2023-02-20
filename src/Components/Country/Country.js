import './Country.css'


const Country = (props) => {
    const {name, population, flags, capital, region, startOfWeek,timezones }=props.country;
    // console.log(props.item)
      
        
    // console.log(props.country);
    const Details = () =>{
        alert(`
        This is ${region}
       
        Official Off day: ${startOfWeek}
        Time Zone: ${timezones}`)
    }
    // console.log(props.country)

    return (
        <div className="country">
            <img src={flags.png} alt=""></img>
            <h2>Name: {name.common}</h2>
            <h4>Capital: {capital}</h4>
           <p>population:{population}</p> 
           
           <div className='btn'>
            <button onClick={Details}>Details</button>
           
            
            
            </div>
            
        </div>
    );
};

export default Country;