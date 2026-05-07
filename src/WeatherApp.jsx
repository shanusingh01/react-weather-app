import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    let [weatherInfo, setWeatherInfo] = useState({
        city:"Delhi",
        feels_like:29.99,
        temp: 30.05,
        tempMin:30.05,
        tempMax:30.05,
        weather: "haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return(
        <div style={{textAlign:"center"}}>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info = {weatherInfo}/>
        </div>
    );
}