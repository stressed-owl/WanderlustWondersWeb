import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../App.css";
import StyledCustomButton from "../../components/buttons/form/StyledCustomButton";
import Footer from "../../components/commons/footer/Footer";
import Header from "../../components/commons/header/Header";
import {
  createFavorite,
  deleteFavorite,
  deleteFavorites,
  fetchData,
} from "../../redux/favoritesSlice";
import "./Favorites.css";
import RemoveAllButton from "./components/buttons/StyledRemoveAllButton";
import FavoriteItem from "./components/favoriteItem/FavoriteItem";
import FavoriteInputField from "./components/inputFields/FavoriteInputField";
import FavoriteItemSnackbar from "./components/snackbars/RemoveItemSnackbar";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import FlagIcon from "@mui/icons-material/Flag";
import VillaIcon from "@mui/icons-material/Villa";
import { InputAdornment } from "@mui/material";

const regex = /[0-9!@#$%^&*()\-_=+[{\]};:'",.<>/?\\|]/;

const Favorites = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.favorites.favorites || []);

  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const [invalidInputText, setInvalidInputText] = useState("");

  const [isFavoriteCreated, setIsFavoriteCreated] = useState(false);
  const [isDeleteAllItems, setIsDeleteAllItems] = useState(false);
  const [isDeleteOneItem, setIsDeleteOneItem] = useState(false);
  const [favorite, setFavorite] = useState({
    city: "",
    country: "",
    state: "",
  });

  useEffect(() => {
    dispatch(fetchData());
  }, [isFavoriteCreated, isDeleteOneItem]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFavorite({
      ...favorite,
      [name]: value,
    });
  };

  const clearInputFields = () => {
    setFavorite({
      city: "",
      country: "",
      state: "",
    });
  };

  const validateInputFields = () => {
    const validateInputFieldValue = (property) => regex.test(property);
    if (
      validateInputFieldValue(favorite.city) ||
      validateInputFieldValue(favorite.country) ||
      validateInputFieldValue(favorite.state)
    ) {
      setIsInvalidInput(true);
      setInvalidInputText("Invalid characters!");
      clearInputFields();
      return false;
    }

    if (favorite.city.length === 0 || favorite.country.length === 0) {
      setIsInvalidInput(true);
      setInvalidInputText("Required fields mustn't be empty!");
      clearInputFields();
      return false;
    }

    return true;
  };

  const checkDuplicates = () => {
    for (let i = 0; i < data.length; i++) {
      const existingCity = data[i].city.trim().toLowerCase();
      const checkingCity = favorite.city.trim().toLowerCase();
      if (existingCity === checkingCity) {
        return true;
      }
    }
    return false;
  };

  const handleDeleteFavorites = () => {
    if (data.length > 0) {
      dispatch(deleteFavorites());
      setIsDeleteAllItems(true);
      setIsInvalidInput(false);
    }
  };

  const handleCreateFavorite = () => {
    const _favorite = {
      city: favorite.city,
      country: favorite.country,
      state: favorite.state,
    };
    if (validateInputFields()) {
      setIsInvalidInput(false);
      if (!checkDuplicates()) {
        dispatch(createFavorite(_favorite));
        setIsFavoriteCreated(true);
        clearInputFields();
      } else {
        setIsInvalidInput(true);
        setInvalidInputText("Such city already exists in the list!");
        clearInputFields();
      }
    }
  };

  return (
    <div className="app">
      <Header className="app-header" />
      <div className="favorites-content">
        <div className="favorites-content-left">
          <div className="favorites-content-left-wrapper">
            <p className="favorites-description">
              You can create your own list of cities that are the most beloved
            </p>
            {isInvalidInput && (
              <p className="favorites-invalid-input-text">{invalidInputText}</p>
            )}
            <div className="favorites-input-fields">
              <div className="favorites-input-fields-wrapper">
                <FavoriteInputField
                  value={favorite.city}
                  onChange={handleChange}
                  required
                  label="Required"
                  options={[...new Set(data.map((favorite) => favorite.city))]}
                  name="city"
                  placeholder="Boston"
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <FavoriteInputField
                  value={favorite.country}
                  onChange={handleChange}
                  required
                  label="Required"
                  name="country"
                  options={[
                    ...new Set(data.map((favorite) => favorite.country)),
                  ]}
                  placeholder="France"
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <FlagIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <FavoriteInputField
                  value={favorite.state}
                  onChange={handleChange}
                  name="state"
                  options={[...new Set(data.map((favorite) => favorite.state))]}
                  placeholder="Oregon"
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VillaIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </div>
            </div>
            <div className="favorites-add-buttons">
              <StyledCustomButton title="Cancel" onClick={clearInputFields} />
              <StyledCustomButton
                title="Add"
                onClick={() => {
                  handleCreateFavorite();
                }}
              />
            </div>
          </div>
        </div>
        <div className="favorites-content-right">
          <RemoveAllButton onClick={handleDeleteFavorites}>
            Remove all
          </RemoveAllButton>
          <div className="favorites-content-right-wrapper">
            {data.map((favorite, id) => (
              <FavoriteItem
                favorite={favorite}
                key={id}
                onClick={() => {
                  dispatch(deleteFavorite(favorite.id));
                  setIsDeleteOneItem(true);
                  setIsInvalidInput(false);
                }}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {isDeleteAllItems && (
        <FavoriteItemSnackbar
          message="Items were removed"
          open={isDeleteAllItems}
          onClose={() => setIsDeleteAllItems(false)}
        />
      )}

      {isDeleteOneItem && (
        <FavoriteItemSnackbar
          message="Item was removed"
          open={isDeleteOneItem}
          onClose={() => setIsDeleteOneItem(false)}
        />
      )}

      {isFavoriteCreated && (
        <FavoriteItemSnackbar
          message="Item was added"
          open={isFavoriteCreated}
          onClose={() => setIsFavoriteCreated(false)}
        />
      )}
    </div>
  );
};

export default Favorites;
