import React, { memo } from "react";
import "./CityList.css";
import CityListItem from "./components/cityListItem/CityListItem";

const CityList = memo(function ({ cities, sort }) {
  return (
    <div className="city-list">
      <div className="city-list-wrapper">
        {[...cities].sort(sort).map((city) => (
          <CityListItem city={city} key={city.id} />
        ))}
      </div>
    </div>
  );
});

export default CityList;
