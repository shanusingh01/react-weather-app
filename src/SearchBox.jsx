import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css" ;
import { useState } from 'react';

export default function SearchBox({updateInfo}){
    
    let [city, setCity] = useState("");
    let[error,setError] = useState(false);

    const API_KEY = "17f78865eb4317a969954dadc56f8368";
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    let getWeatherInfo = async () => {

        try{
            let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
    
            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        }

        catch(error){
            throw error;
        }
        
    };

    

    let handleChange = (event) => {
        setCity(event.target.value);
    };

    let handleSubmit = async (event) => {
        try{
            event.preventDefault();
            let newInfo = await getWeatherInfo();
            updateInfo(newInfo);
            setCity("");
        }

        catch(error){
            setError(true);
        }  
    };

    return(
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField 
                id="city"
                label="City Name"
                variant="outlined"
                required
                value={city}
                onChange={handleChange}
                />
                <br></br>
                <br></br>
                <Button variant="contained" type="submit">Search</Button>
                {error && <p style={{color:"red"}}>No such place exists!</p>}
            </form>
        </div>
    )

}