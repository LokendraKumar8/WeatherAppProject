import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 27.11,
        humidity: 44,
        temp: 27.05,
        tempMax: 27.05,
        tempMin: 27.05,
        weather: "haze",
    });
    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App by Delta</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}