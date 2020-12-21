import React,{useState} from 'react';
import axios from 'axios';
import ShowWeather from './showWeather.js';

export default function Weather() {
    const key = process.env.REACT_APP_API_KEY
    const [cityName , setCityName] = useState('');
    const [weather, setWeather] = useState([]);

    async function weatherData(e){
        e.preventDefault();
        const data = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
        ).then((res) => res
        ).then(data => data);

        setWeather({
            data : data
        })
    }

    const handleChange = (e) => {
        setCityName(e.target.value)
    }

    return(
        <div>
        <form onSubmit={weatherData}>
        <div id="searchBox">
            <input type="text" onChange={handleChange} value={cityName} placeholder="Enter the name of city" required />
            <button type="submit" className="searchBtn">Search</button>
        </div>
        </form>
        {
            weather.data != undefined ?

            <div className="container">
                <ShowWeather data = {weather.data} />
            </div>

            : null
        }
        </div>
        )
}
