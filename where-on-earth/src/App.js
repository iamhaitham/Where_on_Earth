import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import './App.css';
import Flag from './components/Flag';

function App() {

  const style = {
    display : "flex",
    flexWrap : "wrap",
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
    navigate("/somewhere/"+url)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <form>
          <div >
            <input type="text" onChange={e => setSearchInput(e.target.value)} placeholder="Where On Earth?"/>
          </div>
        </form>
        <div style={style}>
          {
            countries.filter(country => country.name.toLowerCase().includes(searchInput) || 
            country.name.toUpperCase().includes(searchInput) ||
            country.name.includes(searchInput)).map((value, key) => 
            searchInput.length > 0 ? <Flag link={value.flag} country={value.name} SCB={successfullCallBack} /> : ""
            )
          }
        </div>
      </header>
    </div>
  );
}

export default App;
