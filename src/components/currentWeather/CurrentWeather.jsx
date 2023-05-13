import { useState } from "react";
import FavoriteStar from "../favoriteStar/FavoriteStar";
import "./CurrentWeather.css";

const CurrentWeather = ({
  locationData,
  date,
  temperature,
  description,
  icon,
}) => {
  const [favoriteLocations, setFavoriteLocations] = useState(
    () => JSON.parse(localStorage.getItem("favoriteLocations")) || []
  );

  const handleOnStarClick = () => {
    if (!favoriteLocations.includes(locationData.label)) {
      const updatedLocations = [...favoriteLocations, locationData.label];
      setFavoriteLocations(updatedLocations);
      localStorage.setItem(
        "favoriteLocations",
        JSON.stringify(updatedLocations)
      );
    } else {
      const updatedLocations = favoriteLocations.filter(
        (location) => location !== locationData.label
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
      <div className="current-weather">
        <div className="infoContainer">
          <h1 className="today-text">{"Today"}</h1>
          <div className="date">{date}</div>
          <div className="temperature">{temperature}&deg;C</div>
          <div className="description">{description}</div>
        </div>
        <img src={icon} alt="Weather Icon" />
      </div>
    </>
  );
};

export default CurrentWeather;
