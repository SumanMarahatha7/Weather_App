import React from 'react';

export default function ShowWeather(props) {
    const data = props.data.data
    return(
        <div className="displayweather">
            <div className="card">
                <h4>{data.name} , {data.sys.country} Weather Report</h4> <center><hr /></center>
                <h5>{Math.floor(data.main.temp - 273.15)}<sup>o</sup> Celcius</h5>
                <span style={{fontSize:"18px"}}>{data.weather[0].main}</span>
                <h6>Maximum Temperature: {Math.ceil(data.main.temp_max - 273.15)}<sup>o</sup> Celcius</h6>
                <h6>Minimum Temperature: {Math.floor(data.main.temp_min - 273.15)}<sup>o</sup> Celcius</h6>


            </div>
        </div>
        )
}
