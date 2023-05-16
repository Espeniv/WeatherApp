import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FavoriteStar from "../favoriteStar/FavoriteStar";
import {
  getDateDay,
  getDateMonth,
  getIcon,
  kelvinToCelsius,
} from "../../utils/utils.js";
import "./CurrentWeather.css";

const CurrentWeather = ({
  locationData,
  favoriteLocations,
  setFavoriteLocations,
}) => {
  const [weatherNow, setWeatherNow] = useState();

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
    }
  }, [locationData]);

  const handleOnStarClick = () => {
    if (
      !favoriteLocations.some(
        (location) => location.label == locationData.label
      )
    ) {
      const updatedLocations = [...favoriteLocations, locationData];
      setFavoriteLocations(updatedLocations);
      localStorage.setItem(
        "favoriteLocations",
        JSON.stringify(updatedLocations)
      );
    } else {
      const updatedLocations = favoriteLocations.filter(
        (location) => location.label != locationData.label
      );
      setFavoriteLocations(updatedLocations);
      localStorage.setItem(
        "favoriteLocations",
        JSON.stringify(updatedLocations)
      );
    }
  };

  return (
    <>
      <h1 className="location-name">
        {locationData ? (
          <>
            {locationData.label}{" "}
            <FavoriteStar
              locationData={locationData}
              onStarClick={handleOnStarClick}
            />
          </>
        ) : (
          "Select a location"
        )}
      </h1>
      {weatherNow && (
        <Link
          style={{
            textDecoration: "none",
          }}
          to="/"
          state={{ locationData: locationData }}
        >
          <div className="current-weather">
            <div className="infoContainer">
              <h1 className="today-text">{"Right now"}</h1>
              <div className="date">{`${getDateDay()}/${getDateMonth()}`}</div>
              <div className="temperature">
                {Math.round(kelvinToCelsius(weatherNow.temp))}&deg;C
              </div>
              <div className="description">{weatherNow.description}</div>
            </div>
            <img src={getIcon(weatherNow)} alt="Weather Icon" />
          </div>
        </Link>
      )}
    </>
  );
};

export default CurrentWeather;
