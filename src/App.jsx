import Search from "./components/search/Search";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";
import "./App.css";
import { useEffect, useState } from "react";
import UpcomingForecast from "./components/upcomingForecast/UpcomingForecast";
import rain from "./assets/rain.png";
import sun from "./assets/sun.png";

function App() {
  const [locationData, setLocationData] = useState("");

  const handleOnSearchChange = (searchData) => {
    setLocationData(searchData);
  };

  useEffect(() => {
    console.log(locationData);
  }, [locationData]);


  //currently for testing
  const forecastData = [
    {
      date: 'May 11, 2023',
      temperature: 25,
      description: 'Sunny',
      icon: sun,
    }, 
    {
      date: 'May 12, 2023',
      temperature: 15,
      description: 'Rainy',
      icon: rain,
    }
  ];


  return (
    <div className="background">
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {locationData && <WeatherForecast location={locationData.label} date={forecastData[0].date} temperature={forecastData[0].temperature} description={forecastData[0].description} icon={sun}/>}
        <div className="upcoming-forecast">
        <h1>Upcoming Forecast</h1>
        {forecastData.map((forecastData, index) => (
        <UpcomingForecast
          key={index}
          location={locationData.label}
          date={forecastData.date}
          temperature={forecastData.temperature}
          description={forecastData.description}
          icon={forecastData.icon}
        />
        ))}
        </div>
      </div>
    </div>
  );
}

export default App;
