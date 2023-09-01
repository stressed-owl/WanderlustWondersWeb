import React from "react";
import "./CityList.css";
import CityListItem from "./components/cityListItem/CityListItem";

function CityList({ cities, sort }) {
  return (
    <div className="city-list">
      <div className="city-list-wrapper">
        {[...cities].sort(sort).map((city) => (
          <CityListItem city={city} key={city.id} />
        ))}
      </div>
    </div>
  );
}

export default CityList;
