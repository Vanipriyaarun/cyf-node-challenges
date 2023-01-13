import React, { useState } from "react";
import CategoryButton from "./CategoryButton";

let cities = ["Cities", "Harrow", "Heathrow", "Stratford"];

function DropdownMenu() {
  const [city, setCity] = useState("");

  function handleCityNameChange(e) {
    e.target.value === "Cities" ? setCity("") : setCity(e.target.value);
    console.log(e.target.value);
    console.log(city);
  }
  return (
    <div>
      <div className="dropdownMenu">
        <label for="city-select">Choose a City:</label>
        <select
          name="cities"
          id="city"
          onChange={(e) => handleCityNameChange(e)}
        >
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <CategoryButton cityName={city} />
    </div>
  );
}

export default DropdownMenu;
