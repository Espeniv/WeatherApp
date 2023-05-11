import Search from "./components/search/Search";
import WeatherForecast from "./components/weatherForecast/WeatherForecast";
import "./App.css";
import { useEffect, useState } from "react";
import UpcomingForecast from "./components/upcomingForecast/UpcomingForecast";
import rain from "./assets/rain.png";
import sun from "./assets/sun.png";
import cloud from "./assets/cloud.png";

function App() {
  const [locationData, setLocationData] = useState("");
  const [weatherNow, setWeatherNow] = useState();
  const [upcomingWeather, setUpcomingWeather] = useState();

  const handleOnSearchChange = (searchData) => {
    setLocationData(searchData);
    console.log(locationData);
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=a2e7a4db0b6d7af071db8e1f1adaa70c`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setWeatherNow({
          temp: data.main.temp,
          description: data.weather[0].description,
        });
      })
      .catch((error) => console.log(error));
  }, [locationData]);

  const fetchUpcomingWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=10&lon=10&appid=a2e7a4db0b6d7af071db8e1f1adaa70c`
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  const getTodaysDate = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1);
    const day = String(today.getDate());
    const todaysDate = `${day}/${month}`;
    return todaysDate;
  };

  const kelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius;
  };

  const getIcon = () => {
    if (weatherNow.description.includes("rain")) {
      return rain;
    }
    if (weatherNow.description.includes("clear")) {
      return sun;
    } else {
      return cloud;
    }
  };

  return (
    <div className="background">
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        {weatherNow && (
          <WeatherForecast
            location={locationData.label}
            date={getTodaysDate()}
            temperature={Math.round(kelvinToCelsius(weatherNow.temp))}
            description={weatherNow.description}
            icon={getIcon()}
          />
        )}
        {upcomingWeather && (
          <div className="upcoming-forecast">
            <h1>Upcoming Forecast</h1>
            {upcomingWeather.map((forecastData, index) => (
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
        )}
      </div>
    </div>
  );
}

export default App;
