import Search from "../search/Search";
import CurrentWeather from "../currentWeather/CurrentWeather";
import { useState } from "react";
import "./SearchPage.css";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

const SearchPage = ({ favoriteLocations, setFavoriteLocations }) => {
  const [locationData, setLocationData] = useState("");

  const handleOnSearchChange = (searchData) => {
    setLocationData(searchData);
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {locationData ? (
        <CurrentWeather
          locationData={locationData}
          setFavoriteLocations={setFavoriteLocations}
          favoriteLocations={favoriteLocations}
        />
      ) : (
        <h1 className="welcome-text">Start searching for a location</h1>
      )}
      <WeatherForecast locationData={locationData} />
    </div>
  );
};

export default SearchPage;
