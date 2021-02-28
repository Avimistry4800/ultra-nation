import React from 'react';
import './country.css'
const Country = (props) => {
    const {name,population,region,capital,flag} = props.country;
    return (
        <div className="all-country">
            <div className="country">
            <img src={flag} alt=""/>
            <h4>This is {name}</h4>
            <h5>Capital : {capital}</h5>
            <p>Population : {population}</p>
            <p><small>Region : {region}</small></p>
        </div>
        </div>
    );
};

export default Country;