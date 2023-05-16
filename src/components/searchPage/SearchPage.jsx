import Search from "../search/Search";
import CurrentWeather from "../currentWeather/CurrentWeather";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./SearchPage.css";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

const SearchPage = ({ favoriteLocations, setFavoriteLocations }) => {
  const location = useLocation();
  const [locationData, setLocationData] = useState(
    location.state?.locationData || ""
  );

  const handleOnSearchChange = (searchData) => {
    setLocationData(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {locationData ? (
        <div className="current-container">
          <CurrentWeather
            locationData={locationData}
            setFavoriteLocations={setFavoriteLocations}
            favoriteLocations={favoriteLocations}
          />
        </div>
      ) : (
        <h1 className="welcome-text">Start searching for a location</h1>
      )}
      <WeatherForecast locationData={locationData} />
    </div>
  );
};

export default SearchPage;
