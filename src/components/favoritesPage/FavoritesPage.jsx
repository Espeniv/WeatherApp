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
        <h1 className="favorites-title">Favorites</h1>
      </div>
      {favoriteLocations.length != 0 ? (
        favoriteLocations.map((location, index) => (
          <div key={index} className="favorite-location">
            <CurrentWeather locationData={{ label: location }} />
          </div>
        ))
      ) : (
        <h1 className="welcome-text-favorites">
          Click the star on any location to favorite it
        </h1>
      )}
    </>
  );
};

export default FavoritesPage;
