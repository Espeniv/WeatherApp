import { useState } from "react";
import "./FavoritesPage.css";
import CurrentWeather from "../currentWeather/CurrentWeather";

const FavoritesPage = () => {
  const [favoriteLocations, setFavoriteLocations] = useState(
    JSON.parse(localStorage.getItem("favoriteLocations")) || []
  );
  console.log("favoriteLocations", favoriteLocations);
  return (
    <>
      <div className="favorites-container">
        <h1 className="favorites-title">
          {favoriteLocations
            ? "Favorites"
            : "Click the star on any location to favorite it"}
        </h1>
      </div>
      {favoriteLocations.map((location, index) => (
        <div key={index} className="favorite-location">
          <CurrentWeather locationData={{ label: location }} />
        </div>
      ))}
    </>
  );
};

export default FavoritesPage;
