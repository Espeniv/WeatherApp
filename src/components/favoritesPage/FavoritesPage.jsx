import "./FavoritesPage.css";
import CurrentWeather from "../currentWeather/CurrentWeather";

const FavoritesPage = ({ favoriteLocations, setFavoriteLocations }) => {
  return (
    <>
      <div className="favorites-container">
        <h1 className="favorites-title">Favorites</h1>
      </div>
      {favoriteLocations.length != 0 ? (
        favoriteLocations.map((locationData, index) => (
          <div key={index} className="favorite-location">
            <CurrentWeather
              locationData={locationData}
              favoriteLocations={favoriteLocations}
              setFavoriteLocations={setFavoriteLocations}
            />
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
