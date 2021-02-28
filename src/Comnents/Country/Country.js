import React from 'react';
import './country.css'
const Country = (props) => {
    const {name,population,region,capital,flag} = props.country;
    const handleAddCountry = props.handleAddCountry;
    
    return (
        // console.log(props),
        <div className="all-country">
            <div className="country">
            <img src={flag} alt=""/>
            <h4>This is {name}</h4>
            <h5>Capital : {capital}</h5>
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
            <button onClick={() => handleAddCountry(props.country)}>Add country</button>
        </div>
        </div>
    );
};

export default Country;