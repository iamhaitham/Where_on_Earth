import React, {useState, useEffect} from 'react';
import Flag from '../components/Flag';
import { navigate } from '@reach/router';
import axios from 'axios';
import SearchBar from '../components/SearchBar';

const Countries = () => {
    const style = {
        display : "flex",
        flexWrap : "wrap",
        justifyContent: "center",
        hover : "10em",
      }
    
      const [searchInput, setSearchInput] = useState("");
      const [countries, setCountries] = useState([]);
    
      useEffect(() => {
        axios.get("http://restcountries.eu/rest/v2")
        .then(res => {
          setCountries(res.data);
        })
      },[]);
    
      const successfullCallBack = url => {
        navigate("/"+url);
      }
    
    return (
    <div className="App">
      <header>
        <form>
          <div >
          <SearchBar SCB={setSearchInput}/> 
          </div>
        </form>
        <div style={style}>
          {
            countries.filter(country => country.name.toLowerCase().includes(searchInput) || 
            country.name.toUpperCase().includes(searchInput) ||
            country.name.includes(searchInput)).map((value, key) => 
            searchInput.length > 0 ? <Flag key={key} link={value.flag} country={value.name} SCB={successfullCallBack} /> : ""
            )
          }
          </div>
      </header>
    </div>

    )
}

export default Countries
