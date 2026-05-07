import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";


export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1641970304222-b2b332808a4b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHklMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://media.istockphoto.com/id/611879528/photo/evening-over-noida-delhi-buildings.jpg?s=612x612&w=0&k=20&c=_lwWWz61LfwXzOZAvzUPbHeOmjHZzVDK4takIEB7Oms=";
    const COLD_URL = "https://media.istockphoto.com/id/1124223630/photo/blizzard-in-paris.jpg?s=612x612&w=0&k=20&c=jaOBsyZVeB_rTqONdrMSh73onrOY0GCEgVcdjMeW3ic=";
    const RAIN_URL = "https://media.istockphoto.com/id/105934727/photo/rain.jpg?s=612x612&w=0&k=20&c=rJcjz9o_7spWniAhZ-oFOVQ9gBJCy2tY_s__RqsseVw=";
    return(
        <div className="InfoBox">

            <div className="CardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                sx={{ height: 140 }}
                image={
                    info.humidity>80
                    ? RAIN_URL
                    : info.temp>15
                    ? HOT_URL
                    : COLD_URL 
                }
                />
                <CardContent className="CardContent">
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city} {
                    info.humidity>80
                    ? <ThunderstormIcon/>
                    : info.temp>15
                    ? <SunnyIcon/>
                    : <AcUnitIcon/> 
                }
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Min Temp = {info.tempMin}&deg;</p>
                        <p>Max Temp = {info.tempMax}&deg;</p>
                        <p >The Weather can be described as <i>{info.weather}</i> and Feels Like = {info.feels_like}&deg;C</p>
                    </Typography>
                </CardContent>
                </Card>
            </div>
            
        </div>
    );
}