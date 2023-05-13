import Search from "../search/Search";
import CurrentWeather from "../currentWeather/CurrentWeather";
import { useEffect, useState } from "react";
import UpcomingForecast from "../upcomingForecast/UpcomingForecast";
import rain from "../../assets/rain.png";
import sun from "../../assets/sun.png";
import cloud from "../../assets/cloud.png";
import "./SearchPage.css";

const SearchPage = () => {
  const [locationData, setLocationData] = useState("");
  const [weatherNow, setWeatherNow] = useState();
  const [weatherForecast, setWeatherForecast] = useState();

  const handleOnSearchChange = (searchData) => {
    setLocationData(searchData);
  };

  useEffect(() => {
    if (locationData != "") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&appid=a2e7a4db0b6d7af071db8e1f1adaa70c`
      )
        .then((res) => res.json())
        .then((data) => {
          setWeatherNow({
            temp: data.main.temp,
            description: data.weather[0].description,
          });
        })
        .catch((error) => console.log(error));

      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${locationData.lat}&lon=${locationData.lon}&appid=a2e7a4db0b6d7af071db8e1f1adaa70c`
      )
        .then((res) => res.json())
        .then((data) => {
          const forecast = [];
          for (let i = 8; i <= 40; i += 8) {
            forecast.push({
              temp: data.list[i - 1].main.temp,
              description: data.list[i - 1].weather[0].description,
            });
          }
          setWeatherForecast(forecast);
        })
        .catch((error) => console.log(error));
    }
  }, [locationData]);

  const getDateDay = () => {
    const today = new Date();
    const day = String(today.getDate());
    return day;
  };

  const getDateMonth = () => {
    const today = new Date();
    const month = String(today.getMonth() + 1);
    return month;
  };

  const kelvinToCelsius = (kelvin) => {
    const celsius = kelvin - 273.15;
    return celsius;
  };

  const getIcon = (data) => {
    if (data.description.includes("rain")) {
      return rain;
    }
    if (data.description.includes("clear")) {
      return sun;
    } else {
      return cloud;
    }
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {weatherNow ? (
        <CurrentWeather
          locationData={locationData}
          date={`${getDateDay()}/${getDateMonth()}`}
          temperature={Math.round(kelvinToCelsius(weatherNow.temp))}
          description={weatherNow.description}
          icon={getIcon(weatherNow)}
        />
      ) : (
        <h1 className="welcome-text">Start searching for a location</h1>
      )}
      {weatherForecast && (
        <div className="upcoming-forecast">
          <h1 className="upcoming-forecast-title">Forecast</h1>
          {weatherForecast.map((forecastData, index) => (
            <UpcomingForecast
              key={index}
              date={`${parseInt(getDateDay()) + (index + 1)}/${getDateMonth()}`}
              temperature={Math.round(kelvinToCelsius(forecastData.temp))}
              description={forecastData.description}
              icon={getIcon(forecastData)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
