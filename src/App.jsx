import Search from "./components/search/Search";
import Overview from "./components/overview/Overview";
import "./App.css";
import { useState } from "react";

function App() {
  const [locationData, setLocationData] = useState("");

  const handleOnSearchChange = (searchData) => {
    setLocationData(searchData);
  };

  return (
    <>
      <div className="container">
        <Search onSearchChange={handleOnSearchChange} />
        <Overview name={locationData.label} coords={locationData.value} />
      </div>
    </>
  );
}

export default App;
