import React, { useState } from "react";
import CityData from "./CityData";

let categories = ["pharmacies", "colleges", "hospitals", "doctors"];

function CategoryButton(props) {
  const [category, setCategory] = useState();
  const [activeBtn, setActiveBtn] = useState();

  const handleCategoryClick = (category, index) => {
    setCategory(category);
    activeBtn === index ? setActiveBtn(null) : setActiveBtn(index);
  };

  const toggleClassName = (index) => {
    return activeBtn === index ? "btn btn-primary" : "btn btn-secondary";
  };
  return (
    <div>
      <div className="category">
        {categories.map((category, index) => (
          <button
            key={index}
            className={toggleClassName(index)}
            onClick={() => {
              handleCategoryClick(category, index);
            }}
          >
            {category === "colleges" ? "schools and colleges" : category}
          </button>
        ))}
      </div>
      <CityData city={props.cityName} category={category} />
    </div>
  );
}

export default CategoryButton;
