import { AsyncPaginate } from "react-select-async-paginate";
import { useState } from "react";

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
              value: `${city.latitude} ${city.longitude}`,
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

  return (
    <AsyncPaginate
      placeholder="Search for city"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    />
  );
};

export default Search;
