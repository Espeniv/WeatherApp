import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";
import "./Search.css";

// eslint-disable-next-line react/prop-types
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState("");

  const loadOptions = (inputValue) => {
    return fetch(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=10000&namePrefix=${inputValue}`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "aea5a69036msh45ca68b7b197183p1217ecjsnc2da43ce3fd9",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        return {
          options: data.data.map((city) => {
            return {
              lat: `${city.latitude}`,
              lon: `${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      })
      .catch((error) => console.log(error));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  //Only inlined styles are supported by react-select-async-paginate?
  const asyncPaginateStyles = {
    control: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      borderRadius: "10px",
      padding: "8px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
      fontSize: "16px",
      color: "#fff",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
      "&:hover": {
        borderColor: "transparent",
      },
      border: "1px solid rgba(255, 255, 255, 0.3)",
      width: "100%",
    }),
    menu: (provided) => ({
      ...provided,
      maxHeight: "200px",
      overflowY: "auto",
      border: "none",
      borderTop: "none",
      borderRadius: "0 0 4px 4px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(10px)",
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      padding: "8px",
      cursor: "pointer",
      transition: "background-color 0.2s ease-in-out",
      color: isSelected ? "#333" : "#000",
      backgroundColor: isSelected ? "#ccc" : "initial",
      "&:hover": {
        backgroundColor: isSelected ? "#ccc" : "rgba(255, 255, 255, 0.3)",
      },
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333",
    }),
  };

  return (
    <div className="searchContainer">
      <AsyncPaginate
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
        styles={asyncPaginateStyles}
      />
    </div>
  );
};

export default Search;
