import { Snackbar } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import shareIcon from "../../assets/icons/share.svg";
import ShareDialog from "../../components/commons/alertDialogs/shareDialog/ShareDialog";
import Footer from "../../components/commons/footer/Footer";
import Header from "../../components/commons/header/Header";
import "./CityDetails.css";
import StyledCustomIconButton from "./components/buttons/StyledCustomIconButton";
import CityDetailsCarousel from "./components/carousel/CityDetailsCarousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchCities } from "../../redux/citiesSlice";

const CityDetails = () => {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities || []);

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
  const [isCopyButtonClicked, setIsCopyButtonClicked] = useState(false);

  const handleShareButtonClick = () => {
    setIsShareButtonClicked(true);
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsShareButtonClicked(false);
    setIsDialogOpen(false);
    setIsCopyButtonClicked(false);
  };

  const handleCopyURL = () => {
    setIsCopyButtonClicked(true);
    if (isCopyButtonClicked) setIsSnackbarShown(true);
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
              <StyledCustomIconButton onClick={handleShareButtonClick}>
                <img src={shareIcon} alt="Share icon" />
              </StyledCustomIconButton>
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
          onCopyUrl={() => handleCopyURL()}
        />
      )}

      {isCopyButtonClicked && (
        <Snackbar
          open={isSnackbarShown}
          autoHideDuration={4000}
          message="Link copied to clipboard"
          onClose={() => setIsSnackbarShown(false)}
        />
      )}

      <Footer />
    </div>
  );
};

export default CityDetails;
