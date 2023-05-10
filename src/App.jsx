import Search from "./components/search/Search";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [locationData, setLocationData] = useState("");

  const handleOnSearchChange = (searchData) => {
    setLocationData(searchData);
  };

  useEffect(() => {
    console.log(locationData);
  }, [locationData]);

  const forecastData = 
    {
      date: 'May 11, 2023',
      temperature: 25,
      description: 'Sunny',
      iconUrl: 'https://cdn-icons-png.flaticon.com/512/169/169367.png',
    }

  return (
    <>
    <div className="background">
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {locationData && <WeatherForecast location={locationData.label} date={forecastData.date} temperature={forecastData.temperature} description={forecastData.description} iconUrl={forecastData.iconUrl}/>}
      </div>
    </div>
    </>
  );
}

export default App;
