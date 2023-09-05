import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import city from "./assets/icons/city.svg";
import country from "./assets/icons/country.svg";
import SortingByButton from "./components/buttons/sortBy/StyledCustomButton";
import Footer from "./components/commons/footer/Footer";
import Greeting from "./components/commons/greeting/Greeting";
import Header from "./components/commons/header/Header";
import { sortByCountry, sortByName } from "./logic/logic";
import CityList from "./pages/cityList/CityList";
import { fetchCities } from "./redux/citiesSlice";

const App = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  const [type, setType] = useState("default");

  const handleChangeSortType = (sortingType) => {
    setType(sortingType);
  };

  const sortBy = (type) => {
    if (type === "Country") {
      return sortByCountry;
    } else if (type === "City") {
      return sortByName;
    }

    return () => {};
  };

  return (
    <div className="app">
      <Header className="app-header" />
      <main className="app-wrapper">
        <div className="app-filter-greeting-wrapper">
          <Greeting />
          <div className="filter-options">
            <SortingByButton
              icon={city}
              label="Sort by cities"
              onClick={() => handleChangeSortType("Country")}
            />
            <SortingByButton
              icon={country}
              label="Sort by countries"
              onClick={() => handleChangeSortType("City")}
            />
          </div>
        </div>
        <div className="app-cities-wrapper">
          <CityList cities={cities} sort={sortBy(type)} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
