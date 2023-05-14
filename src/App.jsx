import Menu from "./components/menu/Menu";
import SearchPage from "./components/searchPage/SearchPage";
import FavoritesPage from "./components/favoritesPage/FavoritesPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="background">
      <Menu />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
}

export default App;
