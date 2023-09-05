import { Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShareDialog from "../../components/commons/alertDialogs/shareDialog/ShareDialog";
import Footer from "../../components/commons/footer/Footer";
import Header from "../../components/commons/header/Header";
import { fetchCities } from "../../redux/citiesSlice";
import "./CityDetails.css";
import StyledCustomIconButton from "./components/buttons/StyledCustomIconButton";
import CityDetailsCarousel from "./components/carousel/CityDetailsCarousel";
import ShareIcon from "@mui/icons-material/Share";
import CopyAllIcon from "@mui/icons-material/CopyAll";

const CityDetails = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  const city = cities.find((city) => city.id === +id);

  const URL = `https://localhost:3000/city-details/${city.name}`;
  const socialMediaURL = `${city.name}, ${city.country}. \n${URL}`;

  const [isShareButtonClicked, setIsShareButtonClicked] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isSnackbarShown, setIsSnackbarShown] = useState(false);
  const [isCopyURLButtonClicked, setIsCopyURLButtonClicked] = useState(false);
  const [isCopyDescButtonClicked, setIsCopyDescButtonClicked] = useState(false);

  const handleShareButtonClick = () => {
    setIsShareButtonClicked(true);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsShareButtonClicked(false);
    setIsDialogOpen(false);
    setIsCopyURLButtonClicked(false);
  };

  const handleCopyDescButtonClick = () => {
    setIsCopyDescButtonClicked(true);
    if (isCopyDescButtonClicked) setIsSnackbarShown(true);
    else setIsSnackbarShown(false);
    navigator.clipboard.writeText(city.description);
  };

  const handleCopyURLButtonClick = () => {
    setIsCopyURLButtonClicked(true);
    if (isCopyURLButtonClicked) setIsSnackbarShown(true);
    else setIsSnackbarShown(false);
    navigator.clipboard.writeText(URL);
  };

  return (
    <div className="city-details">
      <Header className="app-header" />
      <main className="city-details-wrapper">
        <div className="city-details-info">
          <h2 className="city-details-name">{city.name}</h2>
          <div className="city-details-content-wrapper">
            <div className="city-details-images-carousel">
              <CityDetailsCarousel images={city.images} />
            </div>
            <div className="city-details-description-wrapper">
              <p className="city-details-description">{city.description}</p>
              <div className="city-details-description-actions">
                <StyledCustomIconButton
                  onClick={() => handleShareButtonClick()}
                  actionName="Share"
                  actionDesc="Allows you to share a link of a city with your friends"
                >
                  <ShareIcon />
                </StyledCustomIconButton>
                <StyledCustomIconButton
                  onClick={() => handleCopyDescButtonClick()}
                  actionName="Copy"
                  actionDesc="Allows you to copy the city's description above"
                >
                  <CopyAllIcon />
                </StyledCustomIconButton>
              </div>
            </div>
          </div>
        </div>
      </main>

      {isShareButtonClicked && (
        <ShareDialog
          onDialogClose={handleDialogClose}
          open={isDialogOpen}
          url={URL}
          socialMediaUrl={socialMediaURL}
          onCopyUrl={() => handleCopyURLButtonClick()}
        />
      )}

      {isCopyURLButtonClicked && (
        <Snackbar
          open={isSnackbarShown}
          autoHideDuration={2000}
          message="Link copied to clipboard"
          onClose={() => setIsSnackbarShown(false)}
        />
      )}

      {isCopyDescButtonClicked && (
        <Snackbar
          open={isSnackbarShown}
          autoHideDuration={2000}
          message="Description copied to clipboard"
          onClose={() => setIsSnackbarShown(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default CityDetails;
