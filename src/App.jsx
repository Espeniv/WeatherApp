import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import SearchPage from "./components/searchPage/SearchPage";
import FavoritesPage from "./components/favoritesPage/FavoritesPage";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

function App() {
  const [favoriteLocations, setFavoriteLocations] = useState(
    JSON.parse(localStorage.getItem("favoriteLocations")) || []
  );

  return (
    <div className="background">
      <Menu />
      <Routes>
        <Route
          path="/"
          element={
            <SearchPage
              favoriteLocations={favoriteLocations}
              setFavoriteLocations={setFavoriteLocations}
            />
          }
        />
        <Route
          path="/favorites"
          element={
            <FavoritesPage
              favoriteLocations={favoriteLocations}
              setFavoriteLocations={setFavoriteLocations}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
