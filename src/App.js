import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './Comnents/Cart/Cart';
import Country from './Comnents/Country/Country';

function App() {
  const [countries, setCountries]= useState([]);
  const [cart,setCart] = useState([])
  useEffect(()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => {
      setCountries(data)
     const names = data.map(country => country.name)
    })
    .catch(error => console.log(error))

  },[])
  const handleAddCountry = (country)=>  {
  const newCart = [...cart, country];
  setCart(newCart);
}

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Total Loaded Country : {countries.length}</h1>
      <h4 style={{textAlign: 'center'}}>Country Added : {cart.length}</h4>
      <Cart cart={cart}></Cart>
      <ul>{
        countries.map(country =><Country country = {country} handleAddCountry={handleAddCountry} key={country.alpha3Code}></Country>)
        }</ul>
    </div>
  );
}

export default App;
